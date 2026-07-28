(function () {
  const progress = document.querySelector("[data-reading-progress]");

  if (progress) {
    const updateProgress = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      const ratio = max > 0 ? root.scrollTop / max : 0;
      progress.style.width = `${Math.min(100, Math.max(0, ratio * 100))}%`;
    };

    updateProgress();
    document.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
  }

  const stage = document.querySelector("[data-concept-stage]");
  const buttons = Array.from(document.querySelectorAll("[data-stage-button]"));

  if (!stage || buttons.length === 0) {
    return;
  }

  const showStage = (stageNumber) => {
    stage.querySelectorAll("[data-stage]").forEach((item) => {
      const visible = Number(item.dataset.stage) <= stageNumber;
      item.dataset.active = visible ? "true" : "false";
    });

    buttons.forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        Number(button.dataset.stageButton) === stageNumber ? "true" : "false",
      );
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      showStage(Number(button.dataset.stageButton));
    });
  });

  showStage(1);
})();
