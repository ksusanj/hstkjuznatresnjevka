document.querySelectorAll('.copy').forEach(function (b) {
  b.addEventListener('click', function () {
    var el = document.getElementById(b.dataset.copy);
    var text = el.textContent.trim();
    function done() { b.textContent = 'Kopirano'; b.classList.add('ok'); setTimeout(function () { b.textContent = 'Kopiraj'; b.classList.remove('ok'); }, 1600); }
    function fallback() { var r = document.createRange(); r.selectNodeContents(el); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
    try { navigator.clipboard.writeText(text).then(done, fallback); } catch (e) { fallback(); }
  });
});
