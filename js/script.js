let menuBox = document.querySelector('.sfgMp__primary-navigation_list')
let menuIcon = document.querySelector('.menuIcon')

menuIcon.addEventListener('click', () => {
    menuBox.classList.toggle('open-menu')

    if(menuBox.classList.contains('open-menu')){
        menuIcon.src = "../media/icon-close.svg"
    }else {
        menuIcon.src = "../media/icon-hamburger.svg"
    }
    
})






