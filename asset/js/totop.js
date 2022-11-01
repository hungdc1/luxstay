
let scrollBtn = document.querySelector('.to-top')

function scrollBtnDisplay () {
    window.scrollY > window.innerHeight
    ? scrollBtn.classList.add("show")
    : scrollBtn.classList.remove("show");
}

function scrollWindow () {  
    if (window.scrollY != 0) {
        setTimeout(function () {
            window.scrollTo(0, window.scrollY - 30);
            scrollWindow();
        }, 10);
    };
};

function toTop () {
    window.addEventListener("scroll", scrollBtnDisplay);
    scrollBtn.addEventListener("click", scrollWindow);
};

toTop();

export default toTop;



