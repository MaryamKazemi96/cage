const LINKS = {
  dataset: "TODO_DATASET_URL",
  publication: "TODO_PUBLICATION_URL",
  zotero: "TODO_ZOTERO_URL",
  github: "TODO_GITHUB_REPOSITORY_URL",
};

function applyExternalLinks() {
  document.querySelectorAll("[data-link-key]").forEach((anchor) => {
    const key = anchor.getAttribute("data-link-key");
    const link = key ? LINKS[key] : null;

    if (!link || link.startsWith("TODO_")) {
      anchor.setAttribute("aria-disabled", "true");
      anchor.classList.add("is-placeholder-link");
      anchor.title = "TODO: Set this URL in assets/script.js";
      return;
    }

    anchor.href = link;
  });
}

function setupBibtexCopy() {
  const button = document.getElementById("copy-bibtex");
  const bibtex = document.getElementById("bibtex");
  const status = document.getElementById("copy-status");

  if (!button || !bibtex || !status) {
    return;
  }

  button.addEventListener("click", async () => {
    const text = bibtex.innerText.trim();

    try {
      await navigator.clipboard.writeText(text);
      status.textContent = "BibTeX copied.";
    } catch (_error) {
      status.textContent = "Clipboard unavailable. Please copy manually.";
    }
  });
}

function setupReveal() {
  const targets = document.querySelectorAll(".section, .hero");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((target) => {
    target.classList.add("reveal");
    observer.observe(target);
  });
}

function setFooterYear() {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
}

applyExternalLinks();
setupBibtexCopy();
setupReveal();
setFooterYear();
