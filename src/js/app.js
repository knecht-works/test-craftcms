import '../css/app.css'

const THEME_STORAGE_KEY = 'theme'

const SUN_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><path d="M12 3V2m0 20v-1m9-9h1M2 12h1m15.5-6.5L20 4M4 20l1.5-1.5M4 4l1.5 1.5m13 13L20 20" /><circle cx="12" cy="12" r="4" /></g></svg>'
const MOON_ICON = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" fill-rule="evenodd" d="M489.493 111.658c30.658-1.792 45.991 36.44 22.59 56.329C457.831 214.095 426 281.423 426 354c0 134.757 109.243 244 244 244c72.577 0 139.905-31.832 186.014-86.084c19.868-23.377 58.064-8.102 56.332 22.53C900.4 745.823 725.141 912 512.5 912C291.31 912 112 732.69 112 511.5c0-211.39 164.287-386.024 374.198-399.649l.206-.013zm-81.143 79.75l-4.112 1.362C271.1 237.943 176 364.092 176 511.5C176 697.344 326.656 848 512.5 848c148.28 0 274.938-96.192 319.453-230.41l.625-1.934l-.11.071c-47.18 29.331-102.126 45.755-159.723 46.26L670 662c-170.104 0-308-137.896-308-308c0-58.595 16.476-114.54 46.273-162.467z" /></svg>'

function isLight() {
  return document.body.classList.contains('kit-light')
}

function updateIcon() {
  const icon = document.querySelector('[data-theme-icon]')
  if (!icon) return
  icon.innerHTML = isLight() ? SUN_ICON : MOON_ICON
}

document.addEventListener('DOMContentLoaded', function () {
  updateIcon()

  const toggle = document.getElementById('theme-toggle')
  if (toggle) {
    toggle.addEventListener('click', function () {
      const mode = window.KnechtKit.toggleTheme()
      localStorage.setItem(THEME_STORAGE_KEY, mode)
      updateIcon()
    })
  }

  // Follow the system preference live, but only while the user hasn't
  // made an explicit choice via the toggle.
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (event) {
    if (localStorage.getItem(THEME_STORAGE_KEY)) return
    window.KnechtKit.toggleTheme(!event.matches)
    updateIcon()
  })
})
