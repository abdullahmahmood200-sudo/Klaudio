export default function About() {
  return (
    <section
      id="about"
      className="section-pad about-row"
      style={{
        background: "#ffffff",
        padding: "80px 64px",
        display: "flex",
        alignItems: "center",
        gap: 52,
        overflow: "hidden",
        borderTop: "1px solid #eef1f5",
      }}
    >
      <div style={{ flex: 1, maxWidth: 440, textAlign: "center" }}>
        {/* An h2 rather than a div: this section had no heading at all, so the
            company description sat under nothing in the outline. Styles are
            unchanged apart from resetting the UA heading margin. */}
        <h2
          style={{
            fontFamily: "var(--font-quicksand)",
            fontWeight: 400,
            fontSize: 10,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "var(--accent)",
            margin: "0 0 22px",
          }}
        >
          About Klaudio LLC
        </h2>
        <p
          style={{
            margin: 0,
            fontSize: 19,
            lineHeight: 1.62,
            color: "#4a5262",
            fontWeight: 300,
            letterSpacing: "-.01em",
            textWrap: "pretty",
          }}
        >
          {/* The first sentence is SITE_DESCRIPTION word for word, so the
              page, the meta description, and the schema all agree. */}
          <span style={{ color: "var(--accent)", fontWeight: 500 }}>
            Klaudio LLC
          </span>{" "}
          is an AI and technology consulting firm based in Anchorage, Alaska,
          that implements and runs AI automation, revenue operations, AWS
          cloud, Shopify and VTEX ecommerce, and financial systems for
          organizations worldwide. We focus on solutions that are implemented,
          adopted, measured, and maintained over the long term.
        </p>
      </div>
      <div
        style={{
          flex: 1,
          minWidth: 0,
          // Explicit full width so the card keeps its size when the section
          // stacks: the laptop is absolutely positioned, so the card has no
          // in-flow content of its own to establish an intrinsic width.
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* Product shot: the blue card is a relative-positioned frame with
            overflow visible; the cut-out laptop is absolutely positioned so it
            breaks out past the card's top edge and floats above the surface. */}
        <div
          className="about-card"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 480,
            aspectRatio: "3 / 2",
            borderRadius: 16,
            // Card background kept exactly as before
            background: "linear-gradient(160deg,#eef2ff 0%,#e2e8fa 100%)",
            overflow: "visible",
            boxShadow: "0 30px 60px -34px rgba(15,26,46,.28)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/laptop-cutout-trimmed.png"
            alt="The Klaudio Case Studies experience running on a laptop"
            className="about-laptop"
            style={{
              position: "absolute",
              left: "50%",
              // Anchored into the card: the base overlaps the card while only
              // the top of the screen breaks past the card's top edge.
              top: "-8%",
              width: "92%",
              transform: "translateX(-50%)",
              // The laptop's own shadow, tucked directly beneath it on the
              // card — distinct from the card's own soft shadow. drop-shadow
              // hugs the cut-out silhouette so it never floats in empty space.
              filter: "drop-shadow(0 16px 22px rgba(15,26,46,.30))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
