document.querySelector('.hamburger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.slide-menu').classList.toggle('active');
    document.querySelector('.ham-cover').classList.toggle('active');
})
document.querySelector('.hamburger-x').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.slide-menu').classList.toggle('active');
    document.querySelector('.ham-cover').classList.toggle('active');
})