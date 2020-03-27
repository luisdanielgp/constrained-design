let menuIsOpen = false
const menu = document.getElementById('menu')
const menuBtn = document.getElementById('menu-btn')

const closeMenu = () => {
  menu.className = menu.className.replace('left-50', 'left-100')
  menuBtn.innerHTML = '<img src="/img/toggle_menu_open-02.png" alt="toggle menu open">'
  menuIsOpen = false
}

const openMenu = () => {
  menu.className = menu.className.replace('left-100', 'left-50')
  menuBtn.innerHTML = '<img src="/img/toggle_menu_close-03.png" alt="toggle menu close">'
  menuIsOpen = true
}

window.onload = () => {
  // bind click handler to menu button
  menuBtn.onclick = (e) => {
    e.preventDefault()
    if (menuIsOpen) closeMenu()
    else openMenu()
  }
}

window.onresize = closeMenu
