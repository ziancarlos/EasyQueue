function print(id, name, priority = "G") {
  const receiptContent = `
    <div class="tm_container">
    <div class="tm_pos_invoice_wrap" id="tm_download_section">
      <div class="tm_pos_invoice_top">
        <div class="tm_pos_company_name">EasyQueue</div>
        <div class="tm_pos_company_address">Sistem Manajemen Antrian</div>
      </div>
      <div class="tm_pos_invoice_body">
        <div class="tm_invoice_seperator"></div>
        <div class="tm_invoice_seperator"></div>
        <ul class="tm_list">
          <li>
            <div class="tm_list_title">Date:</div>
            <div class="tm_list_desc">${new Date().toLocaleDateString(
              "en-GB"
            )}</div>
          </li>
          <li class="text-right">
            <div class="tm_list_title">Time:</div>
            <div class="tm_list_desc">${new Date().toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}</div>
          </li>
        </ul>
        <div class="tm_invoice_seperator"></div>   
        ${
          priority === "V"
            ? ` <h2>
              <b>${priority}</b>
            </h2>`
            : ""
        }
        <div class="tm_invoice_seperator"></div>
        <h3>${id}/${name}</h3>
        <div class="tm_pos_sample_text">
          <p>Thank You</p>
        </div>
      </div>
    </div>
    </div>
    `;

  // Open a new print window
  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <html>
    <head>
      <title>Print Receipt</title>
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap");
    
            *,
            ::after,
            ::before {
            box-sizing: border-box;
            }
    
            body {
            color: #666;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.4em;
            margin: 0;
            font-family: "Inter", sans-serif;
            background-color: #f5f6fa;
            }
    
            .tm_pos_invoice_wrap {
            max-width: 340px;
            margin: auto;
            padding: 30px 20px;
            background-color: #fff;
            }
    
            .tm_pos_company_logo {
            display: flex;
            justify-content: center;
            margin-bottom: 7px;
            }
    
            .tm_pos_company_logo img {
            vertical-align: middle;
            border: 0;
            max-width: 100%;
            height: auto;
            max-height: 45px;
            }
    
            .tm_pos_invoice_top {
            text-align: center;
            margin-bottom: 10px;
            }
    
            .tm_pos_invoice_heading {
            display: flex;
            justify-content: center;
            position: relative;
            text-transform: uppercase;
            font-size: 12px;
            font-weight: 500;
            margin: 10px 0;
            }
    
            .tm_pos_invoice_heading:before {
            content: "";
            position: absolute;
            height: 0;
            width: 100%;
            left: 0;
            top: 46%;
            border-top: 1px dashed #b5b5b5;
            }
    
            .tm_pos_invoice_heading span {
            display: inline-flex;
            padding: 0 5px;
            background-color: #fff;
            z-index: 1;
            font-weight: 500;
            position: relative;
            }
    
            .tm_list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-wrap: wrap;
            padding-top: 7px;
            }
    
            .tm_list li {
            display: flex;
            width: 50%;
            font-size: 14px;
            line-height: 1.2em;
            margin-bottom: 7px;
            }
    
            .text-right {
            text-align: right;
            justify-content: flex-end;
            }
    
            .tm_list_title {
            margin-right: 4px;
            }
    
            .tm_invoice_seperator {
            width: 100%;
            border-top: 1px dashed #b5b5b5;
            margin: 1px 0;
            margin-left: auto;
            }
    
            .tm_pos_invoice_table {
            width: 100%;
            line-height: 1.3em;
            }
    
            .tm_pos_invoice_table thead th {
            font-weight: 500;
            color: #111;
            text-align: left;
            padding: 12px 3px 8px;
            border-bottom: 1px dashed #b5b5b5;
            }
    
            .tm_pos_invoice_table td {
            padding: 4px;
            }
    
            .tm_pos_invoice_table tbody tr:first-child td {
            padding-top: 10px;
            }
    
            .tm_pos_invoice_table tbody tr:last-child td {
            padding-bottom: 10px;
            }
    
            .tm_pos_invoice_table th:last-child,
            .tm_pos_invoice_table td:last-child {
            text-align: right;
            padding-right: 0;
            }
    
            .tm_pos_invoice_table th:first-child,
            .tm_pos_invoice_table td:first-child {
            padding-left: 0;
            }
    
            .tm_pos_invoice_table tr {
            vertical-align: baseline;
            }
    
            .tm_bill_list {
            list-style: none;
            margin: 0;
            padding: 5px 0;
            }
    
            .tm_bill_list_in {
            display: flex;
            text-align: right;
            justify-content: space-between;
            padding: 3px 0;
            }
    
            .tm_bill_title {
            padding-right: 20px;
            }
    
            .tm_bill_value {
            width: 90px;
            }
    
            .tm_bill_value.tm_bill_focus,
            .tm_bill_title.tm_bill_focus {
            font-weight: 500;
            color: #111;
            }
    
            .tm_pos_sample_text {
            padding: 20px 0 5px;
            }
    
            .tm_pos_sample_text img {
            max-width: 100%;
            vertical-align: middle;
            }
    
            .tm_pos_sample_text p {
            text-align: center;
            margin-top: 0;
            margin-bottom: 10px;
            font-weight: 500;
            color: #111;
            font-size: 16px;
            }
    
            .tm_pos_company_name {
            font-weight: 500;
            color: #111;
            font-size: 20px;
            line-height: 1.2em;
            }
            /* Start Receipt Section */
            .tm_container {
            max-width: 480px;
            padding: 30px 15px;
            margin-left: auto;
            margin-right: auto;
            position: relative;
            }
            @media (min-width: 575px) {
            .tm_invoice_btns {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                margin-top: 0px;
                margin-left: 0;
                position: absolute;
                right: 0px;
                top: 30px;
                -webkit-box-shadow: -2px 0 24px -2px rgba(43, 55, 72, 0.05);
                box-shadow: -2px 0 24px -2px rgba(43, 55, 72, 0.05);
                border: 3px solid #fff;
                border-radius: 6px;
                background-color: #fff;
            }
            .tm_invoice_btn {
                display: -webkit-inline-box;
                display: -ms-inline-flexbox;
                display: inline-flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                border: none;
                font-weight: 600;
                cursor: pointer;
                padding: 0;
                background-color: transparent;
                position: relative;
            }
            .tm_invoice_btn svg {
                width: 24px;
            }
            .tm_invoice_btn .tm_btn_icon {
                padding: 0;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                height: 42px;
                width: 42px;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
            }
            .tm_invoice_btn .tm_btn_text {
                position: absolute;
                left: 100%;
                background-color: #111;
                color: #fff;
                padding: 3px 12px;
                display: inline-block;
                margin-left: 10px;
                border-radius: 5px;
                top: 50%;
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                font-weight: 500;
                min-height: 28px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                opacity: 0;
                visibility: hidden;
            }
            .tm_invoice_btn .tm_btn_text:before {
                content: "";
                height: 10px;
                width: 10px;
                position: absolute;
                background-color: #111;
                -webkit-transform: rotate(45deg);
                transform: rotate(45deg);
                left: -3px;
                top: 50%;
                margin-top: -6px;
                border-radius: 2px;
            }
            .tm_invoice_btn:hover .tm_btn_text {
                opacity: 1;
                visibility: visible;
            }
            .tm_invoice_btn:not(:last-child) {
                margin-bottom: 3px;
            }
            .tm_invoice_btn.tm_color1 {
                background-color: rgba(0, 122, 255, 0.1);
                color: #007aff;
                border-radius: 5px 5px 0 0;
            }
            .tm_invoice_btn.tm_color1:hover {
                background-color: rgba(0, 122, 255, 0.2);
            }
            .tm_invoice_btn.tm_color2 {
                background-color: rgba(52, 199, 89, 0.1);
                color: #34c759;
                border-radius: 0 0 5px 5px;
            }
            .tm_invoice_btn.tm_color2:hover {
                background-color: rgba(52, 199, 89, 0.2);
            }
            }
            @media (max-width: 574px) {
            .tm_invoice_btns {
                display: -webkit-inline-box;
                display: -ms-inline-flexbox;
                display: inline-flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                margin-top: 0px;
                margin-top: 20px;
                -webkit-box-shadow: -2px 0 24px -2px rgba(43, 55, 72, 0.05);
                box-shadow: -2px 0 24px -2px rgba(43, 55, 72, 0.05);
                border: 3px solid #fff;
                border-radius: 6px;
                background-color: #fff;
                position: relative;
                left: 50%;
                -webkit-transform: translateX(-50%);
                transform: translateX(-50%);
            }
            .tm_invoice_btn {
                display: -webkit-inline-box;
                display: -ms-inline-flexbox;
                display: inline-flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                border: none;
                font-weight: 600;
                cursor: pointer;
                padding: 0;
                background-color: transparent;
                position: relative;
                border-radius: 5px;
                padding: 6px 15px;
                text-decoration: none;
            }
            .tm_invoice_btn svg {
                width: 24px;
            }
            .tm_invoice_btn .tm_btn_icon {
                padding: 0;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                margin-right: 8px;
            }
            .tm_invoice_btn:not(:last-child) {
                margin-right: 3px;
            }
            .tm_invoice_btn.tm_color1 {
                background-color: rgba(0, 122, 255, 0.1);
                color: #007aff;
            }
            .tm_invoice_btn.tm_color1:hover {
                background-color: rgba(0, 122, 255, 0.2);
            }
            .tm_invoice_btn.tm_color2 {
                background-color: rgba(52, 199, 89, 0.1);
                color: #34c759;
            }
            .tm_invoice_btn.tm_color2:hover {
                background-color: rgba(52, 199, 89, 0.2);
            }
            }
            @media print {
            .tm_hide_print {
                display: none !important;
            }
            }
      </style>
    </head>
    <body>
      ${receiptContent}
     <script>
        window.addEventListener('load', () => {
          // Set up the afterprint handler first
          window.onafterprint = () => window.close();
          
          // Trigger print dialog
          window.print();
        });
      <\/script>
    </body>
    </html>
    `);

  printWindow.document.close(); // Add this line to close the document
}

function prorityValidation(priority) {
  return priority === "G" || priority === "P";
}

function nameValidation(name) {
  return name.length >= 3 && name.length <= 30;
}

function add(name, priority = "G") {
  let data = JSON.parse(localStorage.getItem("queue-data")) || [];

  const newQueue = {
    id: data.length + 1 || 1, // Generate unique ID
    name,
    lives: 4,
    priority,
  };

  if (priority === "P") {
    // Find the last index of any priority "P"
    let lastPriorityIndex = data.findLastIndex((item) => item.priority === "P");

    // Find the first person with lives < 4 (who is not priority "P")
    let firstLowerLivesIndex = data.findIndex(
      (item) => item.lives < 4 && item.priority !== "P"
    );

    if (lastPriorityIndex !== -1) {
      // If there are existing "P" customers, insert after the last "P"
      data.splice(lastPriorityIndex + 1, 0, newQueue);
    } else if (firstLowerLivesIndex !== -1) {
      // If there's someone in front with lives < 4, insert after them
      data.splice(firstLowerLivesIndex + 1, 0, newQueue);
    } else {
      // Otherwise, insert at the front
      data.unshift(newQueue);
    }
  } else {
    data.push(newQueue);
  }

  localStorage.setItem("queue-data", JSON.stringify(data));

  show();

  return newQueue;
}

function clearInput(name, select) {
  name.classList.remove("is-invalid");
  name.classList.remove("is-valid");

  select.value = "G";

  name.value = "";
}

function show(cardGroup = document.querySelector(".card-group")) {
  // Get queue data from localStorage
  let queueData = JSON.parse(localStorage.getItem("queue-data")) || [];

  queueData = queueData.filter((customer) => customer.lives > 0);

  // Kosongkan card group terlebih dahulu
  cardGroup.innerHTML = "";

  // Hitung jumlah antrian yang akan ditampilkan
  const maxShow = 6;
  const remaining = queueData.length - maxShow;

  for (let i = 0; i <= maxShow; i++) {
    if (i >= queueData.length) break;
    const customer = queueData[i];

    const convertTime = (minutes) => {
      if (minutes >= 60) {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours} jam${
          remainingMinutes > 0 ? ` ${remainingMinutes} menit` : ""
        }`;
      }
      return `${minutes} menit`;
    };

    const waitTime = (i + 1) * 4;
    const formattedTime = convertTime(waitTime);

    const card = `
  <div class="col-4 mb-3" >
    <div class="card h-100">
      <div class="card-body ${
        i === 0 && customer.lives === 3 ? "text-bg-success" : ""
      } ${i === 0 && customer.lives === 2 ? "text-bg-warning" : ""}  ${
      i === 0 && customer.lives === 1 ? "text-bg-danger" : ""
    }">
        <h5 class="card-title">A${customer.id} ${customer.name}</h5>
        <p class="card-text">
          Perkiraan waktu tunggu ${formattedTime}
        </p>
        <div class="badge bg-secondary">${
          i + 1 === 1 ? "Giliran Anda" : `Antrian ${i + 1}`
        }</div>
      </div>
    </div>
  </div>`;

    cardGroup.innerHTML += card;
  }

  if (remaining > 0) {
    cardGroup.innerHTML += `
  <div class="col-12">
    <div class="alert alert-warning mt-3">
      Masih ada ${remaining} antrian lainnya...
    </div>
  </div>`;
  }
}

