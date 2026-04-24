'use client';
import { useState, useRef, useCallback, useEffect } from 'react';

const BA_PAIRS = [
  { id: 'logan',   label: 'Spring cleanup · S Logan St',      before: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1400&q=80', after: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=80' },
  { id: 'pearl',   label: 'Mulch + bed refresh · S Pearl St', before: 'https://images.unsplash.com/photo-1542838687-2c5f2b57f7e0?auto=format&fit=crop&w=1400&q=80', after: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1400&q=80' },
  { id: 'arkansas',label: 'Fall cleanup · E Arkansas Ave',    before: 'https://images.unsplash.com/photo-1507369632363-2ce6eda01f16?auto=format&fit=crop&w=1400&q=80', after: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1400&q=80' },
  { id: 'downing', label: 'Bed rebuild · S Downing St',       before: 'https://images.unsplash.com/photo-1599685315640-4a8c1f1c6edb?auto=format&fit=crop&w=1400&q=80', after: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1400&q=80' },
];

function BeforeAfter({ pair }: { pair: typeof BA_PAIRS[0] }) {
  const [pos, setPos] = useState(50);
  const wrapRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    setPos((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (!dragRef.current) return;
      move('touches' in e ? e.touches[0].clientX : e.clientX);
    };
    const onUp = () => { dragRef.current = false; };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, [move]);

  return (
    <div
      className="ba-slider"
      ref={wrapRef}
      onMouseDown={(e) => { dragRef.current = true; move(e.clientX); }}
      onTouchStart={(e) => { dragRef.current = true; move(e.touches[0].clientX); }}
    >
      <div className="ba-img ba-before" style={{ backgroundImage: `url(${pair.before})` }} />
      <div className="ba-after-wrap" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <div className="ba-img" style={{ backgroundImage: `url(${pair.after})` }} />
      </div>
      <div className="ba-label ba-label-before">Before</div>
      <div className="ba-label ba-label-after">After</div>
      <div className="ba-handle" style={{ left: `${pos}%` }} />
    </div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState(0);
  return (
    <section className="gallery-wrap" id="work">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">Real yards, real neighbors</div>
            <h2 className="display section-title">Drag to see<br />the difference.</h2>
          </div>
          <p className="section-sub">
            A few yards from this season. Drag the handle on any image to see what we started with — and where we left it.
          </p>
        </div>
        <BeforeAfter pair={BA_PAIRS[active]} />
        <div className="gallery-thumbs">
          {BA_PAIRS.map((p, i) => (
            <div
              key={p.id}
              className={`thumb ${i === active ? 'active' : ''}`}
              style={{ backgroundImage: `url(${p.after})` }}
              onClick={() => setActive(i)}
            >
              <div className="thumb-label">{p.label.split(' · ')[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
