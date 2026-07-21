// main.js — defer-loaded, no dependencies. Pure progressive enhancement:
// the site is fully usable with JavaScript disabled.
(function () {
  "use strict";

  // 1) Mobile nav toggle
  var navBtn = document.querySelector(".nav-toggle");
  if (navBtn) {
    navBtn.addEventListener("click", function () {
      var open = document.body.classList.toggle("nav-open");
      navBtn.setAttribute("aria-expanded", String(open));
    });
  }

  // 2) Manual light/dark override. Auto theming via prefers-color-scheme works
  //    without this; the toggle just lets a visitor override and persist it.
  var root = document.documentElement;
  var themeBtn = document.querySelector(".theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var current = root.getAttribute("data-theme");
      if (!current) {
        current = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      var next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  // 3) Highlight the current page in the nav
  var path = location.pathname.replace(/index\.html$/, "") || "/";
  document.querySelectorAll(".nav__links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (!href) return;
    if (href === path || (href !== "/" && path.indexOf(href.replace(/\.html$/, "")) === 0)) {
      a.setAttribute("aria-current", "page");
    }
  });
})();
