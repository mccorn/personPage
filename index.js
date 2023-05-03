const state = {
    sliderActiveIdx: 0,
}

let headerSlider = document.getElementById('headerSlider');
let headerSlides = headerSlider.querySelectorAll('.slide');

let mainSlider = document.getElementById('articleSlider');
let mainSlides = mainSlider.querySelectorAll('.slide');

Array.from(headerSlides).forEach((slide, idx) => {
    if (idx === state.sliderActiveIdx) {
        headerSlides[idx].classList.add('active');
        mainSlides[idx].classList.add('active');
    } else {
        headerSlides[idx].classList.remove('active');
        mainSlides[idx].classList.remove('active');
    }

    headerSlides[idx].addEventListener('click', changeSlide);
    mainSlides[idx].addEventListener('click', changeSlide);
})

function changeSlide() {
    let oldIdx = state.sliderActiveIdx;

    headerSlides[oldIdx].classList.remove('active');
    mainSlides[oldIdx].classList.remove('active');

    let newIdx = state.sliderActiveIdx = (oldIdx === mainSlides.length - 1) ? 0 : state.sliderActiveIdx + 1;

    headerSlides[newIdx].classList.add('active');
    mainSlides[newIdx].classList.add('active');
}