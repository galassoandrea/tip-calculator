const inputBill = document.querySelector(".insert-bill");
const inputNum = document.querySelector(".insert-num");
const reset = document.querySelector(".btn-reset");
const radioButtons = document.querySelectorAll("input[type=radio]");
const customInput = document.querySelector(".custom-input");
const customRadioLabel = document.querySelector(".custom-radio-label");
const customRadioBtn = document.querySelector(".custom-radio");

inputBill.addEventListener("input", function () {
  calculateTip();
});

inputNum.addEventListener("input", function () {
  calculateTip();
});

for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("change", function () {
    calculateTip();
  });
}

customInput.addEventListener("change", function () {
  let percentage = customInput.value;
  customInput.classList.add("hidden");
  customRadioLabel.innerHTML = percentage + "%";
  customRadioLabel.classList.add("radio-label");
  customRadioBtn.value = percentage;
  customRadioBtn.checked = true;
  calculateTip();
});

reset.addEventListener("click", function () {
  resetTip();
});

function calculateTip() {
  let bill = inputBill.value;
  let numPerson = inputNum.value;
  let percentage = 0;
  let tipAmount = 0;
  let total = 0;

  if (bill.length !== 0 && numPerson.length !== 0) {
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        percentage = radioButtons[i].value;
        break;
      }
    }

    tipAmount = Math.round(((bill / numPerson) * percentage) / 100);
    total = Math.round(bill / numPerson + tipAmount);

    document.querySelectorAll(".price")[0].innerHTML = tipAmount;
    document.querySelectorAll(".price")[1].innerHTML = total;

    reset.classList.remove("btn-disabled");
    reset.disabled = false;
  }
}

function resetTip() {
  inputBill.value = null;
  inputNum.value = null;
  reset.classList.add("btn-disabled");
  reset.disabled = true;
  document.querySelectorAll(".price")[0].innerHTML = "0.00";
  document.querySelectorAll(".price")[1].innerHTML = "0.00";
}
