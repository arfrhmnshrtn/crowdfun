const bookmark = document.querySelector('.bookmark');
const bookmarkText = document.querySelector('.bookmark .text');
const btnCard = document.querySelectorAll('.about .container .box-card .button .btn-card');
const elementAlert = document.querySelector('.alert');
const closeButton = document.querySelector('#close');
const btnCircle = document.querySelectorAll('.alert .container .card .box-card .circle');
const buttonAlert = document.querySelectorAll('.alert .container .card .box-card .button');
const parentCardAlert = document.querySelectorAll('.alert .container .card .box-card');
const btnActiveCard = document.querySelectorAll('.alert .container .card .box-card .circle-bold');

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