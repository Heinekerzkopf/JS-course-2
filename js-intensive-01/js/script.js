'use strict'

// SHIFT+ALT+A

const calcBtn = document.querySelector('.calculator__button');
const calcOut = document.querySelector('.calculator__out');
const calcOptions = document.querySelectorAll('.calculator__option');
const calcInp = document.querySelectorAll('.calculator__input');
const calcSelect = document.querySelector('.calculator__select');

//========================================================================================================================================================

calcBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const inputOne = +document.querySelector('.calculator__input-one').value;
    const inputTwo = +document.querySelector('.calculator__input-two').value;
    let result;
    let switchBtn;

    function btnSwitcher() {
        calcBtn.disabled = false;
    }

    //========================================================================================================================================================

    if (inputOne == '' || inputTwo == '') {
        alert('write any number');
        return
    }

    if (calcOptions[0].selected) {
        result = inputOne + inputTwo;
        switchBtn = true;
    } else if (calcOptions[1].selected) {
        result = inputOne - inputTwo;
        switchBtn = true;
    } else if (calcOptions[2].selected) {
        result = inputOne * inputTwo;
        switchBtn = true;
    } else if (calcOptions[3].selected) {
        result = inputOne / inputTwo;
        switchBtn = true;
    }

    calcOut.innerHTML = result;
    calcBtn.disabled = switchBtn;

    //========================================================================================================================================================

    calcInp.forEach(inp => inp.addEventListener("input", btnSwitcher));

    calcSelect.addEventListener("focus", btnSwitcher);

});


//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

// picking images

const images = document.querySelectorAll('.images__image');

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", imageClicked);
}

function imageClicked(e) {
    if (e.ctrlKey) {
        this.classList.toggle('active');
    }
    else {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.remove('active');
        }

        this.classList.add('active');
    }
}

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

const form = document.querySelector('.form');
const formInputs = document.querySelectorAll('.form__input');
const formButton = document.querySelector('.form__button');

formButton.addEventListener("click", function (e) {
    e.preventDefault();

    // adding class .error to empty fields
    formInputs.forEach(function (inp) {
        if (inp.value === '') {
            inp.classList.add('error');
        }
    });

    // checking inputs if they have 'error' class
    form.addEventListener("input", function (e) {

        const currentTarget = e.target.closest('.form__input');

        if (!currentTarget) return;

        if (currentTarget.classList.contains('error')) {
            currentTarget.classList.remove('error');
        };
        
    });

    // getting Array from Nodelist, to use array-method .some
    let inputsArray = Array.from(formInputs);

    // if all fields arent empty - sending form
    if (!inputsArray.some(inp => inp.value === '')) {
        form.submit();
    }

});


function delegate(box, selector, eventName, handler) {
    box.addEventListener(eventName, function (e) {
        let elem = e.target.closest(selector);

        if(elem !== null && box.contains(elem)) {
            handler.call(elem, e);
        }
    });
}

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================


// lection four



const formHW = document.querySelector('.form-hw-example');
const inputs = document.querySelectorAll('.form__check');
let validation = {
    name: /^.{2,32}$/,
    phone: /^.\d{7,15}$/,
    email: /^.+@.+\..+$/,
};

formHW.addEventListener("submit", function (e) {
    let hasError = false;

    for(let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        let pattern = validation[input.dataset.rule];

        if(!pattern.test(input.value)) {
            input.classList.add('error');
            hasError = true;
        }

    }

    if(hasError) {
        e.preventDefault();
    }
});

formHW.addEventListener("focusin", function (e) {
    if(e.target.classList.contains("form__check")) {
        e.target.classList.remove('error');
    };
});

//========================================================================================================================================================
//========================================================================================================================================================
//========================================================================================================================================================

