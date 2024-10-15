const helpButton = document.querySelector(".help__button");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");

helpButton.addEventListener("click", () => {

  const isUsernameValid = usernameInput.value.trim() !== "";
  const isEmailValid = validateEmail(emailInput.value.trim());

  hideErrorMessage(usernameInput);
  hideErrorMessage(emailInput);

  if (!isUsernameValid) {
    usernameInput.style.border = "1px solid red";
    showErrorMessage(usernameInput, "Заполните имя!");
  } else {
    usernameInput.style.border = "";
  }

  if (!isEmailValid) {
    emailInput.style.border = "1px solid red";
    showErrorMessage(emailInput, "Введите Email!");
  } else {
    emailInput.style.border = "";
  }

  if (isUsernameValid && isEmailValid) {
    usernameInput.value = "";
    emailInput.value = "";
    alert("Данные отправлены!"); 
   }
});

function showErrorMessage(inputField, message) {
  const errorSpan = document.createElement("span");
  errorSpan.textContent = message;
  errorSpan.style.color = "red";
  errorSpan.style.display = "block";
  errorSpan.style.marginTop = "-13px";
  errorSpan.style.marginLeft = "20px";
  errorSpan.style.marginBottom = "2px";
  errorSpan.style.fontSize = "10px";
  inputField.parentNode.insertBefore(errorSpan, inputField);
}

function hideErrorMessage(inputField) {
  const errorSpan = inputField.parentNode.querySelector("span");
  if (errorSpan) {
    errorSpan.remove();
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
