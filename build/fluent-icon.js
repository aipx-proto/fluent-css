/**
 * <fluent-icon> — Microsoft Fluent Icons web component
 *
 * Usage:
 *   <fluent-icon name="home"></fluent-icon>
 *   <fluent-icon name="settings" filled></fluent-icon>
 *   <fluent-icon name="search" size="24"></fluent-icon>
 *
 * Attributes:
 *   name    — icon name (required), e.g. "heart", "arrow-left"
 *   filled  — show filled variant (optional flag)
 *   size    — icon size in px: "16", "20", "24" (default "20")
 */

const ICON_CDN = "https://aipx-proto.github.io/vibe-icon";

function displayNameToFilename(displayName) {
  return displayName.toLowerCase().replace(/\s+/g, "-");
}

export class FluentIcon extends HTMLElement {
  static define() {
    if (!customElements.get("fluent-icon")) {
      customElements.define("fluent-icon", FluentIcon);
    } else {
      console.warn("<fluent-icon/> is already defined");
    }
  }

  static observedAttributes = ["name", "size", "filled"];
  static cache = new Map();
  static placeholderIconPath = `<circle cx="10" cy="10" r="8" fill="currentColor" opacity="0.15"/>`;

  #renderController = null;
  #connected = false;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.#showPlaceholder();
  }

  connectedCallback() {
    this.#connected = true;
    this.#scheduleRender();
  }

  disconnectedCallback() {
    this.#connected = false;
    this.#renderController?.abort();
    this.#renderController = null;
  }

  attributeChangedCallback(_name, oldValue, newValue) {
    if (oldValue !== newValue && this.#connected) {
      this.#scheduleRender();
    }
  }

  #scheduleRender() {
    this.#renderController?.abort();
    this.#renderController = new AbortController();
    const { signal } = this.#renderController;

    this.#render(signal).catch(() => {});
  }

  async #render(signal) {
    const name = this.getAttribute("name") ?? undefined;
    const size = this.getAttribute("size") ?? "20";

    if (!name) {
      this.#showPlaceholder();
      return;
    }

    const style = this.hasAttribute("filled") ? "filled" : "regular";
    const hasExplicitSize = this.hasAttribute("size");
    const cacheKey = hasExplicitSize ? `${name}_${size}_${style}` : name;

    let svgText = "";
    if (FluentIcon.cache.has(cacheKey)) {
      svgText = await FluentIcon.cache.get(cacheKey);
    } else {
      const asyncResult = fetch(this.#getSourcePath(name, size, style), { signal })
        .then((r) => r.text())
        .catch((e) => {
          if (e.name === "AbortError") {
            FluentIcon.cache.delete(cacheKey);
          } else {
            console.error(`Failed to fetch ${name} icon`);
          }
          return "";
        });
      FluentIcon.cache.set(cacheKey, asyncResult);
      svgText = await asyncResult;
    }

    if (signal.aborted) return;

    if (!svgText) {
      this.#showPlaceholder();
      return;
    }

    const doc = new DOMParser().parseFromString(svgText, "text/html");
    const parsed = hasExplicitSize ? doc.querySelector("svg") : doc.querySelector(`symbol#${style}`);
    const viewBox = parsed?.getAttribute("viewBox") || "0 0 20 20";
    const innerHTML = parsed?.innerHTML || FluentIcon.placeholderIconPath;

    if (signal.aborted) return;
    this.shadowRoot.innerHTML = this.#svg({ name, size, style, viewBox, innerHTML });
  }

  #getSourcePath(name, size, style) {
    const filename = displayNameToFilename(name);
    if (this.hasAttribute("size")) {
      return `${ICON_CDN}/${filename}-${size}-${style}.svg`;
    }
    return `${ICON_CDN}/${filename}.svg`;
  }

  #showPlaceholder() {
    this.shadowRoot.innerHTML = this.#svg({ size: this.getAttribute("size") ?? undefined });
  }

  #svg({ name = "placeholder", size = "20", style = "regular", viewBox = "0 0 20 20", innerHTML = FluentIcon.placeholderIconPath } = {}) {
    return `<style>:host { display: contents; }</style>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" data-icon="${name}" data-style="${style}" viewBox="${viewBox}">
  ${innerHTML}
</svg>`;
  }
}

FluentIcon.define();
