import '../css/app.css'

function initThemeToggle () {
  var button = document.getElementById('theme-toggle')
  var icon = document.getElementById('theme-toggle-icon')
  if (!button || !window.KnechtKit) return

  var sync = function () {
    var isLight = document.body.classList.contains('kit-light')
    if (icon) icon.textContent = isLight ? '🌙' : '☀️'
    button.setAttribute('aria-pressed', String(isLight))
  }

  sync()

  button.addEventListener('click', function () {
    var mode = window.KnechtKit.toggleTheme()
    try {
      window.localStorage.setItem('kit-theme', mode)
    } catch (e) {}
    sync()
  })
}

if (document.readyState !== 'loading') {
  initThemeToggle()
} else {
  document.addEventListener('DOMContentLoaded', initThemeToggle)
}
