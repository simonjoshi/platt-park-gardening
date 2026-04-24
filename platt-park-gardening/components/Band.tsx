export default function Band() {
  const items = ['Spring cleanup', 'Weekly mowing', 'Mulch refresh', 'Pruning', 'Fall leaf haul', 'Snow & path clearing', 'Bed design', 'Seasonal planting', 'Weeding'];
  const row = [...items, ...items];
  return (
    <div className="band">
      <div className="band-track">
        <span>
          {row.map((item, i) => (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 56 }}>
              <span>{item}</span>
              <span className="band-dot" />
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
