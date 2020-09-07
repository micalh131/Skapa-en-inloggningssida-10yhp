let nameInput = document.getElementById("name-input"),
  passwordInput = document.getElementById("password-input"),
  loginButton = document.getElementById("login-button");
inlogDiv = document.getElementById("inlog-div");

// Sets the username and password
let nameInlog = "test",
  passwordInlog = 1234;

// Hide inloggpage
// Append a button so user can log out
// If user logs out localstorage turns empty
function openWin() {
  inlogDiv.style.display = "none";

  var x = document.createElement("P");
  var t = document.createTextNode("VÄLKOMMEN!");
  x.appendChild(t);
  document.body.appendChild(x);

  var logoutButton = document.createElement("button");
  var tButton = document.createTextNode("logga ut");
  logoutButton.appendChild(tButton);
  document.body.appendChild(logoutButton);

  logoutButton.addEventListener("click", function () {
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    location.reload();
  });
}

// If user types in the right username and password they log in
// If user insert something else they will meet an error page
loginButton.addEventListener("click", function () {
  let inpName = nameInput.value;
  let inpPassword = passwordInput.value;

  if (nameInput.value == nameInlog && passwordInput.value == passwordInlog) {
    openWin();

    localStorage.setItem("name", inpName);
    localStorage.setItem("password", inpPassword);
  } else {
    inlogDiv.style.display = "none";

    var x = document.createElement("P");
    var t = document.createTextNode("ERROR");
    x.appendChild(t);
    document.body.appendChild(x);
  }
});

// If localstorage is not empty the user will still be logged in
if (
  localStorage.getItem("name") == nameInlog &&
  localStorage.getItem("password") == passwordInlog
) {
  openWin();
}
