// Server component that injects a JSON-LD <script> into the page.
// Rendered on the server so crawlers receive the structured data in the HTML.

export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inject; no user-controlled input here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
