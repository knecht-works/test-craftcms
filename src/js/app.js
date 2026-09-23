import '../css/app.css'

function setTheme(isLight) {
  document.documentElement.classList.toggle('kit-light', isLight)
  var icon = document.querySelector('[data-theme-icon]')
  if (icon) {
    icon.textContent = isLight ? '☀️' : '🌙'
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('theme-toggle')
  if (!toggle) {
    return
  }

  // Sync the icon with the theme the inline head script already applied,
  // so there is no flash of the wrong icon.
  setTheme(document.documentElement.classList.contains('kit-light'))

  toggle.addEventListener('click', function () {
    var isLight = !document.documentElement.classList.contains('kit-light')
    setTheme(isLight)
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
  })
})
