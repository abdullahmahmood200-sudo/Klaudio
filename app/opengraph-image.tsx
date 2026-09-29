import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

/**
 * Generated share card, so links to the site unfurl with something branded.
 * Built from type and brand colour only, so there is no binary asset to keep
 * in sync and no font fetch, which keeps this working on the Cloudflare
 * runtime.
 *
 * Satori (the renderer behind ImageResponse) requires an explicit `display`
 * on any element with more than one child, so every stacked block below sets
 * `display: flex` and each line of copy is its own element rather than a <br>.
 */
export const alt = `${SITE_NAME}, ecommerce technology and AI consulting`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const column = { display: "flex", flexDirection: "column" } as const;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          ...column,
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "84px 88px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            fontSize: 30,
            color: "#0f1a2e",
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              background: "#1a4bff",
            }}
          />
          <div style={{ display: "flex" }}>Klaudio</div>
        </div>

        <div style={{ ...column, gap: 28 }}>
          <div
            style={{
              ...column,
              fontSize: 66,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#0f1a2e",
            }}
          >
            <div style={{ display: "flex" }}>Ecommerce tech</div>
            <div style={{ display: "flex" }}>and AI consulting</div>
          </div>
          <div
            style={{ ...column, fontSize: 28, color: "#586074", lineHeight: 1.4 }}
          >
            <div style={{ display: "flex" }}>
              Shopify, VTEX, AI automation, and retention,
            </div>
            <div style={{ display: "flex" }}>
              built to convert, scale, and keep customers.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: "0.14em",
            color: "#1a4bff",
          }}
        >
          KLAUDIO.LLC
        </div>
      </div>
    ),
    { ...size },
  );
}
