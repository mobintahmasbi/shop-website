const userName = document.getElementById("userNameInput");
const password = document.getElementById("passwordInput");
const phoneNumber = document.getElementById("phoneNumberInput");
const loginButton = document.getElementById("loginButton");

function checkInputs(element) {
    let mailiciousKeyWord = ["'", "-", "=", "+", ";", '"', '%', "#", ".", ","]
    let input = element.value
    let bol = true
    mailiciousKeyWord.forEach((word) => {
        if (input.includes(word)){
            bol = false
        }
    })
    return bol

}

function validate() {
  let counter = 0
  if (userName.value.length >= 8 && userName.value.length < 25) {
    if(checkInputs(userName)){
      counter++
    }
  }
  if (password.value.length >= 8 && password.value.length < 25) {
    if(checkInputs(password)){
      counter++
    }
  }
  if (phoneNumber.value.length === 11) {
    if(checkInputs(phoneNumber)){
      counter++
    }
  }
  return 3 === counter;
}

loginButton.addEventListener("click", (e) => {
  console.log(validate());
});
