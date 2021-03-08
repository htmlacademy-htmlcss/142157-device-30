/**
 * Poupup Feedback
 */

const buttonContacts = document.querySelector(".button--contacts");
const modalFeedback = document.querySelector(".modal-feedback-js");
const closeModalFeedback = modalFeedback.querySelector(".modal__button-close");
const feedbackForm = modalFeedback.querySelector(".feedback-form");
const inputNameFeedback = modalFeedback.querySelector(".feedback-form__input-name-js");
const inputEmailFeedback = modalFeedback.querySelector(".feedback-form__input-email-js");
const textareaFeedback = modalFeedback.querySelector(".feedback-form__textarea-js");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

buttonContacts.addEventListener("click", function (evt) {
 evt.preventDefault();
 modalFeedback.classList.add("modal-show-js");

 if (storageName) {
  inputNameFeedback.value = storageName;
  inputEmailFeedback.focus();
  inputEmailFeedback.value = storageEmail;
  textareaFeedback.focus();
 } else {
  inputNameFeedback.focus();
 }

});

closeModalFeedback.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove("modal-show-js");
  modalFeedback.classList.remove("modal-err-js");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!inputNameFeedback.value || !inputEmailFeedback.value || !textareaFeedback.value) {
    evt.preventDefault();
    modalFeedback.classList.remove("modal-err-js");
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add("modal-err-js");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", inputNameFeedback.value);
      localStorage.setItem("email", inputEmailFeedback.value);
    }
  }
});

/**
 * Poupup Map
 */

const modalMap = document.querySelector(".modal-map-js");
const linkMap = document.querySelector(".contacts__link");
const closeModalMap = modalMap.querySelector(".modal__button-close");

linkMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show-js");
});

closeModalMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show-js");
});

/**
 * Exit Modal Keydown
 */

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalFeedback.classList.contains("modal-show-js") || modalMap.classList.contains("modal-show-js")) {
      evt.preventDefault();
      modalFeedback.classList.remove("modal-show-js");
      modalFeedback.classList.remove("modal-err-js");
      modalMap.classList.remove("modal-show-js");
    }
  }
});

/**
 * Slider
 */

const sliderButtonAll = document.querySelectorAll(".slider-controls__button");
const slidersAll = document.querySelectorAll(".sliders__container");

let index = 0;

const activeSlide = function (i) {
  for (slide of slidersAll) {
    slide.classList.remove("sliders__container--current");
  }
  slidersAll[i].classList.add("sliders__container--current");
};

const activeButton = function (i) {
  for (sliderButton of sliderButtonAll) {
    sliderButton.classList.remove("slider-controls__button--active");
  }
  sliderButtonAll[i].classList.add("slider-controls__button--active");
};

const currentSlide = function (i) {
  activeSlide(i);
  activeButton(i);
};

sliderButtonAll.forEach((item, indexButton) => {
  item.addEventListener("click", function () {
    index = indexButton;
    currentSlide(index);
  })
});
