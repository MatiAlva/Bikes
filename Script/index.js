    //Parallax
let parallax = document.querySelector('.parallax');

window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.backgroundPositionY = scrollTop * 0.7 + 'px';
}

