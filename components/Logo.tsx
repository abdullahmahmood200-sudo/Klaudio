/**
 * Klaudio mark — "Node K". The K read as a network: one hub on the stem, two
 * endpoints on the arms. Integration stated in the letterform.
 *
 * With `animated`, a signal repeatedly travels the stem out to each endpoint
 * and blooms a ring on arrival. It is pure SVG + CSS, so it needs no client
 * boundary and keeps working with JavaScript disabled. Motion is suppressed
 * under prefers-reduced-motion in globals.css.
 *
 * `mono` renders the whole mark in white, for accent-blue surfaces where the
 * two brand colours would disappear.
 */
export default function Logo({
  size = 32,
  animated = false,
  mono = false,
  className = "",
}: {
  size?: number;
  animated?: boolean;
  mono?: boolean;
  className?: string;
}) {
  const ink = mono ? "#ffffff" : "var(--ink)";
  const accent = mono ? "#ffffff" : "var(--accent)";

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      role="img"
      aria-label="Klaudio"
      className={`kl-logo${animated ? " is-animated" : ""} ${className}`.trim()}
    >
      {/* stem */}
      <path d="M18 12v40" stroke={ink} strokeWidth="4" strokeLinecap="round" />

      {/* arms, dropped back so the travelling signal reads on top of them */}
      <path
        className="kl-arm"
        d="M18 32L42 14"
        stroke={accent}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="kl-arm"
        d="M18 32L42 50"
        stroke={accent}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* the signal itself — a short dash walking each arm */}
      <path
        className="kl-signal kl-signal-a"
        d="M18 32L42 14"
        stroke={accent}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="kl-signal kl-signal-b"
        d="M18 32L42 50"
        stroke={accent}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* rings bloom as the signal lands */}
      <circle
        className="kl-ring kl-ring-a"
        cx="42"
        cy="14"
        r="5"
        stroke={accent}
        strokeWidth="1.4"
      />
      <circle
        className="kl-ring kl-ring-b"
        cx="42"
        cy="50"
        r="5"
        stroke={accent}
        strokeWidth="1.4"
      />

      <circle cx="42" cy="14" r="5" fill={accent} />
      <circle cx="42" cy="50" r="5" fill={accent} />
      <circle cx="18" cy="32" r="5.5" fill={ink} />
    </svg>
  );
}
