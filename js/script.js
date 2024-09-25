const cvCheack = document.getElementById("cv-check");
const downloadBtn = document.querySelector(".download-btn");

downloadBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const link = document.createElement("a");

  link.href = "/resume.pdf";

  link.download = "pras_resume.pdf";

  link.click();
});
