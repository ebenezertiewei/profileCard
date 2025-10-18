

// Select the element
const timeElement = document.querySelector('[data-testid="test-user-time"]');

// Get current time in milliseconds
const currentTime = Date.now();

// Display it
timeElement.textContent = currentTime;