function disabledButton(
  disabled = true,
  warningCustomerBtn = document.querySelector(".warning-customer-btn"),
  nextCustomerBtn = document.querySelector(".next-customer-btn")
) {
  if (disabled) {
    warningCustomerBtn.classList.add("disabled");
    nextCustomerBtn.classList.add("disabled");
    return;
  }

  warningCustomerBtn.classList.remove("disabled");
  nextCustomerBtn.classList.remove("disabled");
}

function render(
  customer,
  showCustomerTurn = document.querySelector(".show-customer-turn")
) {
  if (!customer) {
    return (showCustomerTurn.innerHTML = `  
    <div class="alert alert-secondary show-customer-turn"
      role="alert">
       Tidak ada kustomer yang menunggu.
    </div>`);
  }

  let alertClass = "alert-secondary";
  switch (customer.lives) {
    case 3:
      alertClass = "alert-success";
      break;
    case 2:
      alertClass = "alert-warning";
      break;
    case 1:
      alertClass = "alert-danger";
      break;
  }

  showCustomerTurn.innerHTML = `  
  <div class="alert ${alertClass} show-customer-turn"
    role="alert">
     Silahkan Masuk: A${customer.id} | ${customer.name}
  </div>`;
}

function playSound(sound) {
  disabledButton(true);
  sound.play().finally(() => {
    setTimeout(() => {
      disabledButton(false);
    }, 3000);
  });
}

export {
  print,
  nameValidation,
  add,
  clearInput,
  show,
  playSound,
  render,
  prorityValidation,
};
