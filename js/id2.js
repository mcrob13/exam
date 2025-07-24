document.querySelectorAll('.profile__bar').forEach((bar, index) => {
  const fill = bar.querySelector('.profile__bar-fill');

  // При загрузке страницы восстанавливаем ширину из localStorage
  const savedWidth = localStorage.getItem(`profileBarWidth-${index}`);
  if (savedWidth) {
    fill.style.width = savedWidth;
  }

  const setFill = (e) => {
    const rect = bar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    const widthStr = percentage + '%';

    fill.style.width = widthStr;

    // Сохраняем ширину в localStorage
    localStorage.setItem(`profileBarWidth-${index}`, widthStr);
  };

  bar.addEventListener('mousedown', (e) => {
    setFill(e);

    const onMouseMove = (e) => setFill(e);
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
});
