// MENU MOBILE
const apareceMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

      if (toggle && nav) {
            toggle.addEventListener('click', () => {
                  nav.classList.toggle('show')
            });
      }
}

apareceMenu('nav_mobile', 'nav_menu')

const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n => n.classList.remove('ativo'))

function linkAction() {
      navLink.forEach(n => n.classList.remove('ativo'))
      this.classList.add('ativo')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))