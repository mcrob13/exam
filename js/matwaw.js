document.querySelectorAll('.btn, .nav__link, .tools-group__item, .job-card').forEach(el => {
  el.style.position = 'relative';  // обязательно, чтобы ripple позиционировался относительно элемента

  el.addEventListener('click', function(e) {
    const circle = document.createElement('span');
    circle.classList.add('ripple');

    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    circle.style.width = circle.style.height = size + 'px';

    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    circle.style.left = x + 'px';
    circle.style.top = y + 'px';

    el.appendChild(circle);

    circle.addEventListener('animationend', () => {
      circle.remove();
    });
  });
});
