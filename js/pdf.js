document.getElementById('loginBtn').addEventListener('click', async () => {
  const { jsPDF } = window.jspdf;
  const main = document.querySelector('main');

  // Временно уменьшаем масштаб для красивого скриншота
  main.style.transform = 'scale(0.75)';
  main.style.transformOrigin = 'top left';

  // Немного подождать, чтобы отрендерилось
  await new Promise(resolve => setTimeout(resolve, 100));

  html2canvas(main, {
    scale: 2,
    useCORS: true,
    windowWidth: document.body.scrollWidth,
    windowHeight: document.body.scrollHeight
  }).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
    const imgWidth = canvas.width * ratio;
    const imgHeight = canvas.height * ratio;

    const x = (pageWidth - imgWidth) / 2;
    const y = 10; // небольшое смещение сверху

    pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
    pdf.save('resume.pdf');

    // Вернуть масштаб обратно
    main.style.transform = '';
  });
});

