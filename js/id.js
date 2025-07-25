document.addEventListener('DOMContentLoaded', () => {
  const editableElements = document.querySelectorAll('[contenteditable]');

    editableElements.forEach((el, index) => {

      if (!el.dataset.id) {
      el.dataset.id = `editable-${index}`;
    }

    const key = el.dataset.id;

    const saved = localStorage.getItem(key);
    if (saved !== null) {
      el.textContent = saved;
    }

    el.addEventListener('input', () => {
      localStorage.setItem(key, el.textContent);
    });
  });
});