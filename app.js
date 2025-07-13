function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.style.display = "block";
  setTimeout(() => { toast.style.display = "none"; }, 2000);
}

function getNumber() {
  const code = document.getElementById("country").value;
  Telegram.WebApp.sendData(JSON.stringify({
    action: "get_number",
    code: code
  }));
  showToast("Request sent");
}

function changeNumber() {
  Telegram.WebApp.sendData(JSON.stringify({ action: "change_number" }));
  showToast("Change requested");
}

Telegram.WebApp.ready();

// Mock Data for UI Preview
document.getElementById("assignedNumber").innerText = "+880123456789";
document.getElementById("otpList").innerHTML = `
  <li>123456</li>
  <li>567890</li>
  <li>987654</li>
`;
