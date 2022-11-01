const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let overlay = $('.overlay');
let navbarCurrencyUnit = $('.navbar-currency-unit')
let selectUnit = $('.select-unit');

let selectLanguageItems = $$('.select-language__item');
let selectCurrencyItems = $$('.select-currency__item');
let navbarFlagIcon = $('.navbar-currency-unit__flag');
let  navbarCurrencyUnitLable = $('.navbar-currency-unit__lable');


function displaySelectUnit () {
    navbarFlagIcon.innerHTML = '<img src="./asset/img/flag1.png" alt="">';

    selectLanguageItems.forEach(function (selectLanguageItem) {
        selectLanguageItem.addEventListener('click', function() {
            let iconCheckOther = this.parentNode.querySelector('.select__icon--check i');
            iconCheckOther.parentNode.removeChild(iconCheckOther);


            let iconCheck = this.querySelector('.select__icon--check');
            iconCheck.innerHTML = `
                                        <i class="fa-solid fa-check"></i>
                                    `
            let displayFlag = this.querySelector('.select-language__item--img img');
            navbarFlagIcon.innerHTML = '';
            let newFlag = document.createElement('img');
            newFlag.src = displayFlag.src;
            navbarFlagIcon.appendChild(newFlag);
        });
    });

    selectCurrencyItems.forEach(function (selectCurrencyItem) {
        selectCurrencyItem.addEventListener('click', function() {
            let iconCheckOther = this.parentNode.querySelector('.select__icon--check i');
            iconCheckOther.parentNode.removeChild(iconCheckOther);

            let iconCheck = this.querySelector('.select__icon--check');
            iconCheck.innerHTML = `
                                        <i class="fa-solid fa-check"></i>
                                    `
            let displayUnit = this.querySelector('.select-currency__code').innerText;
            navbarCurrencyUnitLable.innerText = displayUnit;
        });
    });
};

function showCurrencyUnit() {
    selectUnit.classList.remove('hide');
    overlay.classList.remove('hide');
};


function hideCurrencyUnit() {
    selectUnit.classList.add('hide');
    overlay.classList.add('hide');
};
 
navbarCurrencyUnit.addEventListener('click', showCurrencyUnit);
overlay.addEventListener('click', hideCurrencyUnit);

displaySelectUnit();

export default displaySelectUnit;