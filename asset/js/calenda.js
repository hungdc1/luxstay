const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// -------------------------------
// Lịch 
let overlay = $('.overlay');
let headerDateWrap = $('.header-date__wrap');
let headerdDatepicker = $('.header-datepicker'); 


let monthCurrentEl = $('.month-current');
let yearCurrentEl = $('.year-current');
let monthNextEl = $('.month-next');
let yearNextEl = $('.year-next');

let dateEleCurrent = $('.month-table-current');
let dateEleNext = $('.month-table-next');

let btnPre = $('.change-month__current--btn');
let btnNext = $('.change-month__next--btn');
let deleteBtn = $('.datepicker-footer__delete');
let submitBtn = $('.datepicker-footer__apply');

let headerDateLable = $('.header-date__lable');

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

function nextMonthFT() {
    return  currentMonth === 11 ? 0 : currentMonth + 1;
}

function nextYearFT() {
    return  currentMonth === 11 ? currentYear + 1: currentYear;
};


function displayInfo() {
    let nextMonth = nextMonthFT();
    let nextYear = nextYearFT();
    // Hiển thị tên tháng
    let currentMonthName = new Date(currentYear, currentMonth).toLocaleString('en-us', { month: 'long' });
    let nextMonthName = new Date(nextYear, nextMonth).toLocaleString('en-us', { month: 'long' });

    monthCurrentEl.innerText = currentMonthName;
    yearCurrentEl.innerText = currentYear;

    monthNextEl.innerText = nextMonthName;
    yearNextEl.innerText = nextYear;

    renderDate();
};

function getDaysInCurrentMonth() {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
};

function getDaysInNextMonth() {
    let nextMonth = nextMonthFT();
    let nextYear = nextYearFT();
    return new Date(nextYear, nextMonth + 1, 0).getDate();
};

function getStartDayInCurrentMonth() {
    return new Date(currentYear, currentMonth, 1).getDay();
};

function getStartDayInNextMonth() {
    let nextMonth = nextMonthFT();
    let nextYear = nextYearFT();
    return new Date(nextYear, nextMonth, 1).getDay();
};

function activeCurrentDay1(day) {
    let day1 = new Date().toDateString();
    let day2 = new Date(currentYear, currentMonth, day).toDateString();
    return day1 == day2 ? 'table-day__active' : '';
};

function activeCurrentDay2(day) {
    let nextMonth = nextMonthFT();
    let nextYear = nextYearFT();
    let day1 = new Date().toDateString();
    let day2 = new Date(nextYear, nextMonth, day).toDateString();
    return day1 == day2 ? 'table-day__active' : '';
};



function disiblePastDay1(day) {
    let day1 = new Date().getTime();
    let day2 = new Date(currentYear, currentMonth, day + 1).getTime();
    return day2 < day1 ? 'table-day__disable' : 'table-day__enable';
};

function disiblePastDay2(day) {
    let nextMonth = nextMonthFT();
    let nextYear = nextYearFT();
    let day1 = new Date().getTime();
    let day3 = new Date(nextYear, nextMonth, day + 1).getTime();

    return day3 < day1 ? 'table-day__disable' : 'table-day__enable';
};


function renderDate() {
    let startDayCurrent = getStartDayInCurrentMonth();
    let daysInCurrentMonth = getDaysInCurrentMonth();

    let startDayNext = getStartDayInNextMonth();
    let daysInNextMonth = getDaysInNextMonth();

    dateEleCurrent.innerHTML = '';
    dateEleNext.innerHTML = '';

    for (let i = 0; i < startDayCurrent - 1; i++) {
        dateEleCurrent.innerHTML += `
            <div class="table-day table-day__empt"></div>
        `;
    }
    
    for (let i = 0; i < daysInCurrentMonth; i++) {
        dateEleCurrent.innerHTML += `
            <div class="table-day ${activeCurrentDay1(i + 1)} ${disiblePastDay1(i + 1)}">${i + 1}</div>
        `;
    }
    
    for (let i = 0; i < startDayNext - 1; i++) {
        dateEleNext.innerHTML += `
            <div class="table-day table-day__empt"></div>
        `;
    }

    for (let i = 0; i < daysInNextMonth; i++) {
        dateEleNext.innerHTML += `
            <div class="table-day ${activeCurrentDay2(i + 1)} ${disiblePastDay2(i + 1)}">${i + 1}</div>
        `;
    };
    
};

// Xử lý pre/next Btn 
function clickNextBtn() {
    if (currentMonth == 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    displayInfo();
};


function clickPreBtn() {
    if (currentMonth == 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    displayInfo();
};

btnPre.addEventListener('click', clickPreBtn);
btnNext.addEventListener('click', clickNextBtn);
window.onload = displayInfo();


// Xử lý select các ngày
let enableDays = $$('.table-day__enable');
let selectedDaysArr = [];



function handleSelectDay(e) {
    e.target.classList.toggle('table-day__selected');
};

enableDays.forEach(enableDay => {
    enableDay.addEventListener('mousedown', handleSelectDay);
});


function deleteSelectDays() {
    let selectedDays = document.querySelectorAll('.table-day__selected');
    selectedDays.forEach(selectedDay => {
        selectedDay.classList.remove('table-day__selected');
    });
    selectedDaysArr = [];
    headerDateLable.innerText = 'Ngày';
};

function submitSelectDays() {
    selectedDaysArr = [];
    let selectedDays = document.querySelectorAll('.table-day__selected');
    let lengthDays = selectedDays.length;
    for( let i = 0; i < lengthDays; i++) {
        selectedDaysArr.push(selectedDays[i].innerText);
    };
    headerDateLable.innerText =  `${selectedDays[0].innerText} - ${selectedDays[lengthDays - 1].innerText}`;
};

deleteBtn.addEventListener('click', deleteSelectDays);
submitBtn.addEventListener('click', submitSelectDays);


// show hide Datepicker

function showHeaderDatepicker() {
    headerdDatepicker.classList.remove('hide');
    overlay.classList.remove('hide');
};

function hideHeaderDatepicker() {
    headerdDatepicker.classList.add('hide');
    overlay.classList.add('hide');
};

headerDateWrap.addEventListener('click', showHeaderDatepicker);
overlay.addEventListener('click', hideHeaderDatepicker);


export default displayInfo;