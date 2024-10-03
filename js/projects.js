const handleProjects = async () => {
  const response = await fetch("../json/projects.json");
  const projects = await response.json();

  const projectsContainer = document.querySelector(".projects-container");

  projectsContainer.innerHTML = projects
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
