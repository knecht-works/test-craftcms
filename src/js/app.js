import '../css/app.css'

document.addEventListener('DOMContentLoaded', function () {
  var button = document.getElementById('theme-toggle')
  if (!button) return

  var root = document.documentElement
  var icons = button.querySelectorAll('[data-theme-icon]')

  var syncIcons = function () {
    var isLight = root.classList.contains('kit-light')
    icons.forEach(function (icon) {
      // Light mode shows the moon (switch to dark); dark mode shows the sun (switch to light).
      icon.hidden = icon.getAttribute('data-theme-icon') !== (isLight ? 'moon' : 'sun')
    })
  }

  syncIcons()

  button.addEventListener('click', function () {
    var isLight = root.classList.toggle('kit-light')
    localStorage.setItem('theme', isLight ? 'light' : 'dark')
    syncIcons()
  })
})
