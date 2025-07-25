document.getElementById('resetBtn').addEventListener('click', () => {
  localStorage.clear();
  sessionStorage.clear();

  window.location.reload();
});
