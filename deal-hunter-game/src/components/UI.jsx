import {
  formatCurrency,
  netWorth,
  expectedAnnualIncome,
} from "../utils/gameLogic";

export function HUD({ portfolio }) {
  const nw = netWorth(portfolio);
  const income = expectedAnnualIncome(portfolio);
  return (
    <div className="hud">
      <div className="hud-stat">
        <span className="hud-label">Cash</span>
        <span className="hud-value">{formatCurrency(portfolio.capital)}</span>
      </div>
      <div className="hud-stat">
        <span className="hud-label">Owned</span>
        <span className="hud-value">{portfolio.owned_businesses.length}</span>
      </div>
      <div className="hud-stat">
        <span className="hud-label">Net Worth</span>
        <span className="hud-value">{formatCurrency(nw)}</span>
      </div>
      <div className="hud-stat">
        <span className="hud-label">Annual Income</span>
        <span className="hud-value">{formatCurrency(income)}</span>
      </div>
    </div>
  );
}

export function BusinessCard({ biz, capital, owned, onBuy, onClose }) {
  if (!biz) return null;
  const canAfford = capital >= biz.valuation;
  const annualIncome = biz.valuation * (biz.roi_pct / 100);
  return (
    <div className="card-overlay" onClick={onClose}>
      <div className="card" onClick={(e) => e.stopPropagation()}>
        <div className="card-header" style={{ background: biz.color }}>
          <h2>{biz.name}</h2>
          <button className="close" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="card-body">
          <Row label="Cost to Acquire" value={formatCurrency(biz.valuation)} />
          <Row label="Annual ROI" value={`${biz.roi_pct}%`} />
          <Row label="You'll Earn Per Year" value={formatCurrency(annualIncome)} valueStyle={{ color: "#10b981", fontWeight: 700 }} />
          <Row
            label="Risk Level"
            value={biz.risk}
            valueStyle={{ color: biz.color, fontWeight: 700 }}
          />
          <Row label="Your Current Cash" value={formatCurrency(capital)} valueStyle={{ color: canAfford ? "#10b981" : "#ef4444" }} />
        </div>
        <div className="card-footer">
          {owned ? (
            <button className="btn btn-disabled" disabled>
              Already Owned
            </button>
          ) : (
            <button
              className={`btn ${canAfford ? "btn-buy" : "btn-disabled"}`}
              onClick={onBuy}
              disabled={!canAfford}
            >
              {canAfford
                ? `✓ Acquire for ${formatCurrency(biz.valuation)}`
                : `✗ Need ${formatCurrency(biz.valuation - capital)} more`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, valueStyle }) {
  return (
    <div className="row">
      <span className="row-label">{label}</span>
      <span className="row-value" style={valueStyle}>
        {value}
      </span>
    </div>
  );
}

export function Help() {
  return (
    <div className="help">
      <span><strong>The Goal:</strong> Own businesses to generate passive annual income</span>
      <span><strong>How to Earn:</strong> Each business pays out annual ROI (% of cost per year)</span>
      <span><strong>Move:</strong> WASD / Arrow keys → Step onto a business ($) to inspect</span>
      <span><strong>Buy:</strong> Click "Acquire" if you have enough cash → Gets added to your Annual Income</span>
      <span><strong>Respawn:</strong> Press R for new deals</span>
    </div>
  );
}
