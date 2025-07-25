document.querySelectorAll('.profile__bar').forEach(bar => {
  const fill = bar.querySelector('.profile__bar-fill');

  const setFill = (e) => {
    const rect = bar.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    fill.style.width = percentage + '%';
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


