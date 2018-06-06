/*jslint browser, es6*/

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    var heroSlider = document.getElementById('heroslider');
    var slides = Array.from(heroSlider.getElementsByTagName('li'));
    var sliderDots = document.getElementById('sliderdots');
    var slideDirection = document.getElementById('slidedirection');
    var slideIndex = 0;
    var slideSpeed = 2000;

    slides.forEach(function (ignore, index) {
        var element = '<input type="radio" name="changedots" value="' + index + '">';
        //sliderDots.innerHTML += element;
        sliderDots.insertAdjacentHTML('beforeend', element); //beforebegin,afterbegin er også muligheder, ovenstående eksempel virker som her
    });

    function showSlide(n) {
        slides.forEach(function (slide) {
            slide.style.display = 'none';
        });
        slides[n].style.display = 'block';
        sliderDots.getElementsByTagName('input')[n].checked = true;
    }

    function changeByDot(event, slideIndex) {
        if (event.target !== event.currentTarget) {
            slideIndex = parseInt(event.target.getAttribute('value'));
            event.target.blur();
            showSlide(slideIndex);
        }
    }

    function slideChanger(direction = 'next') {
        if (direction === 'prev' && slideIndex === 0) {
            slideIndex = slides.length - 1;
        } else if (direction === 'prev') {
            slideIndex -= 1;
        } else if (direction === 'next' && slideIndex === slides.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex += 1;
        }
        showSlide(slideIndex);
    }

    function changeByArrow(event) {
        if (event.target !== event.currentTarget) {
            var direction = event.target.getAttribute('data-direction');
            slideChanger(direction);
        }

        event.stopPropagation();
    }

    function changeByKey(event) {
        if (event.keyCode === 39) {
            slideChanger('next');
        } else if (event.keyCode === 37) {
            slideChanger('prev');
        }
    }

    var slideInterval = setInterval(slideChanger, slideSpeed);

    function pauseSlideshow() {
        clearInterval(slideInterval);
    }

    function playSlideshow() {
        slideInterval = setInterval(slideChanger, slideSpeed);
    }

    showSlide(slideIndex);
    sliderDots.addEventListener('click', changeByDot);
    slideDirection.addEventListener('click', changeByArrow);
    document.addEventListener('keyup', changeByKey);
    heroSlider.addEventListener('mouseover', pauseSlideshow);
    heroSlider.addEventListener('mouseout', playSlideshow);
});