const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYC";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]><?-=";

const alChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += upperCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += alChars[Math.floor(Math.random() * alChars.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  navigator.clipboard
    .writeText(passwordBox.value)
    .then(() => alert("Password copied!"))
    .catch(() => alert("Copy failed"));
}
