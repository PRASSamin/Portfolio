if (window.location.origin === "https://prassamin.github.io") {
  window.location.replace("https://prassamin.onrender.com/");
}

const allowedPaths = [
  "/about.html",
  "/blogs.html",
  "/projects.html",
  "/index.html",
  "/sitemap.xml"
];

if (!allowedPaths.includes(window.location.pathname)) {
  window.location.replace("https://prassamin.onrender.com/index.html");
}
