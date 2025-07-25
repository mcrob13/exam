document.getElementById("loginBtn").addEventListener("click", async () => {
  const { jsPDF } = window.jspdf;
  const mainElement = document.querySelector("main");
  const loginBtn = document.getElementById("loginBtn");

  const DESKTOP_WIDTH = 1200;

  const originalStyle = {
    width: mainElement.style.width,
  };

  loginBtn.disabled = true;

  try {
    mainElement.style.width = `${DESKTOP_WIDTH}px`;

    await new Promise((resolve) => setTimeout(resolve, 100));

    const canvas = await html2canvas(mainElement, {
      scale: 2,
      useCORS: true,
      windowWidth: DESKTOP_WIDTH,
      windowHeight: mainElement.scrollHeight,
      scrollX: -window.scrollX,
      scrollY: -window.scrollY,
    });

    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "p",
      unit: "mm",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Подгоняем изображение по высоте страницы
    const canvasAspectRatio = canvas.width / canvas.height;
    const imgWidth = pdfHeight * canvasAspectRatio;
    const imgHeight = pdfHeight;

    const xOffset = (pdfWidth - imgWidth) / 2;

    pdf.addImage(imgData, "PNG", xOffset, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf");
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("Sorry, something went wrong while creating the PDF.");
  } finally {
    mainElement.style.width = originalStyle.width;
    loginBtn.textContent = "Make PDF";
    loginBtn.disabled = false;
  }
});