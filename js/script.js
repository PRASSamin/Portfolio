const cvCheack = document.getElementById("cv-check");
const downloadBtn = document.querySelector(".download-btn");

downloadBtn.addEventListener("click", async (event) => {
  event.preventDefault();

  const link = document.createElement("a");

  link.href = "/resume.pdf";

  link.download = "pras_resume.pdf";

  link.click();
});

const handleProjects = async () => {
  const response = await fetch("/json/projects.json");
  const projects = await response.json();

  const projectsContainer = document.querySelector(".projects-container");

  const projAmount = document.querySelector(".proj-am");

  projAmount.innerHTML = `${200 + projects.length} +`;

  projectsContainer.innerHTML = projects
    .slice(0, 4)
    .map(
      (project) => `
    <a href="${project.href}" target="_blank" class="w-1/4 p-3 proj">
      <div>
        <img src="${project.imgSrc}" alt="${project.alt}" />
        <div class="dark-mask"></div>
      </div>
      <div class="proj-text">
        <h2 class="pras-subtext">${project.subText}</h2>
        <h1 class="pras-mtext">${project.mainText}</h1>
      </div>
    </a>
  `
    )
    .join("");
};

handleProjects();
