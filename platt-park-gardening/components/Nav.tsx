'use client';
import * as Icons from './Icons';

export default function Nav({ onRequestQuote }: { onRequestQuote: () => void }) {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <div className="logo">
          <div className="logo-mark"><Icons.Leaf width={18} height={18} /></div>
          <span>Martin <span className="italic" style={{ fontWeight: 400, color: 'var(--moss-dark)' }}>&amp; Co.</span></span>
        </div>
        <div className="nav-links">
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#work">Our work</a>
          <a className="nav-link" href="#neighbors">Neighbors</a>
          <a className="nav-link" href="#area">Service area</a>
          <a className="nav-link" href="tel:3035550142" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--ink)', fontWeight: 600 }}>
            <Icons.Phone width={13} height={13} /> (303) 555-0142
          </a>
          <button className="nav-cta" onClick={onRequestQuote}>
            Request a quote <Icons.ArrowRight width={14} height={14} />
          </button>
        </div>
      </div>
    </nav>
  );
}
