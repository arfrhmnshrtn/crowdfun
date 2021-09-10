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


// manipulasi icon bookmark
bookmark.addEventListener('click', ()=> {
    // mengubah warna text bookmark
    bookmarkText.classList.toggle('active');

    // mengubah text bookmark menjadi bookmarked
    if (bookmarkText.textContent == 'Bookmark'){
        bookmarkText.textContent = 'Bookmarked';
    }else{
        bookmarkText.textContent = 'Bookmark';
    }
});


// button untuk menampilka alert pesan
btnCard.forEach(el => {
    el.addEventListener('click', ()=> {
        // jika card out of stock maka button tidak bisa di pencet
        if (el.textContent.includes('Out Of Stock')){
            elementAlert.style.display = 'none';
        }else{ //jika tidak tampilkan alert pesan
            elementAlert.style.display = 'inherit';
        }

        // jika button di pencet maka akan otomatis scrool ke posisi alert berada
        document.documentElement.scrollTop = 260;
    });
});


// tombol close pada alert pesan
closeButton.addEventListener('click', ()=> {
    elementAlert.style.display = 'none';
});

// menambahkan efek saat card di click atau di pilih
for (let i = 0; i < btnCircle.length; i++){

    // jika button cirle di click maka akan menampilkan tombol button di card itu sendiri
    btnCircle[i].addEventListener('click', function() {

        // menampilkan button
        buttonAlert[i].classList.toggle('active');
        
        // memberikan efek box shadow pada card
        parentCardAlert[i].classList.toggle('active');

        // jika tombol cirle di clik maka akan ada cirle di tengahnya
        btnActiveCard[i].classList.toggle('active');
    });



    btnActiveCard[i].addEventListener('click', ()=> {

        // menampilkan button
        buttonAlert[i].classList.toggle('active');

        // memberikan efek box shadow pada card
        parentCardAlert[i].classList.toggle('active');

        // menampilkan cirle dan menghilangkan cirle bold
        btnActiveCard[i].classList.toggle('active');
    });
}

// jika element sudah di pilih maka akan ada alert terimakasih
btnContinue.forEach(el => {
    // looping button yang ada di dalam alert card
    el.addEventListener('click', ()=> {
        elementAlert.style.display = 'none';
        elementSecondAlert.style.display = 'inline-block';
        document.documentElement.scrollTop = 260;
    });
});


// button done pada alert terimakasih
btnDone.addEventListener('click', ()=> {
    elementSecondAlert.style.display = 'none';
});


// menu button
const menuUl = document.querySelector('.hero-container .menu ul');
const btnHumberger = document.querySelector('.hero-container .navbar-menu .icon-humberger');

// humberger menu button
btnHumberger.addEventListener('click', ()=> {
    menuUl.classList.toggle('active');
})