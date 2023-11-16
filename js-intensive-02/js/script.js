'use strict'

//========================================================================================================================================================


// LECTION n.4

function showErrorMessage(input, message) {
    let box = input.closest('.form_input_box');
    let msgBox = box.querySelector('.error-message');
    msgBox.innerHTML = message;
}

//========================================================================================================================================================

document.querySelector('.box').addEventListener("click", function() {
    setTimeout( () => {
        this.style.border = '1px solid black';
    }, 1000);
});

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================
/* 
function delegate(box, selector, eventName, handler) {
    box.addEventListener(eventName, function(e) {
        let element = e.target.closest(selector);

        if (element !== null && box.contains(element)) {
            handler.call(element, e);
        }

    });
}


const menuList = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');



window.addEventListener("load", function() {

    delegate(menuList, '.menu__link', 'click', function(e) {
        e.preventDefault();
    
        console.log(e.target);
    
        const currentSection = document.querySelector(this.hash);
        scrollToElement(currentSection);
    
        setActiveMenuItem(menuList, this);
    
    });


    let hash = window.location.hash;
    let autoTarget = hash.length > 0 ? this.document.querySelector(hash) : null;


    if (autoTarget !== null) { 
        scrollToElement(autoTarget);
        setActiveMenuItem(menuList, menuList.querySelector(`[href$="${hash}"]`));
    }

    console.log(autoTarget);
});



function setActiveMenuItem(menu, item) {
    menu.querySelectorAll('.menu__link').forEach(link => link.classList.remove('menu__link-active'))
    item.classList.add('menu__link-active')
}


function scrollToElement(element) {
    let top = element.offsetTop - 70;

    window.scrollTo({
        top,
        behavior: 'smooth'
    });
} */

//========================================================================================================================================================
//getBoundingClientRect, getComputedStyle, button - go to up 

// HOMEWORK

function delegate(box, selector, eventName, handler) {
    box.addEventListener(eventName, function(e) {
        let element = e.target.closest(selector);

        if (element !== null && box.contains(element)) {
            handler.call(element, e);
        }

    });
}


const menuList = document.querySelector('.menu__list');
const menuLink = document.querySelectorAll('.menu__link');
const btnUp = document.querySelector('.btnUp');



window.addEventListener("load", function() {

    delegate(menuList, '.menu__link', 'click', function(e) {
        e.preventDefault();
    
        console.log(e.target);
    
        const currentSection = document.querySelector(this.hash);
        scrollToElement(currentSection);
    
        setActiveMenuItem(menuList, this);
    
    });


    let hash = window.location.hash;
    let autoTarget = hash.length > 0 ? this.document.querySelector(hash) : null;


    if (autoTarget !== null) { 
        scrollToElement(autoTarget);
        setActiveMenuItem(menuList, menuList.querySelector(`[href$="${hash}"]`));
    }

    btnUp.addEventListener("click", function (e) {
        scrollToTop(0);
    });

    document.addEventListener('scroll', function () {
       window.scrollY > 500 ? btnUp.classList.add('btnUp-open') :  btnUp.classList.remove('btnUp-open');
    });


    console.log(autoTarget);
});



function setActiveMenuItem(menu, item) {
    menu.querySelectorAll('.menu__link').forEach(link => link.classList.remove('menu__link-active'))
    item.classList.add('menu__link-active')
}


function scrollToElement(element) {
    let coords = element.getBoundingClientRect();
    console.log(coords);
    let top = window.scrollY + coords.top - 70;
    scrollToTop(top);
};

function scrollToTop(top) {
    window.scrollTo({
        top,
        behavior: 'smooth'
    });
};

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// lesson 5

//simple spoller

const spoilerBox = document.querySelectorAll('.spoiler__box');
const spoilerQuestion = document.querySelectorAll('.spoiler__question');
const spoilerAnswer = document.querySelectorAll('.spoiler__answer');
const spoiler = document.querySelector('.spoiler');

spoiler.addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.closest('.spoiler__question-active')) {
        remover(spoilerQuestion, 'spoiler__question-active');
        remover(spoilerAnswer, 'spoiler__answer-active');
        // spoilerQuestion.forEach(question => question.classList.remove('spoiler__question-active'));
        // spoilerAnswer.forEach(answer => answer.classList.remove('spoiler__answer-active'));
    } else if (e.target.closest('.spoiler__question')) {
        remover(spoilerQuestion, 'spoiler__question-active');
        // spoilerQuestion.forEach(question => question.classList.remove('spoiler__question-active'));
        e.target.closest('.spoiler__question').classList.add('spoiler__question-active');
        remover(spoilerAnswer, 'spoiler__answer-active');
        // spoilerAnswer.forEach(answer => answer.classList.remove('spoiler__answer-active'));
        e.target.nextElementSibling.classList.add('spoiler__answer-active')
    }

});

function remover(items, itemClass) {
    items.forEach(item => item.classList.remove(itemClass));
}


//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

