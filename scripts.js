document.addEventListener("DOMContentLoaded", function() {
    // Register Modal
    const registerBtn = document.getElementById("registerBtn");
    const registerModal = document.getElementById("registerModal");
    const registerClose = document.getElementsByClassName("close")[0];

    registerBtn.onclick = function() {
        registerModal.style.display = "block";
    }

    registerClose.onclick = function() {
        registerModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === registerModal) {
            registerModal.style.display = "none";
        }
    }

    // Login Modal
    const loginBtn = document.getElementById("loginBtn");
    const loginModal = document.getElementById("loginModal");
    const loginClose = document.getElementsByClassName("close")[1];

    loginBtn.onclick = function() {
        loginModal.style.display = "block";
    }

    loginClose.onclick = function() {
        loginModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === loginModal) {
            loginModal.style.display = "none";
        }
    }
});