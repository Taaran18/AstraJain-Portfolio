const signs = ["♈", "♉", "♊", "♋", "♌", "♍", "♎", "♏", "♐", "♑", "♒", "♓"].map(
  (s) => `${s}︎`,
);

function polar(radius: number, index: number, offset = 0) {
  const angle = ((index * 30 + offset - 90) * Math.PI) / 180;
  return {
    x: +(200 + radius * Math.cos(angle)).toFixed(2),
    y: +(200 + radius * Math.sin(angle)).toFixed(2),
  };
}

export function ZodiacWheel({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" aria-hidden="true" focusable="false" className={className}>
      <g className="origin-center animate-spin-slow text-gold">
        <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeOpacity="0.35" />
        <circle cx="200" cy="200" r="176" fill="none" stroke="currentColor" strokeOpacity="0.2" />
        <circle cx="200" cy="200" r="120" fill="none" stroke="currentColor" strokeOpacity="0.3" />
        {signs.map((_, i) => {
          const inner = polar(120, i, 15);
          const outer = polar(190, i, 15);
          return (
            <line
              key={`spoke-${i}`}
              x1={inner.x}
              y1={inner.y}
              x2={outer.x}
              y2={outer.y}
              stroke="currentColor"
              strokeOpacity="0.22"
            />
          );
        })}
        {signs.map((sign, i) => {
          const p = polar(150, i);
          return (
            <text
              key={sign}
              x={p.x}
              y={p.y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="24"
              fill="currentColor"
              fillOpacity="0.85"
              fontFamily="'Segoe UI Symbol', 'Noto Sans Symbols', 'Apple Symbols', serif"
            >
              {sign}
            </text>
          );
        })}
        {signs.map((_, i) => {
          const p = polar(190, i, 15);
          return <circle key={`dot-${i}`} cx={p.x} cy={p.y} r="3" fill="currentColor" />;
        })}
      </g>
      <circle cx="200" cy="200" r="104" className="fill-card" fillOpacity="0.7" />
      <circle
        cx="200"
        cy="200"
        r="104"
        fill="none"
        className="stroke-gold"
        strokeOpacity="0.5"
        strokeDasharray="2 6"
      />
    </svg>
  );
}
