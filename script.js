const signUpBtn = document.querySelector(".signup-btn");

const signInBtn = document.querySelector(".signin-btn");

const formsWrapper = document.querySelector(".forms-wrapper");

// go to sing in by click
signUpBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formsWrapper.classList.add("change");
});

// go back to sign up by click
signInBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formsWrapper.classList.remove("change");
});