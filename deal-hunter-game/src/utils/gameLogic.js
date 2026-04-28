export const GRID_COLS = 20;
export const GRID_ROWS = 15;
export const CELL = 36;
export const CANVAS_W = GRID_COLS * CELL;
export const CANVAS_H = GRID_ROWS * CELL;

const FIRST_NAMES = [
  "Bay", "Mission", "Oakland", "Berkeley", "Castro", "Mile High", "Platt Park",
  "Cherry Creek", "Sunset", "Marina", "Pearl District", "Capitol Hill",
  "RiNo", "LoDo", "Fillmore", "Hayes Valley", "SoMa",
];

const LAST_NAMES = [
  "Coffee Co.", "Plumbing", "Auto Repair", "Dental", "Yoga Studio",
  "Bakery", "Laundromat", "HVAC", "Tax Prep", "Pet Grooming",
  "Landscaping", "Print Shop", "Pizzeria", "Juice Bar", "Tutoring",
  "Vending Co.", "Locksmith", "Salon", "Cleaners", "Smog Shop",
];

const RISK_TIERS = ["Low", "Medium", "High"];

const RISK_COLORS = {
  Low: "#10b981",
  Medium: "#f59e0b",
  High: "#ef4444",
};

let bizIdCounter = 1;

export function makeBusiness(x, y) {
  const name = `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`;
  const valuation = randInt(50_000, 2_000_000);
  const risk = pick(RISK_TIERS);
  const roi_pct = roiForRisk(risk);
  return {
    id: bizIdCounter++,
    name,
    valuation,
    roi_pct,
    risk,
    color: RISK_COLORS[risk],
    x,
    y,
  };
}

function roiForRisk(risk) {
  if (risk === "Low") return round(randFloat(3, 8));
  if (risk === "Medium") return round(randFloat(8, 18));
  return round(randFloat(15, 40));
}

export function spawnBusinesses(count, occupied = new Set()) {
  const businesses = [];
  let tries = 0;
  while (businesses.length < count && tries < count * 30) {
    tries++;
    const x = randInt(0, GRID_COLS - 1);
    const y = randInt(0, GRID_ROWS - 1);
    const key = `${x},${y}`;
    if (occupied.has(key)) continue;
    occupied.add(key);
    businesses.push(makeBusiness(x, y));
  }
  return businesses;
}

export function moveEntity(entity, dx, dy) {
  const nx = clamp(entity.x + dx, 0, GRID_COLS - 1);
  const ny = clamp(entity.y + dy, 0, GRID_ROWS - 1);
  return { ...entity, x: nx, y: ny };
}

export function findCollision(player, businesses) {
  return businesses.find((b) => b.x === player.x && b.y === player.y) || null;
}

export function netWorth(portfolio) {
  const owned = portfolio.owned_businesses.reduce(
    (sum, b) => sum + b.valuation,
    0,
  );
  return portfolio.capital + owned;
}

export function expectedAnnualIncome(portfolio) {
  return portfolio.owned_businesses.reduce(
    (sum, b) => sum + b.valuation * (b.roi_pct / 100),
    0,
  );
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randFloat(min, max) {
  return Math.random() * (max - min) + min;
}
function round(n) {
  return Math.round(n * 10) / 10;
}
function clamp(v, lo, hi) {
  return Math.max(lo, Math.min(hi, v));
}

export function formatCurrency(n) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`;
  return `$${n.toFixed(0)}`;
}
