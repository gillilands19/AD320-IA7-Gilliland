const clickMe = document.querySelector('.onediv');

// eslint-disable-next-line require-jsdoc
function divClick(e) {
  clickMe.classList.toggle('onediv_blue');
};

clickMe.addEventListener('click', divClick);
