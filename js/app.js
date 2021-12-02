//document.body.style.backgroundColor = "red";
//test me
const openbtn = document.querySelector('#open');
openbtn.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('show-nav')
    document.querySelector('.circle-container').classList.toggle('rotate')
})
const closebtn = document.querySelector('#close');
closebtn.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('show-nav')
    document.querySelector('.circle-container').classList.toggle('rotate')
})