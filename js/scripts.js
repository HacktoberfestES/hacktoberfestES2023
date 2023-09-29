/*!
* Start Bootstrap - Agency v7.0.5 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

/*     // Countdown

    // Set the date we're counting down to
    var countDownDate = new Date("Oct 1, 2021 00:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
    }
    }, 1000);

 */    
    //Agenda - collapse

    const now = new Date();
    const allItems = document.querySelectorAll(".item-agenda");

    for (item of allItems){
        let title = item.querySelector(".title");
        let collapsible = item.querySelector(title.getAttribute("href"));
        let date = new Date (item.querySelector("time").getAttribute("datetime"));
        let angleRight = item.querySelector(".plus");
        let angleDown = item.querySelector(".minus");

        console.log(date);
        console.log(now);

        if (date < now){
            collapsible.className = "collapse";
            angleDown.style.display = "none";
        } else {
            collapsible.className = "frame";
            angleRight.style.display = "none";
        }

        title.addEventListener("click", function(){

            if(collapsible.getAttribute("class")=="collapse"){
                collapsible.className = "frame";
                angleRight.style.display = "none";
                angleDown.style.display = "inline";    
            } else {
                collapsible.className = "collapse";
                angleDown.style.display = "none";
                angleRight.style.display = "inline"; 
            }

        });    
    }
   
});
