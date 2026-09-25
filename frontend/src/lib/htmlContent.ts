const HTML_BLOCK_TAG_RE = /<(p|h[1-6]|ul|ol|li|blockquote|table|pre|img|hr)\b/i;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/**
 * Legacy blog posts were seeded as raw plain text ("para one\n\npara two"),
 * not HTML. Loaded as-is, that's a single paragraph block with no
 * boundaries — so formatting a "line" formats the entire post. Detect that
 * case and convert it into real <p> tags before it reaches the editor or
 * the public page.
 */
export function ensureHtmlContent(raw: string): string {
  if (!raw) return "";
  if (HTML_BLOCK_TAG_RE.test(raw)) return raw;

  return raw
    .split(/\n{2,}/)
    .map((para) => para.trim())
    .filter(Boolean)
    .map((para) => `<p>${escapeHtml(para).replace(/\n/g, "<br>")}</p>`)
    .join("");
}
