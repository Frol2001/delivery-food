const cart_button = document.querySelector('#cart_button');
const modal = document.querySelector(".modal")
const close = document.querySelector(".close")


cart_button.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);



function toggleModal (){
    modal.classList.toggle("is_open");
}


new WOW().init();