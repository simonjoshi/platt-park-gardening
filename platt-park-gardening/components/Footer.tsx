import * as Icons from './Icons';

export default function Footer({ onRequestQuote }: { onRequestQuote: () => void }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-mark" style={{ background: 'var(--sage)' }}><Icons.Leaf width={18} height={18} /></div>
              <span style={{ color: 'var(--cream)' }}>Martin &amp; Co.</span>
            </div>
            <p>One gardener, a short list of services, and forty yards to look after. Proudly serving Platt Park, Wash Park West, and Cherry Creek since 2017.</p>
            <div style={{ marginTop: 20, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a className="nd-share" href="#" onClick={e => e.preventDefault()}>
                <span className="nd-share-logo">N</span> Share on Nextdoor
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            {['Spring cleanup','Mowing & trimming','Mulch & beds','Pruning','Fall cleanup','Snow & path clearing'].map(s => (
              <a key={s} href="#services">{s}</a>
            ))}
          </div>
          <div className="footer-col">
            <h5>Service area</h5>
            {['Platt Park','Wash Park West','Cherry Creek','University Park'].map(a => (
              <a key={a} href="#area">{a}</a>
            ))}
          </div>
          <div className="footer-col">
            <h5>Get in touch</h5>
            <a href="tel:3035550142"><Icons.Phone width={12} height={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> (303) 555-0142</a>
            <a href="mailto:martin@plattparkyardcare.com"><Icons.Mail width={12} height={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} /> martin@plattparkyardcare.com</a>
            <a style={{ cursor: 'pointer' }} onClick={onRequestQuote}>Request a quote →</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Martin Delgado Yard Care · Denver, CO</div>
          <div>Licensed &amp; insured · M. Delgado</div>
        </div>
      </div>
    </footer>
  );
}
