// input elements are selected here
const userName = document.getElementById("userNameInput");
const password = document.getElementById("passwordInput");
const email = document.getElementById("emailInput");
const confirmCode = document.getElementById("confirmCodeInput");
// button elements are selected here
const sendingCodeButton = document.getElementById("sendingCodeButton");
const loginButton = document.getElementById("loginButton");

// check inputs elements for preventing sql injection
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
  clearspecificinvalidfeedback(userName, "userName");
});

password.addEventListener("blur", () => {
  clearspecificinvalidfeedback(password, "password");
});

email.addEventListener("blur", () => {
  clearspecificinvalidfeedback(email, "email");
});

//check a specific input value for checking validity if it's valid then clear the error message
function clearspecificinvalidfeedback(el, elName) {
  let validation = validate();
  let bol = true;
  validation.forEach((v) => {
    if (v[2] === elName) {
      bol = false;
    }
  });
  if (bol) {
    el.nextElementSibling.style.display = "none";
  }
}

// vaalidate the length of the inputs value and call checkInputs function for every input
function validate() {
  let counter = 0;
  let errors = [];
  if (userName.value.length >= 8 && userName.value.length < 25) {
    if (checkInputs(userName)) {
      counter++;
    } else {
      errors.push([
        userName,
        "لطفا از علامت های غیر معمول استفاده نکنید",
        "userName",
      ]);
    }
  } else {
    errors.push([
      userName,
      "تعداد کاراکتر های مورد استفاده باید بین 8 الی 25 کلمه باشد",
      "userName",
    ]);
  }
  if (password.value.length >= 8 && password.value.length < 25) {
    if (checkInputs(password)) {
      counter++;
    } else {
      errors.push([
        password,
        "لطفا از علامت های غیر معمول استفاده نکنید",
        "password",
      ]);
    }
  } else {
    errors.push([
      password,
      "تعداد کاراکتر های مورد استفاده باید بین 8 الی 25 کلمه باشد",
      "password",
    ]);
  }
  if (email.value.length >= 8) {
    if (checkInputs(email)) {
      counter++;
    } else {
      errors.push([
        email,
        "لطفا از علامت های غیر معمول استفاده نکنید",
        "email",
      ]);
    }
  } else {
    errors.push([
      email,
      "تعداد کاراکتر های مورد استفاده باید بین 8 الی 25 کلمه باشد",
      "email",
    ]);
  }

  return errors;
}

function clearinvalidfeedbacks() {
  userName.nextElementSibling.style.display = "none";
  password.nextElementSibling.style.display = "none";
  email.nextElementSibling.style.display = "none";
}

function replaceElementClassname(els, removableClassname, newClassname) {
  els.forEach((el) => {
    el.parentElement.classList.remove(removableClassname);
    el.parentElement.classList.add(newClassname);
  });
}

sendingCodeButton.addEventListener("click", (e) => {
  clearinvalidfeedbacks();
  let validations = validate();
  if (validations.length > 0) {
    validations.forEach((v) => {
      let el = v[0].nextElementSibling;
      el.innerText = v[1];
      el.style.display = "flex";
    });
  } else {
    replaceElementClassname([password, email, userName, sendingCodeButton], "d-flex", "d-none")
    replaceElementClassname([confirmCode, loginButton], "d-none", "d-flex")
  }
});
