window.addEventListener("load", modal);
const get = document.getElementById.bind(document);
const query = document.querySelector.bind(document);
navToggler();
// detect scrolling
window.addEventListener("scroll", function() {
  stickyNav();
  backToTop();
});

function modal() {
  let modalRoot = get("modal-root");
  let button = get("sushi-btn");
  let modal = query(".modal");
  let modalExit = get("modal-exit");
  let submitForm = get("submit-form");
  modalRoot.addEventListener("click", rootClick);
  button.addEventListener("click", openModal);
  modal.addEventListener("click", modalClick);
  modalExit.addEventListener("click", exitModal);
  submitForm.addEventListener("click", submitClick);

  function rootClick() {
    modalRoot.classList.remove("visible");
    document.body.style.overflow = "auto";
  }
  function openModal() {
    modalRoot.classList.add("visible");
    document.body.style.overflow = "hidden";
  }
  function modalClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  }

  function exitModal() {
    console.log("clicked");
    rootClick();
  }

  function submitClick() {
    submitForm.disabled = true;
    if (submitForm.disabled) {
      submitForm.remove();
      let formButton = document.querySelector(".form-button");
      let button = document.createElement("button");
      button.type = "button";
      button.classList.add("button-submitted");
      button.disabled = true;
      let checkButton = document.createElement("i");
      checkButton.classList.add("fas");
      checkButton.className += " fa-check";
      button.appendChild(checkButton);
      formButton.appendChild(button);
    }
    //change height of the image
    document.querySelector(".modal-img").style.height = "109%";

    // generate code
    let code = Math.random()
      .toString(36)
      .slice(2);
    let showCode = document.querySelector(".show-code");
    let displayRandomCode = document.createElement("p");
    displayRandomCode.innerHTML = code;
    displayRandomCode.classList.add("code");

    let displayWarning = document.createElement("p");
    displayWarning.innerHTML = "(Redeem code at checkout)";
    displayWarning.classList.add("displayWarning");
    displayWarning.className += " text-secondary";
    showCode.appendChild(displayRandomCode);
    showCode.appendChild(displayWarning);
  }
}

// navbar toggler
function navToggler() {
  let toggle = query(".navbar-toggler");
  toggle.addEventListener("click", function() {
    if (toggle.classList.contains("change")) {
      toggle.classList.remove("change");
    } else {
      toggle.classList.add("change");
    }
  });
}

// sticky navbar less padding
function stickyNav() {
  let position = window.scrollY;

  if (position >= 958) {
    let navbar = document.querySelector(".navbar");
    navbar.classList.add("navbar-background");
    navbar.classList.add("fixed-top");
  } else {
    let navbar = document.querySelector(".navbar");
    navbar.classList.remove("navbar-background");
    navbar.classList.remove("fixed-top");
  }
}
function backToTop() {
  let position = window.scrollY;
  console.log(position);

  let backToTop = document.querySelector("#back-to-top");

  if (position >= 718) {
    backToTop.classList.add("scrollTop");
  } else {
    backToTop.classList.remove("scrollTop");
  }
}

// smooth scrolling

$(document).ready(function() {
  //sticky navbar less padding
  $(window).scroll(function() {
    let position = $(this).scrollTop();
  });

  //magnific popup
  $(".parent-container").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });
});
