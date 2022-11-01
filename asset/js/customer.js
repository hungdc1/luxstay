const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


let overlay = $('.overlay');
let headercustomerWrap = $('.header-customer__wrap');
let customerOptionList = $('.customer-option__list');

let selectNumberAdult = $('.select-number__adult');
let selectNumberKid = $('.select-number__kid');
let selectNumberInfant = $('.select-number__infant');

let btnMinusAdult = $('.btn-minus__adult');
let btnMinusKid = $('.btn-minus__kid');
let btnMinusInfant = $('.btn-minus__infant');

let btnPlusAdult = $('.btn-plus__adult');
let btnPlusKid = $('.btn-plus__kid');
let btnPlusInfant = $('.btn-plus__infant');


let numberAdult = 0;
let numberKid = 0;
let numberInfant = 0;

let deleteCustomerBtn = $('.customer-option__delete');
let applyCustomerBtn = $('.customer-option__apply');
let headerCustomerLable = $('.header-customer__lable');

function displayCustomerNumber() {
    selectNumberAdult.innerHTML =   `
                                    <span>${numberAdult}</span>
                                    `
    if(numberAdult == 0) {
        btnMinusAdult.classList.add('customer-option__select-btn--disable');
        btnMinusAdult.classList.remove('customer-option__select-btn--enable');
    } else {
        btnMinusAdult.classList.remove('customer-option__select-btn--disable');
        btnMinusAdult.classList.add('customer-option__select-btn--enable');
    };

    selectNumberKid.innerHTML =   `
                                    <span>${numberKid}</span>
                                    `
    if(numberKid == 0) {
        btnMinusKid.classList.add('customer-option__select-btn--disable');
        btnMinusKid.classList.remove('customer-option__select-btn--enable');
    } else {
        btnMinusKid.classList.remove('customer-option__select-btn--disable');
        btnMinusKid.classList.add('customer-option__select-btn--enable');
    };

    selectNumberInfant.innerHTML =   `
                                    <span>${numberInfant}</span>
                                    `
    if(numberInfant == 0) {
        btnMinusInfant.classList.add('customer-option__select-btn--disable');
        btnMinusInfant.classList.remove('customer-option__select-btn--enable');
    } else {
        btnMinusInfant.classList.remove('customer-option__select-btn--disable');
        btnMinusInfant.classList.add('customer-option__select-btn--enable');
    };


};

function clickMinusAdultBtn() {
    if (numberAdult == 0) {
        numberAdult = 0; 
    } else {
        numberAdult--; 
    }
    displayCustomerNumber();
};

function clickPlusAdultBtn() {
    numberAdult++;
    displayCustomerNumber();
};
 

function clickMinusKidBtn() {
    if (numberKid == 0) {
        numberKid = 0; 
    } else {
        numberKid--; 
    }
    displayCustomerNumber();
};

function clickPlusKidBtn() {
    numberKid++;
    displayCustomerNumber();
};

function clickMinusInfantBtn() {
    if (numberInfant == 0) {
        numberInfant = 0; 
    } else {
        numberInfant--; 
    }
    displayCustomerNumber();
};

function clickPlusInfantBtn() {
    numberInfant++;
    displayCustomerNumber();
};


btnMinusAdult.addEventListener('click', clickMinusAdultBtn);
btnPlusAdult.addEventListener('click', clickPlusAdultBtn);

btnMinusKid.addEventListener('click', clickMinusKidBtn);
btnPlusKid.addEventListener('click', clickPlusKidBtn);

btnMinusInfant.addEventListener('click', clickMinusInfantBtn);
btnPlusInfant.addEventListener('click', clickPlusInfantBtn);


function deleteBtn () {
    numberAdult = 0;
    numberKid = 0;
    numberInfant = 0;
    headerCustomerLable.innerText = "Số Khách";
    displayCustomerNumber();
}


headerCustomerLable.innerText = "Số Khách";

function applyBtn() {
    if(numberAdult == 0 && numberKid == 0 && numberInfant == 0){
        headerCustomerLable.innerText = "Số Khách";
    }else {
        headerCustomerLable.innerText = `${numberAdult} người lớn - ${numberKid} trẻ em - ${numberKid} trẻ sơ sinh`;
    }
    hideCustomerOption();
}


deleteCustomerBtn.addEventListener('click',deleteBtn);
applyCustomerBtn.addEventListener('click',applyBtn);

function showCustomerOption() {
    customerOptionList.classList.remove('hide');
    overlay.classList.remove('hide');
};

function hideCustomerOption() {
    customerOptionList.classList.add('hide');
    overlay.classList.add('hide');
};

headercustomerWrap.addEventListener('click', showCustomerOption);
overlay.addEventListener('click', hideCustomerOption);

displayCustomerNumber();

export default displayCustomerNumber;