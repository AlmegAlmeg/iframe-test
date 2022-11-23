const app = document.querySelector("#app")

setTimeout(() => {
  app.textContent = "Js triggered!"
  app.style.background = "red"
  window.postMessage("Hello from window!")
}, 5000)