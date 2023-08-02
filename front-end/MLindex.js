const userName = document.getElementById("userNameInput");
const password = document.getElementById("passwordInput");
const phoneNumber = document.getElementById("phoneNumberInput");
const loginButton = document.getElementById("loginButton");

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

userName.addEventListener("blur", () => {
  clearspecificinvalidfeedback(userName, 'userName')
})

password.addEventListener("blur", () => {
  clearspecificinvalidfeedback(password, 'password')
})

phoneNumber.addEventListener("blur", () => {
  clearspecificinvalidfeedback(phoneNumber, 'phoneNumber')
})

function clearspecificinvalidfeedback(el, elName) {
  let validation = validate()
  let bol = true;
  validation.forEach((v) => {
    if (v[2] === elName) {
      bol = false;
    }
  })
  if (bol) {
    el.nextElementSibling.style.display = 'none'
  }
}

function validate() {
  let counter = 0;
  let errors = [];
  if (userName.value.length >= 8 && userName.value.length < 25) {
    if (checkInputs(userName)) {
      counter++;
    } else {
      errors.push([userName, "لطفا از علامت های غیر معمول استفاده نکنید", 'userName']);
    }
  } else {
    errors.push([
      userName,
      "تعداد کاراکتر های مورد استفاده باید بین 8 الی 25 کلمه باشد",
      'userName'
    ]);
  }
  if (password.value.length >= 8 && password.value.length < 25) {
    if (checkInputs(password)) {
      counter++;
    } else {
      errors.push([password, "لطفا از علامت های غیر معمول استفاده نکنید", 'password']);
    }
  } else {
    errors.push([
      password,
      "تعداد کاراکتر های مورد استفاده باید بین 8 الی 25 کلمه باشد",
      'password'
    ]);
  }
  if (phoneNumber.value.length === 11) {
    if (checkInputs(phoneNumber)) {
      counter++;
    } else {
      errors.push([phoneNumber, "لطفا از علامت های غیر معمول استفاده نکنید", 'phoneNumber']);
    }
  } else {
    errors.push([
      phoneNumber,
      "شماره تلفن باید دارای 11 شماره باشد",
      'phoneNumber'
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
