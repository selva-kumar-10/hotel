/**
 * Decorative background art (static SVG, no JS, no motion).
 *
 * Every piece is `aria-hidden`, ignores the pointer and is meant to sit BEHIND
 * a section's content: give the section `relative isolate overflow-hidden`
 * and position the piece with `absolute -z-10`. Colour comes from the text
 * colour (`text-*`), so one piece works on light or dark grounds.
 */
import { cn } from "@/lib/cn";

type DecorProps = { className?: string };

const base = "pointer-events-none absolute -z-10 select-none";

/** Kolam: a rice-flour flower with a ring of dots. */
export function Kolam({ className }: DecorProps) {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg
      aria-hidden="true"
      viewBox="-100 -100 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className={cn(base, className)}
    >
      {angles.map((a) => (
        <path
          key={a}
          d="M0,-16 C16,-36 16,-60 0,-76 C-16,-60 -16,-36 0,-16Z"
          transform={`rotate(${a})`}
        />
      ))}
      <circle r="9" />
      <circle r="84" strokeDasharray="1 7" strokeLinecap="round" strokeWidth="2.6" />
      <circle r="94" />
      {angles.map((a) => (
        <circle
          key={`d${a}`}
          cx="0"
          cy="-66"
          r="2.4"
          fill="currentColor"
          stroke="none"
          transform={`rotate(${a + 22.5})`}
        />
      ))}
    </svg>
  );
}

/** Curry leaf sprig growing upward. Mirror it with `-scale-x-100`. */
export function LeafSprig({ className }: DecorProps) {
  const leaves: Array<[number, number]> = [
    [27, 236],
    [23, 206],
    [21, 176],
    [25, 146],
    [31, 116],
    [34, 86],
    [36, 56],
  ];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 270"
      className={cn(base, className)}
    >
      <path
        d="M30,270 C34,230 18,196 24,160 S30,100 36,28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <g fill="currentColor">
        {leaves.map(([x, y]) => (
          <g key={`${x}-${y}`}>
            <ellipse cx={x - 11} cy={y} rx="14" ry="5.2" transform={`rotate(-35 ${x - 11} ${y})`} />
            <ellipse cx={x + 11} cy={y - 4} rx="14" ry="5.2" transform={`rotate(35 ${x + 11} ${y - 4})`} />
          </g>
        ))}
        <ellipse cx="38" cy="22" rx="12" ry="4.6" transform="rotate(-72 38 22)" />
      </g>
    </svg>
  );
}

function Tower({ x, scale }: { x: number; scale: number }) {
  return (
    <g transform={`translate(${x},160) scale(${scale})`}>
      <rect x="-28" y="-12" width="56" height="12" />
      <rect x="-23" y="-24" width="46" height="12" />
      <rect x="-18" y="-36" width="36" height="12" />
      <rect x="-13" y="-46" width="26" height="10" />
      <rect x="-8" y="-54" width="16" height="8" />
      <polygon points="-8,-54 0,-68 8,-54" />
    </g>
  );
}

/** A row of temple gopuram silhouettes, bottom-aligned and as wide as its box. */
export function TempleSkyline({ className }: DecorProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 160"
      preserveAspectRatio="xMidYMax slice"
      fill="currentColor"
      className={cn(base, className)}
    >
      <Tower x={50} scale={0.9} />
      <Tower x={170} scale={1.5} />
      <Tower x={310} scale={1.05} />
      <Tower x={470} scale={1.8} />
      <Tower x={640} scale={1.15} />
      <Tower x={780} scale={2.0} />
      <Tower x={950} scale={1.3} />
      <Tower x={1090} scale={1.7} />
      <Tower x={1170} scale={0.8} />
    </svg>
  );
}

