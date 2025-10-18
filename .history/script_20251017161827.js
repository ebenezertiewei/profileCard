// --------------------------------------------------------------------------
// ---------- Get Current Time in Milliseconds ----------
// Wait until the page fully loads
window.addEventListener("DOMContentLoaded", () => {
	const timeElement = document.querySelector('[data-testid="test-user-time"]');

	// Function to update current time in milliseconds
	function updateTime() {
		const currentTime = Date.now();
		timeElement.textContent = currentTime;
	}
	updateTime();
	setInterval(updateTime, 1000);
});
