const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

const faqItems = Array.from(document.querySelectorAll(".faq-item"));
faqItems.forEach((item) => {
  const trigger = item.querySelector(".faq-question");
  if (!trigger) return;

  trigger.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    item.classList.toggle("open", !isOpen);
    trigger.setAttribute("aria-expanded", String(!isOpen));
  });
});

const search = document.getElementById("faqSearch");
if (search) {
  search.addEventListener("input", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement)) return;

    const query = target.value.trim().toLowerCase();
    faqItems.forEach((item) => {
      const text = item.textContent?.toLowerCase() ?? "";
      const keywords = item.dataset.keywords ?? "";
      const visible = !query || text.includes(query) || keywords.includes(query);
      item.classList.toggle("hidden", !visible);
    });
  });
}

const markDone = document.getElementById("markDone");
if (markDone) {
  markDone.addEventListener("click", () => {
    const boxes = document.querySelectorAll("#checklist input[type='checkbox']");
    boxes.forEach((box) => {
      if (box instanceof HTMLInputElement) {
        box.checked = true;
      }
    });
    markDone.textContent = "All items checked";
  });
}

const copyEmail = document.getElementById("copyEmail");
if (copyEmail) {
  copyEmail.addEventListener("click", async () => {
    const supportAddress = "support@itsbrandontv.com";
    try {
      await navigator.clipboard.writeText(supportAddress);
      copyEmail.textContent = "Email copied";
    } catch {
      copyEmail.textContent = supportAddress;
    }
  });
}
