import './style.css'
// import typescriptLogo from './typescript.svg'

function addClassName() {
  document.getElementById('section')!.className = 'active'
  document.getElementById('logo')!.className = 'down_logo'
}

function removeClassName() {
  document.getElementById('section')!.className = 'inactive'
  document.getElementById('logo')!.className = 'logo'
}

document.addEventListener('scroll', () => {
  let currentScrollValue = document.documentElement.scrollTop
  if (window.scrollY > 100) {
    addClassName()
  } else {
    removeClassName()
  }
  console.log('currentScrollValue is ' + currentScrollValue)
})