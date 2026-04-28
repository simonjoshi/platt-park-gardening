import { CELL } from "../utils/gameLogic";

export function drawPlayer(ctx, player) {
  const cx = player.x * CELL + CELL / 2;
  const cy = player.y * CELL + CELL / 2;
  const r = CELL * 0.4;

  ctx.fillStyle = "#fbbf24";
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0.25 * Math.PI, 1.75 * Math.PI);
  ctx.lineTo(cx, cy);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#1e293b";
  ctx.beginPath();
  ctx.arc(cx, cy - r * 0.4, r * 0.18, 0, 2 * Math.PI);
  ctx.fill();
}

export default function Player() {
  return null;
}
