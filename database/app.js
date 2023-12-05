// ページを開いた際にlocalStorageにメールかパスワードがあれば代入
window.addEventListener("load", () => {
  const localStorageEmail = localStorage.getItem("email");
  const localStoragePassword = localStorage.getItem("password");

  // htmlのメールとパスワードの入れ物を準備
  let $emailInput = document.getElementById("js-login-email");
  let $passwordInput = document.getElementById("js-login-password");

  // メールのデーターが代入されていればhtmlに反映、なければ空欄を維持
  if (localStorageEmail) {
    $emailInput.value = localStorageEmail;
  }
  // パスワードのデーターが代入されていればhtmlに反映、なければ空欄を維持
  if (localStoragePassword) {
    $passwordInput.value = localStoragePassword;
  }
});

// htmlのボタンの入れ物を準備
const $button = document.getElementById("js-login-button");

// ボタンがクリックされたらメールとパスワードをlocalStorageに保存
$button.addEventListener("click", () => {
  const $email = document.getElementById("js-login-email").value;
  const $password = document.getElementById("js-login-password").value;
  localStorage.setItem("email", $email);
  localStorage.setItem("password", $password);
});

// localStorageの内容を削除
// localStorage.clear();
