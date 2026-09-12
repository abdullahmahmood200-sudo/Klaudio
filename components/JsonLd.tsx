/**
 * Emits a JSON-LD block. Server-rendered, so the graph is in the HTML that
 * crawlers and AI retrievers fetch, and they do not run our client JavaScript.
 */
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // The payload is built from our own static config, never user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
