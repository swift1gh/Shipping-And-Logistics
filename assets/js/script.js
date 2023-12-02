'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  });
}




/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



// Scroll to the section when the page loads
document.addEventListener('DOMContentLoaded', function () {
  const shipmentDetailsSection = document.getElementById('shipmentDetailsSection');

  if (shipmentDetailsSection) {
    shipmentDetailsSection.scrollIntoView({
      behavior: 'smooth'
    });
  }
});






/*TRACKING CODE VERIFICATION*/

document.getElementById('submitButton').addEventListener('click', function(){
  //Get the tracking code
  let trackingCode = document.getElementById('tracking-code').value;

  //Check if the code is correct
  if(trackingCode.toUpperCase() === 'N3959NN245JK424'){
    window.location.href = 'ship-index.html';
  }
  else{
    document.getElementById('error-message').innerText = "Error! Invalid Tracking Code";
  }
})

















