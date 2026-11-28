import Link from "next/link";

// Minimal text format shared by blog posts and game pages:
// blocks split by blank lines, "## " headings, "- " bullet lists,
// and "[text](url)" links inside a line.

export const BASE_URL = "https://playgamehorizon.com";

const linkClass =
  "text-brand-secondary underline underline-offset-2 hover:text-white transition-colors";

export function renderInline(text: string) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    if (m[2].startsWith("/")) {
      return (
        <Link key={i} href={m[2]} className={linkClass}>
          {m[1]}
        </Link>
      );
    }
    return (
      <a key={i} href={m[2]} target="_blank" rel="noopener" className={linkClass}>
        {m[1]}
      </a>
    );
  });
}

export function renderContent(content: string) {
  return content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="font-display font-bold text-2xl text-white mt-10 mb-3">
            {block.slice(3)}
          </h2>
        );
      }
      if (block.startsWith("- ")) {
        return (
          <ul key={i} className="list-disc pl-6 space-y-1.5 text-slate-300">
            {block.split("\n").map((line, j) => (
              <li key={j}>{renderInline(line.replace(/^- /, ""))}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={i} className="text-slate-300 leading-relaxed">
          {renderInline(block)}
        </p>
      );
    });
}

// Same "[text](url)" syntax as renderInline, as HTML for FAQ structured data.
export function inlineToHtml(text: string) {
  return text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label: string, href: string) => {
    const url = href.startsWith("/") ? `${BASE_URL}${href}` : href;
    return `<a href="${url}">${label}</a>`;
  });
}

// Google requires VideoObject.uploadDate to be a full ISO 8601 datetime with a
// timezone. Takes a "YYYY-MM-DD" date and pins it to midnight Pakistan time.
export function videoUploadDate(date: string) {
  return `${date}T00:00:00+05:00`;
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: inlineToHtml(faq.answer) },
    })),
  };
}
