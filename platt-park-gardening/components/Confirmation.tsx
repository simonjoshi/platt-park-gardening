'use client';
import * as Icons from './Icons';

const SERVICE_NAMES: Record<string, string> = {
  spring: 'Spring Cleanup', mowing: 'Mowing & Trimming', mulch: 'Mulch & Bed Refresh',
  pruning: 'Pruning & Shaping', fall: 'Fall Cleanup', removal: 'Dead Plant Removal', snow: 'Snow & Path Clearing',
};
const TIMING_NAMES: Record<string, string> = {
  asap: 'ASAP / this week', twoweek: 'Within 2 weeks', month: 'Sometime this month', flexible: 'Flexible',
};

type FormData = { name?: string; services?: string[]; address?: string; zip?: string; timing?: string; photos?: string[]; phone?: string; email?: string };

export default function Confirmation({ data, onReturn }: { data: FormData; onReturn: () => void }) {
  const firstName = (data.name || 'Neighbor').split(' ')[0];
  return (
    <div className="confirm-wrap">
      <div className="confirm-card">
        <div className="confirm-checkmark">
          <Icons.Check width={48} height={48} />
        </div>
        <h1 className="display confirm-title">
          Thanks, {firstName}.<br />
          <span style={{ color: 'var(--moss)', fontStyle: 'italic', fontWeight: 400 }}>Martin&apos;s got it.</span>
        </h1>
        <p className="confirm-sub">
          Your request is in. Martin will text or call you within <strong>24 hours</strong> — usually sooner.
        </p>
        <div className="confirm-panel">
          <h4>What you asked for</h4>
          <ul className="confirm-list">
            <li><strong>Services</strong><span>{data.services?.length ? data.services.map(s => SERVICE_NAMES[s]).join(', ') : '—'}</span></li>
            <li><strong>Address</strong><span>{data.address || '—'}{data.zip ? `, ${data.zip}` : ''}</span></li>
            <li><strong>Timing</strong><span>{TIMING_NAMES[data.timing || ''] || '—'}</span></li>
            <li><strong>Photos</strong><span>{data.photos?.length ? `${data.photos.length} attached` : 'None'}</span></li>
            <li><strong>Reply to</strong><span>{data.phone} · {data.email}</span></li>
          </ul>
        </div>
        <div className="confirm-panel" style={{ background: 'var(--moss-dark)', color: 'var(--cream)' }}>
          <h4 style={{ color: 'var(--butter)' }}>While you wait — help a neighbor</h4>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'rgba(245,239,228,0.8)', margin: '0 0 18px' }}>
            If Martin&apos;s done good work for you before, a quick Nextdoor post or referral goes a long way. We grow exactly one way — neighbors telling neighbors.
          </p>
          <div className="confirm-share">
            <a className="nd-share" href="#" onClick={e => e.preventDefault()}><span className="nd-share-logo">N</span> Share on Nextdoor</a>
            <a className="nd-share" href="#" onClick={e => e.preventDefault()}><Icons.Share width={14} height={14} /> Copy link</a>
            <a className="nd-share" href="#" onClick={e => e.preventDefault()}><Icons.Mail width={14} height={14} /> Email a friend</a>
          </div>
        </div>
        <button className="btn btn-ghost" onClick={onReturn}>
          <Icons.ArrowLeft width={14} height={14} /> Back to the site
        </button>
      </div>
    </div>
  );
}
