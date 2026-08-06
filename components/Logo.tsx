/**
 * Klaudio mark — "Node K". The K read as a network: one hub on the stem, two
 * endpoints on the arms. Integration stated in the letterform.
 *
 * With `animated`, a signal repeatedly travels the stem out to each endpoint
 * and blooms a ring on arrival. It is pure SVG + CSS, so it needs no client
 * boundary and keeps working with JavaScript disabled. Motion is suppressed
 * under prefers-reduced-motion in globals.css.
 */
export default function Logo({
  size = 32,
  animated = false,
  className = "",
}: {
  size?: number;
  animated?: boolean;
  className?: string;
}) {
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
      <path
        d="M18 12v40"
        stroke="var(--ink)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* arms, held at low opacity so the travelling signal reads on top */}
      <path
        d="M18 32L42 14"
        stroke="var(--accent)"
        strokeWidth="4"
        strokeLinecap="round"
        className="kl-arm"
      />
      <path
        d="M18 32L42 50"
        stroke="var(--accent)"
        strokeWidth="4"
        strokeLinecap="round"
        className="kl-arm"
      />

      {/* the signal itself — a short dash walking each arm */}
      <path
        className="kl-signal kl-signal-a"
        d="M18 32L42 14"
        stroke="var(--accent)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        className="kl-signal kl-signal-b"
        d="M18 32L42 50"
        stroke="var(--accent)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* rings bloom as the signal lands */}
      <circle
        className="kl-ring kl-ring-a"
        cx="42"
        cy="14"
        r="5"
        stroke="var(--accent)"
        strokeWidth="1.4"
      />
      <circle
        className="kl-ring kl-ring-b"
        cx="42"
        cy="50"
        r="5"
        stroke="var(--accent)"
        strokeWidth="1.4"
      />

      <circle cx="42" cy="14" r="5" fill="var(--accent)" />
      <circle cx="42" cy="50" r="5" fill="var(--accent)" />
      <circle cx="18" cy="32" r="5.5" fill="var(--ink)" />
    </svg>
  );
}
