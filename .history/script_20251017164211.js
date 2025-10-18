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
	const urlInput = document.getElementById("avatarUrl");


	// Update avatar when a URL is entered
	urlInput.addEventListener("input", () => {
		const url = urlInput.value.trim();
		if (url) {
			avatarImg.src = url;
		}
	});

	// Update avatar when a file is uploaded
	fileInput.addEventListener("change", (event) => {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			avatarImg.src = imageUrl;

			// optional: revoke URL later to free memory
			avatarImg.onload = () => URL.revokeObjectURL(imageUrl);
		}
	});
});
