import '../css/app.css'

function currentTheme() {
  return document.documentElement.classList.contains('kit-light') ? 'light' : 'dark'
}

function updateIcons() {
  const theme = currentTheme()
  document.querySelectorAll('[data-theme-icon]').forEach((el) => {
    // Sun shows while dark is active (click to go light), moon while light is active.
    el.hidden = (theme === 'dark') !== (el.dataset.themeIcon === 'sun')
  })
}

document.addEventListener('DOMContentLoaded', () => {
  updateIcons()
  const toggle = document.getElementById('theme-toggle')
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('kit-light')
      localStorage.setItem('theme', currentTheme())
      updateIcons()
    })
  }
})
