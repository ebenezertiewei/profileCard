// --------------------------------------------------------------------------
// ---------- Get Current Time in Milliseconds ----------
// Select the element
const timeElement = document.querySelector('[data-testid="test-user-time"]');

// Get current time in milliseconds
const currentTime = Date.now();

// Display it
timeElement.textContent = currentTime;

setInterval(() => {
	const currentTime = Date.now();
	document.querySelector('[data-testid="test-user-time"]').textContent =
		currentTime;
}, 1000);
