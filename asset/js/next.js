
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

 


let locationList = $('.content__location--list');
let listsuggest = $('.content__suggest--list');
let listDiscover = $('.content__discover--list');
let listuserManual = $('.content__user-manual--list');

let locationBtnLeft = $('.content__location-btn--left');
let locationBtnRight = $('.content__location-btn--right');

let suggestBtnLeft = $('.content__suggest-btn--left');
let suggestBtnRight = $('.content__suggest-btn--right');

let discoverBtnLeft = $('.content__discover-btn--left');
let discoverBtnRight = $('.content__discover-btn--right');

let userManualBtnLeft = $('.content__user-manual-btn--left');
let userManualBtnRight = $('.content__user-manual-btn--right');


function displayContent() {
    locationList.style.transform = `translate(${currentLocationDistance}px, 0px)`;
    listsuggest.style.transform = `translate(${currentSuggestDistance}px, 0px)`;
    listDiscover.style.transform = `translate(${currentDiscoverDistance}px, 0px)`;
    listuserManual.style.transform = `translate(${currentUserManualDistance}px, 0px)`;
};

 
// Location 

var currentLocationDistance = 0;
var jumpLocation = 258;
var limitEndLocation = -jumpLocation * 3;

function preLocationItem() {
    locationBtnRight.classList.add('btn-enable');
    locationBtnRight.classList.remove('btn-disable');

    if(currentLocationDistance == 0) {
        return;
    } else if (currentLocationDistance == -jumpLocation){
        locationBtnLeft.classList.add('btn-disable'); 
        locationBtnLeft.classList.remove('btn-enable');
        currentLocationDistance = currentLocationDistance + jumpLocation;
        displayContent();
    } else {
        currentLocationDistance = currentLocationDistance + jumpLocation;
        displayContent();
    } 
};

function nextLocationItem() {
    locationBtnLeft.classList.remove('btn-disable');
    locationBtnLeft.classList.add('btn-enable');

    if(currentLocationDistance == limitEndLocation) {
        return;
    } else if (currentLocationDistance == -jumpLocation * 2){
        locationBtnRight.classList.remove('btn-enable');
        locationBtnRight.classList.add('btn-disable');
        currentLocationDistance = currentLocationDistance - jumpLocation;
        displayContent();
    } else {
        currentLocationDistance = currentLocationDistance - jumpLocation ;
        displayContent();
    };
};

locationBtnRight.addEventListener('click',nextLocationItem);
locationBtnLeft.addEventListener('click',preLocationItem);

// -------------------------

// Suggest 
var currentSuggestDistance = 0;
var jumpSuggest = 320; //item.offsetLeft + margin-right
var limitEndSuggest = -jumpSuggest * 3; // 3 là số phần tử bị ẩn

function preSuggestItem() {
    suggestBtnRight.classList.add('btn-enable');
    suggestBtnRight.classList.remove('btn-disable');

    if(currentSuggestDistance == 0) {
        return;
    } else if (currentSuggestDistance == -jumpSuggest){
        suggestBtnLeft.classList.add('btn-disable'); 
        suggestBtnLeft.classList.remove('btn-enable');
        currentSuggestDistance = currentSuggestDistance + jumpSuggest;
        displayContent();
    } else {
        currentSuggestDistance = currentSuggestDistance + jumpSuggest;
        displayContent();
    } 
};

function nextSuggestItem() {
    suggestBtnLeft.classList.remove('btn-disable');
    suggestBtnLeft.classList.add('btn-enable');

    if(currentSuggestDistance == limitEndSuggest) {
        return;
    } else if (currentSuggestDistance == -jumpSuggest * 2){
        suggestBtnRight.classList.remove('btn-enable');
        suggestBtnRight.classList.add('btn-disable');
        currentSuggestDistance = currentSuggestDistance - jumpSuggest;
        displayContent();
    } else {
        currentSuggestDistance = currentSuggestDistance - jumpSuggest ;
        displayContent();
    };
};

suggestBtnRight.addEventListener('click',nextSuggestItem);
suggestBtnLeft.addEventListener('click',preSuggestItem);
// -------------------------

// Discover
var currentDiscoverDistance = 0;
var jumpDiscover = 430; //item.offsetLeft + margin-right
var limitEndDiscover = -jumpDiscover * 12; // 12 là số phần tử bị ẩn

function preDiscoverItem() {
    discoverBtnRight.classList.add('btn-enable');
    discoverBtnRight.classList.remove('btn-disable');

    if(currentDiscoverDistance == 0) {
        return;
    } else if (currentDiscoverDistance == -jumpDiscover){
        discoverBtnLeft.classList.add('btn-disable'); 
        discoverBtnLeft.classList.remove('btn-enable');
        currentDiscoverDistance = currentDiscoverDistance + jumpDiscover;
        displayContent();
    } else {
        currentDiscoverDistance = currentDiscoverDistance + jumpDiscover;
        displayContent();
    } 
};

function nextDiscoverItem() {
    discoverBtnLeft.classList.remove('btn-disable');
    discoverBtnLeft.classList.add('btn-enable');

    if(currentDiscoverDistance == limitEndDiscover) {
        return;
    } else if (currentDiscoverDistance == -jumpDiscover * 11){
        discoverBtnRight.classList.remove('btn-enable');
        discoverBtnRight.classList.add('btn-disable');
        currentDiscoverDistance = currentDiscoverDistance - jumpDiscover;
        displayContent();
    } else {
        currentDiscoverDistance = currentDiscoverDistance - jumpDiscover ;
        displayContent();
    };
};

discoverBtnRight.addEventListener('click',nextDiscoverItem);
discoverBtnLeft.addEventListener('click',preDiscoverItem);
// -------------------------



// User Manual
var currentUserManualDistance = 0;
var jumpUserManual = 430; //item.offsetLeft + margin-right
var limitEndUserManual = -jumpUserManual * 2; // 2 là số phần tử bị ẩn

function preUserManualItem() {
    userManualBtnRight.classList.add('btn-enable');
    userManualBtnRight.classList.remove('btn-disable');

    if(currentUserManualDistance == 0) {
        return;
    } else if (currentUserManualDistance == -jumpUserManual){
        userManualBtnLeft.classList.add('btn-disable'); 
        userManualBtnLeft.classList.remove('btn-enable');
        currentUserManualDistance = currentUserManualDistance + jumpUserManual;
        displayContent();
    } else {
        currentUserManualDistance = currentUserManualDistance + jumpUserManual;
        displayContent();
    } 
};

function nextUserManualItem() {
    userManualBtnLeft.classList.remove('btn-disable');
    userManualBtnLeft.classList.add('btn-enable');

    if(currentUserManualDistance == limitEndUserManual) {
        return;
    } else if (currentUserManualDistance == -jumpUserManual * 1){
        userManualBtnRight.classList.remove('btn-enable');
        userManualBtnRight.classList.add('btn-disable');
        currentUserManualDistance = currentUserManualDistance - jumpUserManual;
        displayContent();
    } else {
        currentUserManualDistance = currentUserManualDistance - jumpUserManual ;
        displayContent();
    };
};

userManualBtnRight.addEventListener('click',nextUserManualItem);
userManualBtnLeft.addEventListener('click',preUserManualItem);
// -------------------------

displayContent();

export default displayContent;

