document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  // Create XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open("GET", "text.txt", true);

  xhr.onload = function() {
    // Check if status is = 200 (200 status = all is ok)
    if (this.status === 200) {
      document.getElementById("output").innerHTML = `<h1>${
        this.responseText
      }</h1>`;
    }
  };

  xhr.send();
}
