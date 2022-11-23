const submitBtn = document.querySelector("#submitBtn")
const loading = document.querySelector("#loading")

submitBtn.addEventListener("click", () => {
	loading.textContent = "טוען..."
	setTimeout(() => {
		window.Print.postMessage({
			status: 200,
			orderId: "a535",
		})
	}, 1000)
})
