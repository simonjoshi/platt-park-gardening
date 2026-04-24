'use client';
import * as Icons from './Icons';

export default function Hero({ onRequestQuote }: { onRequestQuote: () => void }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-dot" /> Serving Platt Park &amp; Cherry Creek since 2017
          </div>
          <h1 className="display hero-title">
            Your neighbor&apos;s<br />
            <span className="grn">favorite</span> <span className="tc">gardener.</span><br />
            <span style={{ color: 'var(--ink-soft)', fontWeight: 400, letterSpacing: '-0.015em', fontSize: '21px' }}>
              And <span className="italic" style={{ color: 'var(--moss)' }}>snow shoveler</span>
            </span>
          </h1>
          <p className="hero-sub">
            Honest yard care for Platt Park homes. One local gardener, a short list of services, done right. No chains, no upsells, no runaround.
          </p>
          <div className="hero-cta-row">
            <button className="btn btn-primary" onClick={onRequestQuote}>
              Request a quote <Icons.ArrowRight width={16} height={16} />
            </button>
            <a className="btn btn-terra" href="tel:3035550142">
              <Icons.Phone width={15} height={15} /> Call or text (303) 555-0142
            </a>
            <a className="btn btn-ghost" href="#work">See our work</a>
          </div>
          <div className="hero-meta">
            <div className="meta-item">
              <div className="avatars">
                {[12, 13, 14, 15].map((i) => (
                  <div key={i} className="avatar-stack" style={{ backgroundImage: `url(https://i.pravatar.cc/80?img=${i})` }} />
                ))}
              </div>
              <span><strong style={{ color: 'var(--ink)' }}>140+ neighbors</strong> in Platt Park</span>
            </div>
            <div className="meta-item">
              <div className="meta-icon" style={{ color: 'var(--butter)' }}>
                <Icons.Star width={16} height={16} />
              </div>
              <span><strong style={{ color: 'var(--ink)' }}>4.9</strong> across 62 reviews</span>
            </div>
          </div>
        </div>
        <div className="hero-img">
          <div className="hero-img-inner" />
          <div className="hero-badge">
            <div className="hero-badge-avatar" />
            <div className="hero-badge-text">
              <strong>Hi, I&apos;m Martin.</strong>
              That&apos;s me finishing up a spring cleanup on S. Logan St last Tuesday.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
