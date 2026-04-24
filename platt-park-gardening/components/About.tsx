export default function About() {
  return (
    <section className="section">
      <div className="container about-grid">
        <div className="about-photo" />
        <div className="about-copy">
          <div className="section-eyebrow">Meet the gardener</div>
          <h3 className="display">Hi, I&apos;m Martin. I take care of yards in Platt Park.</h3>
          <p>
            I started doing yard work on weekends in 2017 while I was still driving a truck. Word got around on Nextdoor, and a couple years later it&apos;s my full-time job. These days I look after about forty homes between S Broadway and University.
          </p>
          <p>
            I&apos;m not a chain. I answer my own phone. If I can&apos;t do something, I&apos;ll tell you — and usually I know someone on our block who can. If I can, I&apos;ll show up when I said I would and leave the yard better than I found it.
          </p>
          <div className="signature">— Martin Delgado</div>
          <div className="stats-row">
            <div><div className="stat-num">140+</div><div className="stat-label">Platt Park homes served</div></div>
            <div><div className="stat-num">9 yrs</div><div className="stat-label">In the neighborhood</div></div>
            <div><div className="stat-num">24 hr</div><div className="stat-label">Reply time, guaranteed</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
