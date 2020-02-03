let slideIndex = 1; ///текущий слайд
let slides = document.querySelectorAll('.slider-item');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let dotsWrap = document.querySelector('.slider-dots');
let dots = document.querySelectorAll('.dot');
console.log(dots);
showSlides(slideIndex);


function showSlides(n) {

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => {
        item.style.display = "none";
    });

    dots.forEach((item) => {
        item.classList.remove('dot-active');
    });

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}



///////////////Event listener на стрелки
prev.addEventListener('click', () => {
    plusSlides(-1);
});

next.addEventListener('click', () => {
    plusSlides(1);
});


////////////////Event listener на дотс
dotsWrap.addEventListener('click', (event) => {
    for (let i = 0; i < dots.length; i++) {
        if (event.target.classList.contains('dot') && (event.target == dots[i])) {
            currentSlide(i + 1);
        }
    };
});