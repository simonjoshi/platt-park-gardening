import { CELL } from "../utils/gameLogic";

export function drawBusiness(ctx, biz, owned = false) {
  const px = biz.x * CELL;
  const py = biz.y * CELL;
  const pad = 4;

  ctx.fillStyle = owned ? "#475569" : biz.color;
  ctx.fillRect(px + pad, py + pad, CELL - pad * 2, CELL - pad * 2);

  ctx.strokeStyle = owned ? "#1e293b" : "#0f172a";
  ctx.lineWidth = 2;
  ctx.strokeRect(px + pad, py + pad, CELL - pad * 2, CELL - pad * 2);

  ctx.fillStyle = "#0f172a";
  ctx.font = `bold ${Math.floor(CELL * 0.45)}px system-ui`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  const label = owned ? "✓" : "$";
  ctx.fillText(label, px + CELL / 2, py + CELL / 2);
}

export default function Business() {
  return null;
}
