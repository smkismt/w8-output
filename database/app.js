const $button = document.getElementById("js-login-button");

$button.addEventListener("click", () => {
  const $email = document.getElementById("js-login-email").value;
  const $password = document.getElementById("js-login-password").value;
  localStorage.setItem("email", $email);
  localStorage.setItem("password", $password);
});
