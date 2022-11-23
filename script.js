const app = document.querySelector("#app")

setTimeout(() => {
  app.textContent = "Js triggered!"
  app.style.background = "red"
  window.Print.postMessage("Hello from channel")
}, 5000)