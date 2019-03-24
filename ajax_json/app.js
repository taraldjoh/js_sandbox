document.getElementById("button1").addEventListener("click", loadCustomer);

function loadCustomer(e) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function() {
    if (this.status === 200) {
      //console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>NAME: ${customer.name}</li>
          <li>COMPANY: ${customer.company}</li>
          <li>PHONE: ${customer.phone}</li>
        </ul>
      `;

      // OUtput to browser
      document.getElementById("customer").innerHTML = output;
    }
  };

  xhr.send();
}
