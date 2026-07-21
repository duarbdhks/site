(() => {
  const STORAGE_KEY = "ai-agent-course-v1";
  const moduleIds = ["01","02","03","04","05","06","07","08"];

  const readState = () => {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
      return { completed: Array.isArray(parsed.completed) ? parsed.completed : [] };
    } catch {
      return { completed: [] };
    }
  };

  const writeState = (state) => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

  const updateUI = () => {
    const state = readState();
    const completed = new Set(state.completed);
    document.querySelectorAll("[data-module-link]").forEach((link) => {
      link.classList.toggle("done", completed.has(link.dataset.moduleLink));
    });
    document.querySelectorAll("[data-module-card]").forEach((card) => {
      card.classList.toggle("done", completed.has(card.dataset.moduleCard));
    });
    document.querySelectorAll("[data-complete-module]").forEach((button) => {
      const done = completed.has(button.dataset.completeModule);
      button.classList.toggle("done", done);
      button.textContent = done ? "✓ 학습 완료됨" : "학습 완료로 표시";
      button.setAttribute("aria-pressed", String(done));
    });
    const count = completed.size;
    document.querySelectorAll("[data-progress-count]").forEach((el) => {
      el.textContent = `${count}/8`;
    });
    document.querySelectorAll("[data-progress-percent]").forEach((el) => {
      el.style.width = `${(count / moduleIds.length) * 100}%`;
    });
    document.querySelectorAll("[data-progress-message]").forEach((el) => {
      el.textContent = count === 8
        ? "전체 세션을 완료했습니다. 캡스톤을 포트폴리오로 정리할 차례입니다."
        : `${8 - count}개 세션이 남았습니다. 한 번에 20분씩 진행하세요.`;
    });
  };

  document.addEventListener("click", async (event) => {
    const complete = event.target.closest("[data-complete-module]");
    if (complete) {
      const state = readState();
      const id = complete.dataset.completeModule;
      const set = new Set(state.completed);
      set.has(id) ? set.delete(id) : set.add(id);
      writeState({ completed: [...set].sort() });
      updateUI();
      return;
    }

    const copy = event.target.closest(".copy-button");
    if (copy) {
      const code = copy.closest(".code-shell")?.querySelector("code")?.textContent || "";
      try {
        await navigator.clipboard.writeText(code);
        const original = copy.textContent;
        copy.textContent = "복사됨";
        setTimeout(() => { copy.textContent = original; }, 1200);
      } catch {
        copy.textContent = "복사 실패";
      }
      return;
    }

    const reset = event.target.closest("[data-reset-progress]");
    if (reset) {
      localStorage.removeItem(STORAGE_KEY);
      updateUI();
    }
  });

  const updateReadingProgress = () => {
    const doc = document.documentElement;
    const max = Math.max(1, doc.scrollHeight - doc.clientHeight);
    const ratio = Math.min(1, Math.max(0, doc.scrollTop / max));
    const bar = document.querySelector(".reading-progress span");
    if (bar) bar.style.width = `${ratio * 100}%`;
  };

  window.addEventListener("scroll", updateReadingProgress, { passive: true });
  window.addEventListener("resize", updateReadingProgress);
  updateUI();
  updateReadingProgress();
})();
