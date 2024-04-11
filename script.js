// script.js

document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("home-link");
    const aboutLink = document.getElementById("about-link");
    const restaurantsLink = document.getElementById("restaurants-link");
    const signUpLink = document.getElementById("signup-link");
    const contactLink = document.getElementById("contact-link");
  
    homeLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "#home";
    });
  
    aboutLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "#about";
    });
  
    restaurantsLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "#restaurants";
    });
  
    signUpLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "#signup";
    });
  
    contactLink.addEventListener("click", function(event) {
      event.preventDefault();
      window.location.href = "#contact";
    });
  });
  