const signupBtn = document.getElementById("signup");
const loginForm = document.getElementById("login-form");


signupBtn.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/signup/signup.html";
});


loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:5500/login/succesful.html";
});
