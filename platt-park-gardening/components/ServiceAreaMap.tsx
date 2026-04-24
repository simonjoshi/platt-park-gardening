export default function ServiceAreaMap() {
  const pins: [number, number][] = [
    [170,195],[215,230],[250,210],[280,250],[200,265],[240,290],
    [310,215],[290,175],[175,240],[230,180],[265,275],[195,285],
    [265,320],[215,320],[155,265],[300,295],[330,260],
  ];
  return (
    <section className="map-section" id="area">
      <div className="container map-grid">
        <div className="map-copy">
          <div className="section-eyebrow">Where we work</div>
          <h3 className="display">Platt Park &amp; the<br />blocks around it.</h3>
          <p>
            We keep the work close to home — a few square miles between Broadway and University, from I-25 down to Evans. If you&apos;re outside this circle, we&apos;ll point you to another gardener we trust.
          </p>
          <ul className="area-list">
            {[
              { name: 'Platt Park', count: '62 homes' },
              { name: 'Washington Park West', count: '34 homes' },
              { name: 'Cherry Creek', count: '28 homes' },
              { name: 'University Park', count: '16 homes' },
            ].map((a) => (
              <li key={a.name} className="area-item">
                <span className="area-name"><span className="area-pin" />{a.name}</span>
                <span className="area-count">Serving · {a.count}</span>
              </li>
            ))}
            <li className="area-item" style={{ opacity: 0.55 }}>
              <span className="area-name"><span className="area-pin" style={{ background: '#bbb' }} />Everywhere else</span>
              <span className="area-count">We&apos;ll refer you out</span>
            </li>
          </ul>
        </div>
        <div className="map-viz">
          <svg viewBox="0 0 500 500" width="100%" height="100%" style={{ display: 'block' }}>
            <defs>
              <pattern id="grass" patternUnits="userSpaceOnUse" width="8" height="8">
                <rect width="8" height="8" fill="#F5EFE4"/>
                <circle cx="2" cy="2" r="0.4" fill="#8FA37A" opacity="0.4"/>
                <circle cx="6" cy="6" r="0.4" fill="#8FA37A" opacity="0.4"/>
              </pattern>
            </defs>
            <rect width="500" height="500" fill="url(#grass)"/>
            {[80,160,240,320,400].map(y => <line key={`h${y}`} x1="0" y1={y} x2="500" y2={y} stroke="#D8CDB4" strokeWidth="1.5"/>)}
            {[80,160,240,320,400].map(x => <line key={`v${x}`} x1={x} y1="0" x2={x} y2="500" stroke="#D8CDB4" strokeWidth="1.5"/>)}
            <path d="M 0 140 Q 180 180 250 300 T 500 460" stroke="#C96B4A" strokeWidth="4" fill="none" opacity="0.7"/>
            <text x="30" y="130" fontFamily="Georgia, serif" fontStyle="italic" fontSize="13" fill="#A6502F">I-25</text>
            <ellipse cx="370" cy="150" rx="60" ry="75" fill="#8FA37A" opacity="0.55"/>
            <text x="370" y="155" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="12" fill="#2F3C25">Wash Park</text>
            <path d="M 130 220 Q 110 180 150 160 Q 210 130 280 150 Q 340 160 360 210 Q 380 270 340 320 Q 280 370 210 360 Q 140 340 130 280 Z" fill="#4A5D3A" opacity="0.22" stroke="#4A5D3A" strokeWidth="2" strokeDasharray="5 3"/>
            <text x="200" y="215" fontFamily="Georgia, serif" fontSize="14" fontWeight="500" fill="#2F3C25">Platt Park</text>
            <text x="285" y="195" fontFamily="Georgia, serif" fontSize="11" fill="#3D4434" opacity="0.85">Wash Park West</text>
            <text x="160" y="310" fontFamily="Georgia, serif" fontSize="11" fill="#3D4434" opacity="0.85">University Park</text>
            {pins.map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y+2} r="3" fill="#1F2419" opacity="0.1"/>
                <circle cx={x} cy={y} r="4" fill="#C96B4A"/>
                <circle cx={x} cy={y} r="1.5" fill="#F5EFE4"/>
              </g>
            ))}
            <circle cx="222" cy="245" r="14" fill="#E8C36B" opacity="0.4"/>
            <circle cx="222" cy="245" r="8" fill="#1F2419"/>
            <circle cx="222" cy="245" r="3" fill="#E8C36B"/>
            <text x="222" y="225" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontSize="11" fill="#1F2419">Martin&apos;s route</text>
            <g transform="translate(440 440)">
              <circle r="18" fill="#F5EFE4" stroke="#1F2419" strokeWidth="1"/>
              <path d="M 0 -12 L 3 0 L 0 12 L -3 0 Z" fill="#1F2419"/>
              <text y="-20" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#1F2419">N</text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
