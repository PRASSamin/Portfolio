if (window.location.origin === "https://prassamin.github.io") {
  window.location.replace("https://prassamin.onrender.com/");
}

if (
  window.location.pathname !== "/about.html" ||
  window.location.pathname !== "/blogs.html" ||
  window.location.pathname !== "/projects.html" ||
  window.location.pathname !== "/index.html" ||
  window.location.pathname !== "/sitemap.xml"
) {
  window.location.replace("https://prassamin.onrender.com/index.html");
}
