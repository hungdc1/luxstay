const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// var locationApi = 'http://localhost:3000/locationlist';
// var promotionApi = 'http://localhost:3000/promotion';
// var suggestApi = 'http://localhost:3000/suggest';
// var discoverApi = 'http://localhost:3000/discover';
// var userManualApi = 'http://localhost:3000/user-manual';

// function callApi() {
//     getLocation(renderLocation);
//     getPromotion(renderPromotion);
//     getSuggest(renderSuggest);
//     getDiscover(renderDiscover);
//     getUserManual(renderUserManual);
// };

// Location 
// function getLocation(callback) {
//     fetch(locationApi)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback);
// };


function callApi() {
    renderLocation(locationlist);
    renderPromotion(promotionlist);
    renderSuggest(suggestlist);
    renderDiscover(discoverlist);
    renderUserManual(userManuallist);
}

const  locationlist = [
    { "id": 1, "location": "Hà Nội", "amount": 15596, "url": "./asset/img/location1.png" },
    { "id": 2, "location": "TP. Hồ Chí Minh", "amount": 8654, "url": "./asset/img/location2.png" },
    { "id": 3, "location": "Vũng Tàu", "amount": 3324, "url": "./asset/img/location3.png" },
    { "id": 4, "location": "Đà Lạt", "amount": 6943, "url": "./asset/img/location4.png" },
    { "id": 5, "location": "Đà Nẵng", "amount": 3729, "url": "./asset/img/location5.png" },
    { "id": 6, "location": "Nha Trang", "amount": 2037, "url": "./asset/img/location6.png" },
    { "id": 7, "location": "Quảng Ninh", "amount": 2106, "url": "./asset/img/location7.png" },
    { "id": 8, "location": "Hội An", "amount": 704, "url": "./asset/img/location8.png" }
  ]

  const promotionlist = [
    { "id": 1, "url": "./asset/img/promotion1.jpg" },
    { "id": 2, "url": "./asset/img/promotion2.jpg" },
    { "id": 3, "url": "./asset/img/promotion3.jpg" }
  ]

  const suggestlist = [
    { "id": 1,
      "title": "Vi vu ngoại thành Hà Nội",
      "description": "Trải nghiệm không gian thoáng đãng cho chuyến đi ngay gần Hà Nội",
      "url": "./asset/img/suggest1.jpg" },

    { "id": 2,
      "title": "Vũng Tàu Biệt thự hồ bơi",
      "description": "Những căn biệt thự có hồ bơi dành cho kỳ nghỉ của bạn tại Vũng Tàu",
      "url": "./asset/img/suggest2.jpg" },

    { "id": 3,
      "title": "Hà Nội nội thành lãng mạn",
      "description": "Không gian lãng mạn dành cho cặp đôi tại trung tâm Hà Nội",
      "url": "./asset/img/suggest3.jpg" },

    { "id": 4,
      "title": "Sài Gòn cần là có ngay",
      "description": "Những căn homestay có 01 phòng ngủ tại Sài Gòn có thể đặt nhanh chóng",
      "url": "./asset/img/suggest4.jpg" },

    { "id": 5,
      "title": "Bể bơi & BBQ",
      "description": "Trải nghiệm đẳng cấp tại những căn homestay có bể bơi đẹp và khu vực BBQ ấm cúng.",
      "url": "./asset/img/suggest5.jpg" },

    { "id": 6,
      "title": "Siêu giảm giá!",
      "description": "Top chỗ ở giảm giá đến 50% từ các chủ nhà thân thiện trên Luxstay.",
      "url": "./asset/img/suggest6.jpg" },

    { "id": 7,
      "title": "Gần Trung tâm!",
      "description": "Dễ dàng di chuyển khắp nơi với top chỗ ở khu vực trung tâm thành phố Hồ Chí Minh",
      "url": "./asset/img/suggest7.jpg" }
  ]

  const discoverlist = [
    { "id": 1,
      "info": "Thông tin homestay",
      "title": "5 resort hạng sang ở Việt Nam xuất hiện trên tạp chí du lịch Anh",
      "url": "./asset/img/discover1.jpg" },

    { "id": 2,
      "info": "Thông tin homestay",
      "title": "Du lịch Cần Thơ nhất định phải ghé thăm những địa điểm này",
      "url": "./asset/img/discover2.jpg" },

    { "id": 3,
      "info": "TP. Hồ Chí Minh",
      "title": "Tuần lễ “Tôi yêu bánh mì Sài Gòn” chính thức diễn ra từ ngày 24/3",
      "url": "./asset/img/discover3.jpg" },

    { "id": 4,
      "info": "Thông tin homestay",
      "title": "Trải nghiệm thú vị ở sở thú Zoodoo Đà Lạt",
      "url": "./asset/img/discover4.jpg" },

    { "id": 5,
      "info": "Hội An",
      "title": "Hội An sẽ lập chốt quản lý du khách đeo khẩu trang khi vào thành phố",
      "url": "./asset/img/discover5.jpg" },

    { "id": 6,
      "info": "Thông tin homestay",
      "title": "Mức phí cách ly tại khách sạn, resort ở Việt Nam cho du khách có nhu cầu",
      "url": "./asset/img/discover6.jpg" },

    { "id": 7,
      "info": "Thông tin homestay",
      "title": "Thủ đô Hà Nội nằm trong danh sách những thành phố đẹp nhất thế giới",
      "url": "./asset/img/discover7.png" },

    { "id": 8,
      "info": "Thông tin homestay",
      "title": "Cách đặt phòng tại Đà Lạt cho chuyến du lịch tiết kiệm nhất",
      "url": "./asset/img/discover8.jpg" },

    { "id": 9,
      "info": "Thông tin homestay",
      "title": "Cách lập kế hoạch tài chính cho chuyến du lịch hoàn hảo",
      "url": "./asset/img/discover9.jpg" },

    { "id": 10,
      "info": "Vũng Tàu",
      "title": "List homestay Vũng Tàu cho nhóm đông người, vui cười hưởng giá tốt!",
      "url": "./asset/img/discover10.jpg" },

    { "id": 11,
      "info": "Vũng Tàu",
      "title": "Xuất hiện thế giới đảo lộn ở Vũng Tàu, bạn sẵn sàng thử chưa?",
      "url": "./asset/img/discover11.jpg" },

    { "id": 12,
      "info": "TP. Hồ Chí Minh",
      "title": "Những điều nên tuân thủ trước khi trả phòng homestay để lợi cả đôi đường",
      "url": "./asset/img/discover12.jpg" },

    { "id": 13,
      "info": "Thông tin hữu ích dành cho chủ nhà (For host)",
      "title": "Lakeside villa garden: điểm dừng chân mới toanh của giới trẻ Hà thành",
      "url": "./asset/img/discover13.jpg" },

    { "id": 14,
      "info": "Thông tin homestay",
      "title": "Những điều kiêng kị khi ở homestay dưới góc nhìn độc & lạ của Tạ Quốc Kỳ Nam",
      "url": "./asset/img/discover14.jpg" },

    { "id": 15,
      "info": "Thông tin homestay",
      "title": "Tại sao gọi Đà Lạt là thành phố tình yêu?",
      "url": "./asset/img/discover15.jpeg" }
  ]

  const userManuallist = [
    { "id": 1, "url": "./asset/img/user-manual1.jpg" },
    { "id": 2, "url": "./asset/img/user-manual2.jpg" },
    { "id": 3, "url": "./asset/img/user-manual3.jpg" },
    { "id": 4, "url": "./asset/img/user-manual4.jpg" },
    { "id": 5, "url": "./asset/img/user-manual5.jpg" }
  ]

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
// function getPromotion(callback) {
//     fetch(promotionApi)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback)
// };

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
// function getSuggest(callback) {
//     fetch(suggestApi)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback)
// };

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
// function getDiscover(callback) {
//     fetch(discoverApi)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback)
// };

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
// function getUserManual(callback) {
//     fetch(userManualApi)
//         .then(function(response) {
//             return response.json();
//         })
//         .then(callback)
// };

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