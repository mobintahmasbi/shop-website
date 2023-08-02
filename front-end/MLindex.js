const userName = document.getElementById("userNameInput");
const password = document.getElementById("passwordInput");
const phoneNumber = document.getElementById("phoneNumberInput");
const loginButton = document.getElementById("loginButton");
console.dir(userName);
function checkInputs(element) {
  let mailiciousKeyWord = ["'", "-", "=", "+", ";", '"', "%", "#", ".", ","];
  let input = element.value;
  let bol = true;
  mailiciousKeyWord.forEach((word) => {
    if (input.includes(word)) {
      bol = false;
    }
  });
  return bol;
}

function validate() {
  let counter = 0;
  let errors = [];
  if (userName.value.length >= 8 && userName.value.length < 25) {
    if (checkInputs(userName)) {
      counter++;
    } else {
      errors.push([userName, "لطفا از علامت های غیر معمول استفاده نکنید"]);
    }
  } else {
    errors.push([
      userName,
      "تعداد کاراکتر های مورد استفاده باید بین 8 الی 25 کلمه باشد",
    ]);
  }
  if (password.value.length >= 8 && password.value.length < 25) {
    if (checkInputs(password)) {
      counter++;
    } else {
      errors.push([password, "لطفا از علامت های غیر معمول استفاده نکنید"]);
    }
  } else {
    errors.push([
      password,
      "تعداد کاراکتر های مورد استفاده باید بین 8 الی 25 کلمه باشد",
    ]);
  }
  if (phoneNumber.value.length === 11) {
    if (checkInputs(phoneNumber)) {
      counter++;
    } else {
      errors.push([phoneNumber, "لطفا از علامت های غیر معمول استفاده نکنید"]);
    }
  } else {
    errors.push([
      phoneNumber,
      "شماره تلفن باید دارای 11 شماره باشد",
    ]);
  }
  
  return errors;
}

function clearinvalidfeedbacks(){
  userName.nextElementSibling.style.display = "none";
  password.nextElementSibling.style.display = "none";
  phoneNumber.nextElementSibling.style.display = "none";
}

loginButton.addEventListener("click", (e) => {
  clearinvalidfeedbacks()
  let validations = validate()
  if (validations.length > 0) {
    validations.forEach((v) => {
      let el = v[0].nextElementSibling
      el.innerText = v[1]
      el.style.display = "flex"
    })
  }
});
