import Link from "next/link";
import type { Block } from "@/lib/insights/types";

/** Renders **bold** and [label](href) inside a line of article text. */
export function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
  return (
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/);
        if (bold) return <strong key={i}>{bold[1]}</strong>;
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          const [, label, href] = link;
          return href.startsWith("/") ? (
            <Link key={i} href={href}>
              {label}
            </Link>
          ) : (
            <a key={i} href={href} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          );
        }
        return part;
      })}
    </>
  );
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        if ("p" in b)
          return (
            <p key={i}>
              <Inline text={b.p} />
            </p>
          );
        if ("ul" in b)
          return (
            <ul key={i}>
              {b.ul.map((item) => (
                <li key={item}>
                  <Inline text={item} />
                </li>
              ))}
            </ul>
          );
        if ("ol" in b)
          return (
            <ol key={i}>
              {b.ol.map((item) => (
                <li key={item}>
                  <Inline text={item} />
                </li>
              ))}
            </ol>
          );
        return (
          <div key={i} className="insight-table-wrap">
            <table>
              <thead>
                <tr>
                  {b.table.head.map((h) => (
                    <th key={h} scope="col">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.table.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, j) =>
                      j === 0 ? (
                        <th key={j} scope="row">
                          <Inline text={cell} />
                        </th>
                      ) : (
                        <td key={j}>
                          <Inline text={cell} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </>
  );
}
