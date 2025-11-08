// ============= top search icon code ================= //
function topserachicon() {
    let topSrctoggle = document.querySelector("#topSrctoggle");
    let topSrc = document.querySelector("#topSrc");
    let topsrcpopremove = document.querySelector("#topsrcpopremove");

    topSrctoggle.addEventListener('click', (e) => {
        e.preventDefault();
        topSrc.classList.add('active');

    });
    topsrcpopremove.addEventListener('click', (e) => {
        e.preventDefault();
        topSrc.classList.remove('active');
    });

}
topserachicon();

// ============== responsive navber code ============== //
function navbertoggle() {
    let navtoggle = document.querySelector("#navToggle");
    let navtoggleIcon = document.querySelector("#navToggle >i");
    let ressidemnu = document.querySelector("#resSidemnu");
    let topberResponsive = document.querySelector("#topberResponsive");

    navtoggle.addEventListener("click", function(e) {
        e.preventDefault();
        ressidemnu.classList.toggle("active");
        topberResponsive.classList.toggle("active");
        navtoggleIcon.classList.toggle("fa-times");
    });
}
navbertoggle();


// ========= navber responsive search code ========= //
function searchClose() {
    let searchbar = document.querySelector("#searchbar");
    let topicsrcSec = document.querySelector("#topicsrcSec");
    let srcpopremove = document.querySelector("#srcpopremove");
    searchbar.addEventListener("click", function(e) {
        e.preventDefault();
        topicsrcSec.style.visibility = "visible";
    });
    srcpopremove.addEventListener("click", function(e) {
        e.preventDefault();
        topicsrcSec.style.visibility = "hidden";
    });
}
searchClose();



// ========== hero section owl-carosuel code ========= //
function heroOwl() {
    $('.heroOwl').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 4,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
}
heroOwl();



// ========== hiphop owl-carosuel code ========= //
function hipHopOwl() {
    $('.hiphop').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 4,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })
}
hipHopOwl();


// ==========footer owlCarousel code=========== //
function footerOwl() {
    $('.footerOwl').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 4,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })
}
footerOwl();



// =========== post page hero owl slider ============= //
function phsldr() {
    $('.phsldr').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 1000,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    })
}
phsldr();



// ==========stickyNavBer code=========== //
function stickyNavBer() {
    let stickyNav = document.querySelector("#stickyNav");
    let navberWrapper = document.querySelector("#navberWrapper");
    window.addEventListener("scroll", () => {
        let scrollValue = Math.ceil(scrollY);
        if (scrollValue >= 200) {
            stickyNav.style.borderBottom = "2px solid #000";
            navberWrapper.style.borderBottom = "0px solid #000";
        } else {
            stickyNav.style.borderBottom = "";
            navberWrapper.style.borderBottom = "2px solid #000";
        }
    });
}
stickyNavBer();



// ==========gameReviewEndSec code=========== //
function gameReviewEndSec() {
    var gameReviewEndSec = document.querySelector("#gameReviewEndSec");
    window.addEventListener("scroll", () => {
        let scrollValue = Math.ceil(scrollY);
        // console.log(scrollValue);
        if (scrollValue >= 3020 && scrollValue <= 4540) {
            gameReviewEndSec.classList.add("positionClass");
        } else {
            gameReviewEndSec.classList.remove("positionClass");
        }
    });

}
gameReviewEndSec();


// ==========glbStickyPart code=========== //
function glbStickyPart() {
    var glbStickyPart = document.querySelector("#glbStickyPart");
    window.addEventListener('scroll', () => {
        let scrollValue = Math.ceil(scrollY);
        // console.log(scrollValue);
        if (scrollValue >= 5900 && scrollValue <= 7932) {
            glbStickyPart.classList.add("positionClass");
        } else {
            glbStickyPart.classList.remove("positionClass");
        }

    });
}
glbStickyPart();


// ==========categoryStickyPart code=========== //
function categoryStickyPart() {
    var categoryStickyPart = document.querySelector("#categoryStickyPart");
    if (!categoryStickyPart) {
        return;
    }

    function updateStickyState() {
        if (window.innerWidth >= 992) {
            categoryStickyPart.classList.add("postpositionClass");
        } else {
            categoryStickyPart.classList.remove("postpositionClass");
        }
    }

    updateStickyState();
    window.addEventListener('resize', updateStickyState);
}
categoryStickyPart();



// =============== post page postStickyWidget code ================ //
function postStickySec() {
    var postStickyWidget = document.querySelector("#postStickyWidget");
    window.addEventListener('scroll', () => {
        let scrollValue = Math.ceil(scrollY);
        // console.log(scrollValue);
        if (scrollValue >= 2664 && scrollValue <= 4643) {
            postStickyWidget.classList.add('active');
        } else {

            postStickyWidget.classList.remove("active");
        }
    });
}
postStickySec();