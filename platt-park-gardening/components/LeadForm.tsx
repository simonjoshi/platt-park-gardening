'use client';
import { useState } from 'react';
import * as Icons from './Icons';
import { SERVICES } from './Services';

const SHEETS_ENDPOINT = process.env.NEXT_PUBLIC_SHEETS_ENDPOINT || '';

const PLATT_ZIPS = ['80209', '80210', '80222', '80223'];
const PLATT_KEYWORDS = ['platt', 'pearl', 'logan', 'grant', 'downing', 'clarkson', 'washington park', 'wash park', 'cherry creek', 'university', 'arkansas'];

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Leaf: Icons.Leaf, Mow: Icons.Mow, Sprout: Icons.Sprout, Scissors: Icons.Scissors,
  Rake: Icons.Rake, Trash: Icons.Trash, Snow: Icons.Snow,
};

type FormData = {
  services: string[];
  name: string; phone: string; email: string;
  address: string; zip: string; lot: string;
  timing: string; notes: string; photos: string[];
};

export default function LeadForm({
  preSelected = [],
  onSubmit,
  onBack,
}: {
  preSelected?: string[];
  onSubmit: (data: FormData) => void;
  onBack: () => void;
}) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>({ services: preSelected, name: '', phone: '', email: '', address: '', zip: '', lot: '', timing: '', notes: '', photos: [] });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (patch: Partial<FormData>) => setData(d => ({ ...d, ...patch }));

  const validate = (s: number) => {
    const e: Record<string, string> = {};
    if (s === 0 && data.services.length === 0) e.services = 'Pick at least one service so Martin knows what to quote.';
    if (s === 1) {
      if (!data.address.trim()) e.address = 'We need your street to verify service area.';
      if (!data.zip.trim() || !/^\d{5}$/.test(data.zip)) e.zip = 'Enter a 5-digit ZIP.';
      const inArea = PLATT_ZIPS.includes(data.zip) || PLATT_KEYWORDS.some(k => data.address.toLowerCase().includes(k));
      if (data.address && data.zip && /^\d{5}$/.test(data.zip) && !inArea)
        e.address = "Hmm — that looks outside our service area (Platt Park / Cherry Creek). You can still submit and we'll refer you out.";
    }
    if (s === 2 && !data.timing) e.timing = 'Pick a rough timeframe.';
    if (s === 3) {
      if (!data.name.trim()) e.name = 'Your name?';
      if (!data.phone.trim() || data.phone.replace(/\D/g, '').length < 10) e.phone = 'A 10-digit phone so Martin can text you.';
      if (!data.email.trim() || !/@/.test(data.email)) e.email = 'A working email.';
    }
    return e;
  };

  const next = () => {
    const e = validate(step);
    const isOutOfArea = e.address?.includes('outside');
    if (isOutOfArea && !errors.address) { setErrors(e); return; }
    if (Object.keys(e).filter(k => !(k === 'address' && isOutOfArea)).length > 0) { setErrors(e); return; }
    setErrors({});
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Fire-and-forget POST to Google Sheets
      if (SHEETS_ENDPOINT) {
        fetch(SHEETS_ENDPOINT, {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({
            name: data.name,
            phone: data.phone,
            email: data.email,
            address: data.address,
            zip: data.zip,
            lot: data.lot,
            services: data.services,
            timing: data.timing,
            notes: data.notes,
            photoCount: data.photos.length,
          }),
        }).catch(() => {}); // silent — don't block the confirmation screen
      }
      onSubmit(data);
    }
  };

  const back = () => {
    if (step === 0) { onBack(); return; }
    setErrors({});
    setStep(step - 1);
  };

  const fakePhotos = [
    'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80',
  ];

  return (
    <section className="form-wrap" id="quote">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">Tell us about your yard</div>
            <h2 className="display section-title">Four quick<br />questions.</h2>
          </div>
          <p className="section-sub">
            Martin reviews every request personally and replies within 24 hours. Usually faster. No call center, no auto-responder.
          </p>
        </div>
        <div className="form-card">
          <div className="form-step">
            <div className="form-step-dots">
              {[0,1,2,3].map(i => (
                <div key={i} className={`form-dot ${i === step ? 'active' : i < step ? 'done' : ''}`} />
              ))}
            </div>
            <div className="form-step-label">Step {step + 1} of 4</div>
          </div>

          {step === 0 && (
            <div>
              <h3 className="form-q">What do you need?</h3>
              <p className="form-hint">Pick anything that applies. You can always change this later.</p>
              <div className="chip-grid">
                {SERVICES.map(s => {
                  const Icon = ICON_MAP[s.icon];
                  const active = data.services.includes(s.id);
                  return (
                    <button key={s.id} className={`chip ${active ? 'active' : ''}`}
                      onClick={() => update({ services: active ? data.services.filter(x => x !== s.id) : [...data.services, s.id] })}>
                      <div className="chip-check">{active && <Icons.Check width={14} height={14} />}</div>
                      <Icon width={20} height={20} style={{ flexShrink: 0 }} />
                      <div>
                        <div>{s.title.replace('\n', ' ')}</div>
                        <div className="chip-desc">{s.body.split('.')[0]}.</div>
                      </div>
                    </button>
                  );
                })}
              </div>
              {errors.services && <div className="field-err" style={{ marginTop: 12 }}>{errors.services}</div>}
            </div>
          )}

          {step === 1 && (
            <div>
              <h3 className="form-q">Where&apos;s the yard?</h3>
              <p className="form-hint">We only work in Platt Park, Wash Park, Cherry Creek, and University Park.</p>
              <div className="input-row">
                <div className="field">
                  <label>Street address</label>
                  <input type="text" placeholder="1234 S Pearl St" value={data.address} onChange={e => update({ address: e.target.value })} />
                  <div className="hint">Just street &amp; number — we&apos;ll confirm over text before anyone shows up.</div>
                </div>
                <div className="input-row input-2">
                  <div className="field">
                    <label>ZIP code</label>
                    <input type="text" inputMode="numeric" maxLength={5} placeholder="80210" value={data.zip} onChange={e => update({ zip: e.target.value.replace(/\D/g, '') })} />
                    {errors.zip && <div className="field-err">{errors.zip}</div>}
                  </div>
                  <div className="field">
                    <label>Lot size (rough)</label>
                    <select value={data.lot} onChange={e => update({ lot: e.target.value })}>
                      <option value="">Not sure</option>
                      <option>Small (&lt; 3,000 sqft)</option>
                      <option>Medium (3,000 – 6,000)</option>
                      <option>Large (6,000+)</option>
                    </select>
                  </div>
                </div>
                {errors.address && <div className="field-err">{errors.address}</div>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="form-q">When would you like this done?</h3>
              <p className="form-hint">We&apos;re currently booking 2–3 weeks out — help us set expectations.</p>
              <div className="chip-grid">
                {[
                  { id: 'asap',     label: 'ASAP / this week',        desc: 'Rush fee may apply during peak season.' },
                  { id: 'twoweek', label: 'Within 2 weeks',          desc: 'Typical for spring cleanup requests.' },
                  { id: 'month',   label: 'Sometime this month',     desc: 'Best for ongoing maintenance starts.' },
                  { id: 'flexible',label: 'Flexible / whenever',     desc: "We'll fit you in between regulars." },
                ].map(o => (
                  <button key={o.id} className={`chip ${data.timing === o.id ? 'active' : ''}`} onClick={() => update({ timing: o.id })}>
                    <div className="chip-check">{data.timing === o.id && <Icons.Check width={14} height={14} />}</div>
                    <Icons.Calendar width={20} height={20} style={{ flexShrink: 0 }} />
                    <div>
                      <div>{o.label}</div>
                      <div className="chip-desc">{o.desc}</div>
                    </div>
                  </button>
                ))}
              </div>
              {errors.timing && <div className="field-err" style={{ marginTop: 12 }}>{errors.timing}</div>}
              <div style={{ marginTop: 28 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: 'var(--ink-soft)', marginBottom: 10 }}>
                  Photos of the yard <span style={{ color: 'var(--muted)', fontWeight: 400 }}>(optional — helps a lot)</span>
                </label>
                <div className="photo-drop" onClick={() => update({ photos: [...data.photos, ...fakePhotos].slice(0, 5) })}>
                  <Icons.Upload width={28} height={28} style={{ color: 'var(--moss)', marginBottom: 8 }} />
                  <div style={{ fontSize: 15, fontWeight: 500 }}>Click to add photos</div>
                  <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 4 }}>Up to 5 photos · JPG or HEIC</div>
                </div>
                {data.photos.length > 0 && (
                  <div className="photo-grid">
                    {data.photos.map((p, i) => (
                      <div key={i} className="photo-cell" style={{ backgroundImage: `url(${p})` }}>
                        <button className="photo-remove" onClick={() => update({ photos: data.photos.filter((_, j) => j !== i) })}>
                          <Icons.Close width={12} height={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="form-q">How does Martin reach you?</h3>
              <p className="form-hint">He&apos;ll text or call within 24 hours — usually within a few.</p>
              <div className="input-row">
                <div className="field">
                  <label>Your name</label>
                  <input type="text" placeholder="Michelle K." value={data.name} onChange={e => update({ name: e.target.value })} />
                  {errors.name && <div className="field-err">{errors.name}</div>}
                </div>
                <div className="input-row input-2">
                  <div className="field">
                    <label>Phone</label>
                    <input type="tel" placeholder="(303) 555-0142" value={data.phone} onChange={e => update({ phone: e.target.value })} />
                    {errors.phone && <div className="field-err">{errors.phone}</div>}
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input type="email" placeholder="you@email.com" value={data.email} onChange={e => update({ email: e.target.value })} />
                    {errors.email && <div className="field-err">{errors.email}</div>}
                  </div>
                </div>
                <div className="field">
                  <label>Anything else we should know? <span style={{ color: 'var(--muted)', fontWeight: 400 }}>(optional)</span></label>
                  <textarea placeholder="Dogs in the yard, gate codes, specific concerns, favorite plants you want kept…" value={data.notes} onChange={e => update({ notes: e.target.value })} />
                </div>
              </div>
              <div style={{ marginTop: 20, padding: 14, background: 'var(--cream)', borderRadius: 12, fontSize: 13, color: 'var(--ink-soft)', display: 'flex', alignItems: 'center', gap: 12 }}>
                <Icons.Clock width={18} height={18} style={{ color: 'var(--moss)', flexShrink: 0 }} />
                <div><strong>You&apos;ll hear back within 24 hours.</strong> We never share your info — not with &quot;partners&quot;, not anywhere.</div>
              </div>
            </div>
          )}

          <div className="form-nav">
            <button className="form-back" onClick={back}>
              <Icons.ArrowLeft width={14} height={14} /> {step === 0 ? 'Back to site' : 'Previous'}
            </button>
            <button className="btn btn-primary" onClick={next}>
              {step === 3 ? 'Send request' : 'Continue'} <Icons.ArrowRight width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
