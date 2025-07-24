document.addEventListener('DOMContentLoaded', () => {
  const editableElements = document.querySelectorAll('[contenteditable]');

    editableElements.forEach((el, index) => {
                // Пропускаем, если уже есть data-id
    if (!el.dataset.id) {
      el.dataset.id = `editable-${index}`;
    }

    const key = el.dataset.id;

                // Восстанавливаем текст из localStorage
    const saved = localStorage.getItem(key);
    if (saved !== null) {
      el.textContent = saved;
    }

                // Сохраняем изменения
    el.addEventListener('input', () => {
      localStorage.setItem(key, el.textContent);
    });
  });
});