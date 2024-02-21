var overlay = document.getElementById("overlay");



var openSignUpButton = document.getElementById("slide-left-button");
var openSignInButton = document.getElementById("slide-right-button");



var leftText = document.getElementById("sign-in");
var rightText = document.getElementById("sign-up");



var accountForm = document.getElementById("sign-in-info")
var signinForm = document.getElementById("sign-up-info");



openSignUp = () =>{
 
  

  leftText.classList.remove("overlay-text-left-animation-out");
  overlay.classList.remove("open-sign-in");
  rightText.classList.remove("overlay-text-right-animation");

  


  accountForm.className += " form-left-slide-out"
  rightText.className += " overlay-text-right-animation-out";
  overlay.className += " open-sign-up";
  leftText.className += " overlay-text-left-animation";

  

  setTimeout(function(){
    accountForm.classList.remove("form-left-slide-in");
    accountForm.style.display = "none";
    accountForm.classList.remove("form-left-slide-out");
  }, 700);
  


  setTimeout(function(){
    signinForm.style.display = "flex";
    signinForm.classList += " form-right-slide-in";
  }, 200);
}



openSignIn = () =>{
 
  
  leftText.classList.remove("overlay-text-left-animation");
  overlay.classList.remove("open-sign-up");
  rightText.classList.remove("overlay-text-right-animation-out");

  

  signinForm.classList += " form-right-slide-out";
  leftText.className += " overlay-text-left-animation-out";
  overlay.className += " open-sign-in";
  rightText.className += " overlay-text-right-animation";
  
  
  setTimeout(function(){
    signinForm.classList.remove("form-right-slide-in")
    signinForm.style.display = "none";
    signinForm.classList.remove("form-right-slide-out")
  },700);

  
  setTimeout(function(){
    accountForm.style.display = "flex";
    accountForm.classList += " form-left-slide-in";
  },200);
}



openSignUpButton.addEventListener("click", openSignUp, false);
openSignInButton.addEventListener("click", openSignIn, false);


const iti = intlTelInput(input);
console.log(iti)



  
  window.intlTelInput(input, {
    initialCountry: "auto",
    geoIpLookup: callback => {
      fetch('https://api64.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const userIp = data.ip;
    fetch(`https://ipapi.co/${userIp}/json`)
      .then(response => response.json())
      .then(data => {
        const countryCode = data.country_code;
        console.log(countryCode);
        iti.setCountry(countryCode);
        iti.defaultCountry = countryCode.toLowerCase()
        callback(countryCode)
        
      })
      .catch(error => {
        console.error('Error fetching additional information:', error);
      });
  })
  .catch(error => {
    console.error('Error fetching user IP:', error);
  });
    },
    utilsScript: "/intl-tel-input/js/utils.js?1707906286003"
  });


  document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('sign-up-form').addEventListener('submit', function(event) {

      event.preventDefault();

    
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const phone = iti.getNumber();
      const password = document.getElementById('password').value;

      // Log the details
      console.log('Username:', username);
      console.log('Email:', email);
      console.log('Phone:', phone);
      console.log('Password:', password);
     
      

      // You can perform additional actions here, such as sending the data to a server using fetch
    });
  });

  input.addEventListener("countrychange", function() {
    // do something with iti.getSelectedCountryData()
    console.log(iti.getNumber())
  });