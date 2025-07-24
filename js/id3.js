document.getElementById('resetBtn').addEventListener('click', () => {
  // Очистить все данные сохранённые в localStorage и sessionStorage (или нужные ключи)
  localStorage.clear();
  sessionStorage.clear();

  // Перезагрузить страницу, чтобы всё стало изначально
  window.location.reload();
});
