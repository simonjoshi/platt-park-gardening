import { useEffect, useRef, useState, useCallback } from "react";
import {
  CELL,
  CANVAS_W,
  CANVAS_H,
  GRID_COLS,
  GRID_ROWS,
  spawnBusinesses,
  moveEntity,
  findCollision,
} from "./utils/gameLogic";
import { drawPlayer } from "./components/Player";
import { drawBusiness } from "./components/Business";
import { HUD, BusinessCard, Help } from "./components/UI";

const STARTING_CAPITAL = 1_000_000;
const BUSINESS_COUNT = 12;

function freshGame() {
  const player = { x: Math.floor(GRID_COLS / 2), y: Math.floor(GRID_ROWS / 2) };
  const occupied = new Set([`${player.x},${player.y}`]);
  const businesses = spawnBusinesses(BUSINESS_COUNT, occupied);
  return { player, businesses };
}

export default function Game() {
  const canvasRef = useRef(null);
  const [{ player, businesses }, setWorld] = useState(freshGame);
  const [portfolio, setPortfolio] = useState({
    capital: STARTING_CAPITAL,
    owned_businesses: [],
  });
  const [selected, setSelected] = useState(null);
  const [flash, setFlash] = useState(null);

  const ownedIds = new Set(portfolio.owned_businesses.map((b) => b.id));

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, 0, CANVAS_W, CANVAS_H);

    ctx.strokeStyle = "#1e293b";
    ctx.lineWidth = 1;
    for (let x = 0; x <= GRID_COLS; x++) {
      ctx.beginPath();
      ctx.moveTo(x * CELL, 0);
      ctx.lineTo(x * CELL, CANVAS_H);
      ctx.stroke();
    }
    for (let y = 0; y <= GRID_ROWS; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * CELL);
      ctx.lineTo(CANVAS_W, y * CELL);
      ctx.stroke();
    }

    for (const biz of businesses) {
      drawBusiness(ctx, biz, ownedIds.has(biz.id));
    }

    drawPlayer(ctx, player);
  }, [player, businesses, ownedIds]);

  useEffect(() => {
    draw();
  }, [draw]);

  useEffect(() => {
    const onKey = (e) => {
      if (selected) {
        if (e.key === "Escape") setSelected(null);
        return;
      }
      let dx = 0;
      let dy = 0;
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          dy = -1;
          break;
        case "ArrowDown":
        case "s":
        case "S":
          dy = 1;
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          dx = -1;
          break;
        case "ArrowRight":
        case "d":
        case "D":
          dx = 1;
          break;
        case "r":
        case "R":
          setWorld(freshGame());
          return;
        default:
          return;
      }
      e.preventDefault();
      setWorld((w) => {
        const next = moveEntity(w.player, dx, dy);
        const hit = findCollision(next, w.businesses);
        if (hit) setSelected(hit);
        return { ...w, player: next };
      });
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const buy = useCallback(() => {
    if (!selected) return;
    if (portfolio.capital < selected.valuation) return;
    if (ownedIds.has(selected.id)) return;

    setPortfolio((p) => ({
      capital: p.capital - selected.valuation,
      owned_businesses: [...p.owned_businesses, selected],
    }));
    setFlash(`Acquired ${selected.name}`);
    setSelected(null);
    setTimeout(() => setFlash(null), 1800);
  }, [selected, portfolio.capital, ownedIds]);

  return (
    <div className="game-shell">
      <header className="title">
        <h1>Deal Hunter</h1>
        <p>Roam the grid. Find deals. Build your empire.</p>
      </header>

      <HUD portfolio={portfolio} />

      <div className="canvas-wrap">
        <canvas
          ref={canvasRef}
          width={CANVAS_W}
          height={CANVAS_H}
          className="game-canvas"
        />
        {flash && <div className="flash">{flash}</div>}
      </div>

      <Help />

      <BusinessCard
        biz={selected}
        capital={portfolio.capital}
        owned={selected ? ownedIds.has(selected.id) : false}
        onBuy={buy}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}
