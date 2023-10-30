function updadeClock() {
  const hoursElements = document.querySelector(".hours");
  const minutesElements = document.querySelector(".minutes");
  const secondsElements = document.querySelector(".seconds");
  
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  hoursElements.textContent = hours;
  minutesElements.textContent = minutes;
  secondsElements.textContent = seconds;
}

setInterval(updadeClock, 1000);