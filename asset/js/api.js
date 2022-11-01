const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


var locationApi = 'http://localhost:3000/locationlist';
var promotionApi = 'http://localhost:3000/promotion';
var suggestApi = 'http://localhost:3000/suggest';
var discoverApi = 'http://localhost:3000/discover';
var userManualApi = 'http://localhost:3000/user-manual';

function callApi() {
    getLocation(renderLocation);
    getPromotion(renderPromotion);
    getSuggest(renderSuggest);
    getDiscover(renderDiscover);
    getUserManual(renderUserManual);
};



// Location 
function getLocation(callback) {
    fetch(locationApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
};


function renderLocation(locations) {
    let listLocation = document.querySelector('.content__location--list');
    let htmls = locations.map(function(locationItem) {
        return `
                <div class="content__location--item">
                    <a href="" class="content__location--link">
                        <img src= ${locationItem.url} alt="" class="content__location--img">
                        <div class="content__location--img__name">
                            <h4 class="content__location--img__title">${locationItem.location}</h4>
                            <p class="content__location--img__desc">
                                <b>${locationItem.amount}</b> 
                                Chỗ ở
                            </p>
                        </div>
                    </a>
                </div>
            `;
    });
    listLocation.innerHTML = htmls.join('');
};



// ---------------------




// promotionApi 
function getPromotion(callback) {
    fetch(promotionApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
};

function renderPromotion(promotions) {
    let listPromotion = document.querySelector('.content__promotion--list');
    let htmls = promotions.map(function(promotionItem) {
        return `
                <div class="col l-4 m-6 c-12">
                    <div class="content__promotion--item">
                        <a href="" class="content__promotion--link">
                            <img src=${promotionItem.url} alt="" class="content__promotion--img">
                        </a>
                    </div>
                </div>    
            `;
    });
    listPromotion.innerHTML = htmls.join('');
};
// ---------------------

// suggestApi 
function getSuggest(callback) {
    fetch(suggestApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
};

function renderSuggest(suggests) {
    let listsuggest = document.querySelector('.content__suggest--list');
    let htmls = suggests.map(function(suggestItem) {
        return `
                <div class="content__suggest--item">
                    <a href="" class="content__suggest--link">
                        <img src=${suggestItem.url} alt="" class="content__suggest--img">
                        <div class="content__suggest--name">
                            <h4 class="content__suggest--title">${suggestItem.title}</h4>
                            <p class="content__suggest--desc">${suggestItem.description}</p>
                        </div>
                    </a>
                </div>
            `;
    });
    listsuggest.innerHTML = htmls.join('');
    
};
// ---------------------

// discoverApi 
function getDiscover(callback) {
    fetch(discoverApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
};

function renderDiscover(discovers) {
    let listDiscover = document.querySelector('.content__discover--list');
    let htmls = discovers.map(function(discoverItem) {
        return `
                <div class="content__discover--item">
                    <a href="" class="content__discover--link">
                        <img src=${discoverItem.url} alt="" class="content__discover--img">
                        <div class="content__discover--name">
                            <div class="content__discover--info-homestay">
                                <a href="" class="content__discover--info-homestay-link">${discoverItem.info}</a>
                            </div>
                            <div class="content__discover--title">
                                <a href="" class="content__discover--title-link">${discoverItem.title}</a>
                            </div>
                        </div>
                    </a>
                </div>
            `;
    });
    listDiscover.innerHTML = htmls.join('');
    
};
// ---------------------


// userManualApi 
function getUserManual(callback) {
    fetch(userManualApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback)
};

function renderUserManual(userManuals) {
    let listuserManual = document.querySelector('.content__user-manual--list');
    let htmls = userManuals.map(function(userManualItem) {
        return `
                <div class="content__user-manual--item">
                    <a href="" class="content__user-manual--link">
                        <img src=${userManualItem.url} alt="" class="content__user-manual--img">
                    </a>
                </div>
            `;
    });
    listuserManual.innerHTML = htmls.join('');
};
// ---------------------


callApi();

export default callApi;