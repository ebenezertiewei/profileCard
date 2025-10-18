// --------------------------------------------------------------------------
// ------------------- current time in milliseconds ----------
window.addEventListener("DOMContentLoaded", () => {
	const timeElement = document.querySelector('[data-testid="test-user-time"]');

	function updateTime() {
		const currentTime = Date.now();
		timeElement.textContent = currentTime;
	}

	updateTime();
	setInterval(updateTime, 1000);
});

// --------------------------------------------------------------------------
// ------------------- avatar image upload and image url upload ----------
window.addEventListener("DOMContentLoaded", () => {
	const avatarImg = document.getElementById("profileAvatar");
	const fileInput = document.getElementById("avatarUpload");
	const urlInput = document.getElementById("avatarUrl");

	// Update avatar when a URL is entered
	urlInput.addEventListener("input", () => {
		const url = urlInput.value.trim();
		if (url) {
			avatarImg.src = url;
		}
	});


});
