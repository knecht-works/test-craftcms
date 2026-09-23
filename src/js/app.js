import '../css/app.css'

function initThemeToggle() {
  var button = document.getElementById('theme-toggle')
  var icon = button ? button.querySelector('[data-theme-icon]') : null

  function updateIcon() {
    if (!icon) return
    var isLight = document.body.classList.contains('kit-light')
    icon.textContent = isLight ? '☀️' : '🌙'
  }

  updateIcon()

  if (button) {
    button.addEventListener('click', function () {
      var theme = window.KnechtKit.toggleTheme()
      try {
        localStorage.setItem('kit-theme', theme)
      } catch (e) {}
      updateIcon()
    })
  }

  var media = window.matchMedia('(prefers-color-scheme: light)')
  media.addEventListener('change', function (event) {
    var saved = null
    try {
      saved = localStorage.getItem('kit-theme')
    } catch (e) {}
    // Only follow the system setting if the user has not made a manual choice.
    if (saved) return
    window.KnechtKit.toggleTheme(event.matches)
    updateIcon()
  })
}

if (document.readyState !== 'loading') {
  initThemeToggle()
} else {
  document.addEventListener('DOMContentLoaded', initThemeToggle)
}
