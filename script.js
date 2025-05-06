document.addEventListener("DOMContentLoaded", function () {
    // Popup animation
    document.querySelector(".popup").classList.add("show");
  
    generateCaptcha();
  });
  
  function generateCaptcha() {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("captcha-text").textContent = captcha;
  }
  
  function validateForm() {
    let username = document.getElementById("username").value.trim();
    let captchaInput = document.getElementById("captcha-input").value.trim();
    let captchaText = document.getElementById("captcha-text").textContent.trim();
  
    let valid = true;
  
    if (username === "") {
      document.getElementById("user-error").textContent = "Username cannot be blank.";
      valid = false;
    } else {
      document.getElementById("user-error").textContent = "";
    }
  
    if (captchaInput !== captchaText) {
      document.getElementById("captcha-error").textContent = "Incorrect captcha.";
      valid = false;
    } else {
      document.getElementById("captcha-error").textContent = "";
    }
  
    return valid;
  }
  