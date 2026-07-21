import { whyData } from "./data";

export default function WhyUs() {
  return (
    <section
      className="section-pad"
      style={{
        background: "#ffffff",
        padding: "80px 64px 96px",
        overflow: "hidden",
        borderTop: "1px solid #eef1f5",
      }}
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <header style={{ maxWidth: 520, margin: "0 auto 20px", textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--font-quicksand)",
              fontWeight: 400,
              fontSize: 10,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: "var(--accent)",
              marginBottom: 16,
            }}
          >
            Why us
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: 36,
              lineHeight: 1.1,
              fontWeight: 400,
              letterSpacing: "-.03em",
              color: "#0f1a2e",
              textWrap: "pretty",
            }}
          >
            Built around
            <br />
            your business
          </h2>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              marginTop: 24,
              fontSize: 15,
              fontWeight: 500,
              color: "var(--accent)",
            }}
          >
            Work with us <span style={{ fontSize: 17 }}>→</span>
          </a>
        </header>

        <div
          className="whyus-canvas"
          style={{
            position: "relative",
            width: 1120,
            height: 660,
            maxWidth: "100%",
            margin: "24px auto 0",
          }}
        >
          <svg
            viewBox="0 0 1120 660"
            width="1120"
            height="660"
            fill="none"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
            }}
          >
            <path
              d="M747,112 C 600,30 320,150 198,208 C 60,272 120,410 728,462 C 900,475 640,520 198,558"
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeDasharray="5 6"
              strokeLinecap="round"
            />
          </svg>

          {whyData.map((c) => (
            <div
              key={c.num}
              className="whyus-card-pos"
              style={{
                position: "absolute",
                left: c.x,
                top: c.y,
                transform: `rotate(${c.rot}deg)`,
              }}
            >
              <div className="why-card">
                <span
                  style={{
                    fontFamily: "var(--font-quicksand)",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "var(--accent)",
                    letterSpacing: ".04em",
                  }}
                >
                  ({c.num})
                </span>
                <div
                  style={{
                    fontSize: 20,
                    fontWeight: 400,
                    lineHeight: 1.22,
                    letterSpacing: "-.015em",
                    color: "#0f1a2e",
                    marginTop: 12,
                  }}
                >
                  {c.title}
                </div>
                <p
                  style={{
                    margin: "12px 0 0",
                    fontSize: 13.5,
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: "#586074",
                    textWrap: "pretty",
                  }}
                >
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
