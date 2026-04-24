import * as Icons from './Icons';

const TESTIMONIALS = [
  { name: 'Michelle K.', street: 'S Logan St',    time: '3 weeks ago',  avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80', body: "Martin did our spring cleanup and the yard looks unbelievable. He pulled a winter's worth of dead growth, refreshed all the beds with mulch, and actually called me back within an hour. Highly recommend for anyone on our block.", likes: 42, replies: 8,  featured: false, hl: 'an hour' },
  { name: 'Susan T.',    street: 'S Pearl St',    time: '1 month ago',  avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80', body: "Finally found a gardener who treats our yard like his own. Martin has been doing bi-weekly mowing all summer.", likes: 28, replies: 3,  featured: true },
  { name: 'Raj P.',      street: 'E Arkansas Ave',time: '2 weeks ago',  avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80', body: "Got three quotes for fall cleanup. Verde was $$$ and wouldn't return my calls. Martin showed up the next day, quoted fair, finished in an afternoon.", likes: 19, replies: 5,  featured: false, hl: 'next day' },
  { name: 'Linda H.',    street: 'S Grant St',    time: '2 months ago', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80', body: "I found Martin through a Nextdoor post and I've recommended him to four neighbors since. He is the real deal — reliable, kind, and knows his plants.", likes: 54, replies: 11, featured: false },
  { name: 'Tom & Dave',  street: 'S Downing St',  time: '5 weeks ago',  avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=200&q=80', body: "Our front bed was a disaster after the move. Martin rebuilt it, planted native grasses, and has kept it looking great all season.", likes: 31, replies: 4,  featured: false },
  { name: 'Priya S.',    street: 'S Clarkson St', time: '3 months ago', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80', body: "Honest pricing, shows up when he says. We're on the monthly maintenance plan now. Lovely person too.", likes: 22, replies: 2,  featured: false },
];

function highlightText(body: string, hl?: string) {
  if (!hl) return <>{body}</>;
  const parts = body.split(hl);
  return (
    <>
      {parts.map((chunk, i) => (
        <span key={i}>
          {chunk}
          {i < parts.length - 1 && <span className="hl">{hl}</span>}
        </span>
      ))}
    </>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" id="neighbors">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-eyebrow">What the neighbors say</div>
            <h2 className="display section-title">Straight from<br />Nextdoor.</h2>
          </div>
          <p className="section-sub">
            Every quote below is from a real customer in Platt Park or Cherry Creek. Street names kept where they were shared — your neighbors like to know which block.
          </p>
        </div>
        <div className="nd-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className={`nd-card ${t.featured ? 'featured' : ''}`}>
              <div className="nd-head">
                <div className="nd-avatar" style={{ backgroundImage: `url(${t.avatar})` }} />
                <div style={{ flex: 1 }}>
                  <div className="nd-name">{t.name}</div>
                  <div className="nd-meta">
                    <span className="nd-street"><Icons.Pin width={10} height={10} /> {t.street}</span>
                    <span> · {t.time}</span>
                  </div>
                </div>
              </div>
              <div className="nd-body">{highlightText(t.body, t.hl)}</div>
              {!t.featured && (
                <div className="nd-foot">
                  <span><Icons.Heart width={13} height={13} /> {t.likes}</span>
                  <span><Icons.MessageCircle width={13} height={13} /> {t.replies} replies</span>
                  <span style={{ marginLeft: 'auto', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#00B246', fontWeight: 600 }}>Nextdoor</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
