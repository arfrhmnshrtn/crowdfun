const bookmark = document.querySelector('.bookmark');
const bookmarkText = document.querySelector('.bookmark .text');
const btnCard = document.querySelectorAll('.about .container .box-card .button .btn-card');
const elementAlert = document.querySelector('.alert');
const elementSecondAlert = document.querySelector('.second-alert');
const closeButton = document.querySelector('#close');
const btnCircle = document.querySelectorAll('.alert .container .card .box-card .circle');
const buttonAlert = document.querySelectorAll('.alert .container .card .box-card .button');
const btnContinue = document.querySelectorAll('.alert .container .card .box-card .button .btn-continue');
const parentCardAlert = document.querySelectorAll('.alert .container .card .box-card');
const btnActiveCard = document.querySelectorAll('.alert .container .card .box-card .circle-bold');
const btnDone = document.getElementById('btn-done');

bookmark.addEventListener('click', ()=> {
    bookmarkText.classList.toggle('active');

    if (bookmarkText.textContent == 'Bookmark'){
        bookmarkText.textContent = 'Bookmarked';
    }else{
        bookmarkText.textContent = 'Bookmark';
    }
});

btnCard.forEach(el => {
    el.addEventListener('click', ()=> {
        if (el.textContent.includes('Out Of Stock')){
            elementAlert.style.display = 'none';
        }else{
            elementAlert.style.display = 'inherit';
        }
        document.documentElement.scrollTop = 260;
    });
});

closeButton.addEventListener('click', ()=> {
    elementAlert.style.display = 'none';
});

for (let i = 0; i < btnCircle.length; i++){
    btnCircle[i].addEventListener('click', function() {
        buttonAlert[i].classList.toggle('active');
        parentCardAlert[i].classList.toggle('active');
        btnActiveCard[i].classList.toggle('active');
    });

    btnActiveCard[i].addEventListener('click', ()=> {
        buttonAlert[i].classList.toggle('active');
        parentCardAlert[i].classList.toggle('active');
        btnActiveCard[i].classList.toggle('active');
    });
}

btnContinue.forEach(el => {
    el.addEventListener('click', ()=> {
        elementAlert.style.display = 'none';
        elementSecondAlert.style.display = 'inline-block';
    });
});

btnDone.addEventListener('click', ()=> {
    elementSecondAlert.style.display = 'none';
});


// menu button
const menuUl = document.querySelector('.hero-container .menu ul');
const btnHumberger = document.querySelector('.hero-container .navbar-menu .icon-humberger');

btnHumberger.addEventListener('click', ()=> {
    menuUl.classList.toggle('active');
})