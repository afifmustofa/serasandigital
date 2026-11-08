(function () {
  "use strict";

  var form = document.getElementById("loginForm");
  var user = document.getElementById("username");
  var pass = document.getElementById("password");
  var msg = document.getElementById("loginMsg");
  var toggle = document.getElementById("pwToggle");
  var year = document.getElementById("year");

  if (year) year.textContent = new Date().getFullYear();

  toggle.addEventListener("click", function () {
    var show = pass.type === "password";
    pass.type = show ? "text" : "password";
    toggle.textContent = show ? "Sembunyikan" : "Lihat";
    toggle.setAttribute("aria-pressed", String(show));
    toggle.setAttribute("aria-label", show ? "Sembunyikan kata sandi" : "Tampilkan kata sandi");
  });

  function showMsg(text) {
    msg.textContent = text;
    msg.hidden = false;
  }

  [user, pass].forEach(function (el) {
    el.addEventListener("input", function () {
      el.removeAttribute("aria-invalid");
      msg.hidden = true;
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var empty = [user, pass].filter(function (el) { return !el.value.trim(); });
    empty.forEach(function (el) { el.setAttribute("aria-invalid", "true"); });
    if (empty.length) {
      showMsg("Nama pengguna dan kata sandi wajib diisi.");
      empty[0].focus();
      return;
    }
    // Situs ini statis (GitHub Pages) sehingga belum ada server untuk memeriksa akun.
    // Hubungkan form ini ke backend/API login di sini.
    showMsg("Nama pengguna atau kata sandi salah.");
  });
})();
