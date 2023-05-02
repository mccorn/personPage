const state = {
    leftSliderActiveIdx: 0,
    rightSliderActiveIdx: 0,

    sliderActiveIdx: 0,
}

let leftSlider = document.getElementById('headerSlider');
let leftSlides = leftSlider.querySelectorAll('.slide');

let rightSlider = document.getElementById('articleSlider');
let rightSlides = rightSlider.querySelectorAll('.slide');

let counter = 0;

for (let slide of leftSlides) {
    slide.addEventListener('click', changeSlide)
    if (slide.classList.contains('active')) { state.sliderActiveIdx = counter }

    counter += 1;
}

counter = 0;
for (let slide of rightSlides) {
    slide.addEventListener('click', changeSlide)

    slide.classList.remove('active')

    if (counter === state.sliderActiveIdx) {
        slide.classList.add('active')
    }

    counter += 1;
}

function changeSlide() {
    let oldIdx = state.sliderActiveIdx;

    // console.log('changeSlide', state)

    leftSlides[oldIdx].classList.remove('active');
    rightSlides[oldIdx].classList.remove('active');

    // console.log('old', oldIdx, leftSlides[oldIdx], rightSlides[oldIdx])

    let newIdx = state.sliderActiveIdx = oldIdx === rightSlides.length - 1 ? 0 : state.sliderActiveIdx + 1;

    leftSlides[newIdx].classList.add('active');
    rightSlides[newIdx].classList.add('active');

    // console.log('new', newIdx, leftSlides[newIdx], rightSlides[newIdx])
}

console.log('state', state)