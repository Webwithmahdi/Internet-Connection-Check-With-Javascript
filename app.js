const connection = document.querySelector(".connection");
const connectionStatus = document.querySelector(".connection-status");
const checkBtn = document.querySelector(".check-btn");

checkBtn.addEventListener("click", function () {
  statusCheck();
  setTimeout(function () {
    connection.style.opacity = "1";
  }, 100);
});

function statusCheck() {
  if (navigator.onLine) {
    connection.style.backgroundColor = "darkgreen";
    connectionStatus.innerText = "Connected";
  } else {
    connection.style.backgroundColor = "red";
    connectionStatus.innerText = "Disconnected";
  }
}
