let navLink = document.getElementsByClassName("nav-link");
let navbar = document.getElementById("navbarCollapse");
let icon_light = document.querySelector(".icon-light");
let icon_dark = document.querySelector(".icon-dark");
let icon_dark_light_Dad = document.querySelector(".iconDad");
let body = document.getElementsByClassName("body");



for (i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function () {
        console.log(navbar)
        navbar.classList.remove("show")
    })
}

/*==================== DARK LIGHT THEME ====================*/

icon_dark.addEventListener('click', function () {

    body[0].classList.add("dark");
    this.style.display = "none";
    icon_light.style.display = "block";

})
icon_light.addEventListener('click', function () {

    body[0].classList.remove("dark");
    this.style.display = "none";
    icon_dark.style.display = "block";

})


/*==================== SHOW SCROLL TOP ====================*/
const scrollTop = document.getElementById('scroll-button');
scrollTop.onclick = function () {
    window.scrollTo(0, 0)
}

function scrollTopFunction() {

    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 560) {
        scrollTop.style.visibility = "visible";
        scrollTop.style.transform = "translate(-3px,-10px)"
    } else {
        scrollTop.style.visibility = "hidden";
        scrollTop.style.transform = "translate(120px)"
    }


}
window.addEventListener('scroll', scrollTopFunction)

/*==================== activ class at navbar ====================*/

let active = document.getElementsByClassName(' liactive');
let x = document.querySelectorAll('nav li a');

function activeClass() {
    //add active class to btn
    if (active.length >= 0) {
        active[0].className = active[0].className.replace('liactive', ' ')
    }
    this.className += ' liactive ';
}
for (i = 0; i < x.length; i++) {
    x[i].addEventListener('click', activeClass)
}

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

let section = document.getElementsByClassName(" section-scroll");
let navlink=document.getElementsByClassName("nav-link")
let homeNav = document.getElementById("home-nav"),
    aboutNav = document.getElementById("about-nav"),
    servicesNav = document.getElementById("services-nav"),
    meneueNav = document.getElementById("menue-nav"),
    contactNav = document.getElementById("contact-nav");
    
    window.addEventListener('scroll', function () {
        let scrollPage = window.pageYOffset;
        let sectionTop1 = section[0].offsetTop,
            sectionTop2 = section[1].offsetTop,
            sectionTop3 = section[2].offsetTop,
            sectionTop4 = section[3].offsetTop,
            sectionTop5 = section[4].offsetTop;
            console.log(scrollY)
            console.log(sectionTop5)

        if (scrollPage >= sectionTop1 && scrollPage < sectionTop2) {
           if (active.length >= 0) {
            active[0].className = active[0].className.replace('liactive', ' ')
        }
        homeNav.className += ' liactive ';
    }
     
        if (scrollPage+100 >= sectionTop2 && scrollPage < sectionTop3) {
            
            if (active.length >= 0) {
                active[0].className = active[0].className.replace('liactive', ' ')
            }
            aboutNav.className += ' liactive ';
        
        }

        if (scrollPage+120 >= sectionTop3 && scrollPage < sectionTop4) {
            if (active.length >= 0) {
                active[0].className = active[0].className.replace('liactive', ' ')
            }
            servicesNav.className += ' liactive ';
        
        
        }
        
        if (scrollPage+100>= sectionTop4 && scrollPage-100 < sectionTop5) {
            if (active.length >= 0) {
                active[0].className = active[0].className.replace('liactive', ' ')
            }
            meneueNav.className += ' liactive ';
        
        
        }
        if (scrollPage+150 >sectionTop5) {
            if (active.length >= 0) {
                active[0].className = active[0].className.replace('liactive', ' ')
            }
            contactNav.className += ' liactive ';
        
        }
        

    });