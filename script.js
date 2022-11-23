const app = document.querySelector("#app")

setTimeout(() => {
  app.textContent = "Js triggered!"
  window.postMessage("Hello from window!")
}, 5000);