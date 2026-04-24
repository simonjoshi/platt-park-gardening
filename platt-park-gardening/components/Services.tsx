'use client';
import * as Icons from './Icons';

const SERVICES = [
  { id: 'spring', num: '01', title: 'Spring\nCleanup', tag: 'Most Booked', icon: 'Leaf', body: 'Dead growth removal, bed prep, first mow, fresh mulch. We get your yard out of hibernation.' },
  { id: 'mowing', num: '02', title: 'Mowing &\nTrimming', icon: 'Mow', body: 'Weekly or bi-weekly lawn care. Edged, blown, bagged. No surprises on the invoice.' },
  { id: 'mulch',  num: '03', title: 'Mulch &\nBed Refresh', icon: 'Sprout', body: 'Bark, hardwood, or rock. Beds get weeded, edged, and topped. Curb appeal, instantly.' },
  { id: 'pruning',num: '04', title: 'Pruning &\nShaping', icon: 'Scissors', body: 'Shrubs, ornamentals, small trees. Seasonal trims to keep everything healthy and in-scale.' },
  { id: 'fall',   num: '05', title: 'Fall\nCleanup', tag: 'Book by Oct', icon: 'Rake', body: 'Leaf removal, bed cutback, winter prep. We get the yard buttoned up before the first snow.' },
  { id: 'removal',num: '06', title: 'Dead Plant\nRemoval', icon: 'Trash', body: 'Dead shrubs, overgrown perennials, unwanted trees up to 6". Hauled away clean.' },
  { id: 'snow',   num: '07', title: 'Snow &\nPath Clearing', tag: 'Winter', icon: 'Snow', body: 'Driveways, walks, and steps cleared before you leave for work. On-call after every storm.' },
];

const ICON_MAP: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  Leaf: Icons.Leaf, Mow: Icons.Mow, Sprout: Icons.Sprout, Scissors: Icons.Scissors,
  Rake: Icons.Rake, Trash: Icons.Trash, Snow: Icons.Snow,
};

export { SERVICES };

export default function Services({
  selected, setSelected, onRequestQuote,
}: {
  selected: string[];
  setSelected: (fn: (s: string[]) => string[]) => void;
  onRequestQuote: () => void;
}) {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">What we do</div>
            <h2 className="display section-title">A short list,<br />done properly.</h2>
          </div>
          <p className="section-sub">
            We don&apos;t do hardscaping, irrigation installs, or big renovations. We do the seasonal stuff that keeps your yard looking cared-for — every week, every season. In winter, we clear snow for the same neighbors.
          </p>
        </div>
        <div className="services-grid">
          {SERVICES.map((s) => {
            const Icon = ICON_MAP[s.icon];
            const isSel = selected.includes(s.id);
            return (
              <div
                key={s.id}
                className={`service-card ${isSel ? 'selected' : ''}`}
                onClick={() => setSelected((sel) => sel.includes(s.id) ? sel.filter((x) => x !== s.id) : [...sel, s.id])}
              >
                {s.tag && <div className="service-tag">{s.tag}</div>}
                <div>
                  <div className="service-num">{s.num} / 07</div>
                  <h3 className="service-title">
                    {s.title.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}
                  </h3>
                  <p className="service-body">{s.body}</p>
                </div>
                <Icon className="service-icon" width={44} height={44} />
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 40, alignItems: 'center', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={onRequestQuote}>
            {selected.length > 0 ? `Request a quote (${selected.length} selected)` : 'Request a quote'}
            <Icons.ArrowRight width={16} height={16} />
          </button>
          <span style={{ fontSize: 14, color: 'var(--muted)' }}>
            Click a service to pre-fill your request — or skip ahead and tell us later.
          </span>
        </div>
      </div>
    </section>
  );
}
