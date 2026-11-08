/* Bright / dark mode switch.
   The site opens in bright mode. When a reader flips the switch, their choice is
   saved in their browser and used again on every page and on their next visit.
   (A tiny script in each page's <head> applies the saved choice before the page
   appears, so there is no flash of the wrong colours.) */
(function () {
  var root = document.documentElement;
  var KEY = "theme";

  function current() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function updateButton(button) {
    var dark = current() === "dark";
    button.setAttribute("aria-checked", dark ? "true" : "false");
    button.setAttribute("title", dark ? "Switch to bright mode" : "Switch to dark mode");
  }

  function init() {
    var button = document.querySelector(".theme-toggle");
    if (!button) return;
    updateButton(button);
    button.addEventListener("click", function () {
      var next = current() === "dark" ? "light" : "dark";
      if (next === "dark") root.setAttribute("data-theme", "dark");
      else root.removeAttribute("data-theme");
      try { localStorage.setItem(KEY, next); } catch (e) { /* storage blocked: still works for this page */ }
      updateButton(button);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