/** A large mandala: petals and rings. Draw it big and faint. */
export function Mandala({ className }: DecorProps) {
  const angles = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg
      aria-hidden="true"
      viewBox="-100 -100 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      className={cn(base, className)}
    >
      <circle r="96" />
      <circle r="74" />
      <circle r="30" />
      {angles.map((a) => (
        <ellipse key={a} cx="0" cy="-52" rx="10" ry="22" transform={`rotate(${a})`} />
      ))}
      {angles.map((a) => (
        <circle
          key={`o${a}`}
          cx="0"
          cy="-85"
          r="2.2"
          fill="currentColor"
          stroke="none"
          transform={`rotate(${a})`}
        />
      ))}
      {angles.map((a) => (
        <path
          key={`s${a}`}
          d="M0,-30 L5,-44 L0,-48 L-5,-44Z"
          transform={`rotate(${a + 15})`}
        />
      ))}
    </svg>
  );
}

const specks: Array<[number, number, number, number]> = [
  [60, 80, 2.4, 0.6], [140, 300, 1.8, 0.5], [220, 150, 3.2, 0.35], [300, 60, 1.8, 0.6],
  [400, 240, 2.6, 0.4], [480, 40, 1.8, 0.7], [560, 160, 2.2, 0.5], [640, 330, 3.2, 0.3],
  [700, 90, 2, 0.5], [780, 250, 1.8, 0.6], [860, 40, 2.6, 0.35], [940, 180, 1.8, 0.6],
  [1020, 320, 2.2, 0.5], [1100, 100, 3, 0.3], [1160, 260, 1.8, 0.6], [90, 200, 2, 0.45],
  [350, 340, 1.8, 0.5], [520, 290, 2.2, 0.4], [820, 340, 1.8, 0.5], [1060, 30, 2, 0.5],
];

const petals: Array<[number, number, number]> = [
  [120, 120, 30], [330, 180, -40], [610, 70, 60], [760, 300, 20],
  [980, 90, -30], [1120, 200, 50], [450, 320, -60], [210, 280, 10],
];

/** Scattered gold specks and jasmine petals. Fills its section. */
export function Sparkles({ className }: DecorProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 360"
      preserveAspectRatio="xMidYMid slice"
      className={cn(base, "inset-0 h-full w-full", className)}
    >
      <g fill="currentColor">
        {specks.map(([x, y, r, o]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={r} opacity={o} />
        ))}
      </g>
      <g fill="#f6efe3" opacity="0.32">
        {petals.map(([x, y, rot]) => (
          <ellipse
            key={`${x}-${y}`}
            cx={x}
            cy={y}
            rx="4.5"
            ry="10"
            transform={`rotate(${rot} ${x} ${y})`}
          />
        ))}
      </g>
    </svg>
  );
}

/** Mango-leaf and marigold garland (thoranam) hanging across the top, tiled to any width. */
export function Thoranam({ className }: DecorProps) {
  const tile = "thoranam-tile";
  const leafX = [12, 36, 60, 84, 108];
  return (
    <svg
      aria-hidden="true"
      width="100%"
      height="74"
      className={cn(base, "inset-x-0 top-0", className)}
    >
      <defs>
        <pattern id={tile} width="120" height="74" patternUnits="userSpaceOnUse">
          <path d="M0,6 Q60,46 120,6" fill="none" stroke="#3f6b47" strokeWidth="1.8" />
          {leafX.map((x, i) => {
            // y of the curve at this x (quadratic from (0,6) via (60,46) to (120,6))
            const t = x / 120;
            const y = 6 * (1 - t) ** 2 + 2 * 46 * t * (1 - t) + 6 * t ** 2;
            return (
              <ellipse
                key={x}
                cx={x}
                cy={y + 13}
                rx="5"
                ry="12"
                fill="#3f6b47"
                opacity={i % 2 ? 0.8 : 0.95}
              />
            );
          })}
          {[24, 48, 72, 96].map((x) => {
            const t = x / 120;
            const y = 6 * (1 - t) ** 2 + 2 * 46 * t * (1 - t) + 6 * t ** 2;
            return <circle key={x} cx={x} cy={y} r="3.6" fill="#e8a33b" />;
          })}
        </pattern>
      </defs>
      <rect width="100%" height="74" fill={`url(#${tile})`} />
    </svg>
  );
}
