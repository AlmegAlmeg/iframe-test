const app = document.querySelector("#app")

setTimeout(() => {
  app.textContent = "Js triggered!"
  app.style.background = "red"
  window.Print.postMessage({
    "status": 200,
    "orderId": "a535"
  })
}, 5000)