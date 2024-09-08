if (window.location.origin === "https://prassamin.github.io" || window.location.origin === "https://prassamin.onrender.com/") {
  window.location.replace("https://pras.me");
}

const allowedPaths = [
  "/about.html",
  "/blogs.html",
  "/projects.html",
  "/index.html",
  "/sitemap.xml"
];

if (!allowedPaths.includes(window.location.pathname)) {
  window.location.replace("https://pras.me/index.html");
}
