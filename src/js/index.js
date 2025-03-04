import {
  add,
  clearInput,
  nameValidation,
  playSound,
  print,
  render,
  show,
  prorityValidation,
} from "./functions.js";

document.addEventListener("DOMContentLoaded", async function () {
  const nameInput = document.querySelector("#name-input");
  const prioritySelect = document.querySelector(".prority-select");
  const getTicketBtn = document.querySelector(".get-ticket-btn");
  const warningCustomerBtn = document.querySelector(".warning-customer-btn");
  const nextCustomerBtn = document.querySelector(".next-customer-btn");
  const showCustomerTurn = document.querySelector(".show-customer-turn");
  const cardGroup = document.querySelector(".card-group");
  let notificationSound = new Audio("./assets/sound/bell.wav");

  show(cardGroup);

  nameInput.addEventListener("input", function () {
    const nameValue = this.value.trim();
    const priorityValue = prioritySelect.value.trim();

    if (!nameValidation(nameValue) || !prorityValidation(priorityValue)) {
      nameInput.classList.add("is-invalid");
      nameInput.classList.remove("is-valid");
      return;
    }

    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
  });

  prioritySelect.addEventListener("input", function () {
    const nameValue = nameInput.value.trim();
    const priorityValue = this.value.trim();
    if (!nameValidation(nameValue) || !prorityValidation(priorityValue)) {
      nameInput.classList.add("is-invalid");
      nameInput.classList.remove("is-valid");
      return;
    }

    nameInput.classList.add("is-valid");
    nameInput.classList.remove("is-invalid");
  });

  getTicketBtn.addEventListener("click", () => {
    const nameValue = nameInput.value.trim();
    const priorityValue = prioritySelect.value;

    if (!nameValidation(nameValue) || !prorityValidation(priorityValue)) {
      nameInput.classList.add("is-invalid");
      nameInput.classList.remove("is-valid");
      return;
    }

    const newQueue = add(nameValue, priorityValue);
    print(newQueue.id, newQueue.name, priorityValue);

    clearInput(nameInput, prioritySelect);
  });

  warningCustomerBtn.addEventListener("click", () => {
    let data = JSON.parse(localStorage.getItem("queue-data")) || [];

    let currentCustomer = data[0];

    if (
      (data.length === 1 && currentCustomer.lives === 0) ||
      data.length === 0
    ) {
      data.shift();

      showCustomerTurn.innerHTML = `  
    <div class="alert alert alert-secondary show-customer-turn"
      role="alert">
      Tidak ada kustomer yang sedang menunggu
    </div>`;

      localStorage.setItem("queue-data", JSON.stringify(data));

      show();

      return;
    }

    if (currentCustomer.lives === 0) {
      data.shift();

      currentCustomer = data[0];
    }

    render(currentCustomer, showCustomerTurn);

    show();

    currentCustomer.lives -= 1;

    playSound(notificationSound);

    localStorage.setItem("queue-data", JSON.stringify(data));
  });
});
