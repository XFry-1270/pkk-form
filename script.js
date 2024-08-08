const scriptURL =
  "https://script.google.com/macros/s/AKfycbxVkeq-RdeZGWeXcFMuYZQX6mZZKLEh6X1sxgWTwdt45zE7yf1eyD5ZeM33oSMJMUB2/exec";

const form = document.forms["pkk-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
var button = document.querySelector("button");

button.onclick = function () {
  location.href = "index.html";
};
