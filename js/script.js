//Вход в кабинет пользователя
var btnLoginEnter = document.querySelector(".login-nav");
var panelLogin = document.querySelector(".form-lk");
var btnCloseLk = document.querySelector(".btn-close-lk");

btnLoginEnter.addEventListener("click", function (event) {
  event.preventDefault();
  panelLogin.classList.toggle("not-visible");  
});

btnCloseLk.addEventListener("click", function (event) {
  event.preventDefault();
  panelLogin.classList.toggle("not-visible");  
});

//карта
var btnMapPopup = document.querySelector(".js-btn-map");
var mapPopup = document.querySelector(".map-popup");
var btnCloseMap = document.querySelector(".btn-close-map");

btnMapPopup.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.toggle("not-visible");  
});

btnCloseMap.addEventListener("click", function (event) {
  event.preventDefault();
  mapPopup.classList.toggle("not-visible");  
});