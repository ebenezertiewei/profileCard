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
	const avatarImgUpload = document.getElementById("avatarUpload");
	const url = document.getElementById("avatarUrl");

	// Update avatar when a file is uploaded
	avatarImgUpload.addEventListener("change", (event) => {
		const file = event.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			avatarImg.src = imageUrl;

			// optional: revoke URL later to free memory
			avatarImg.onload = () => URL.revokeObjectURL(imageUrl);
		}
	});

	// Update avatar when a URL is entered
	url.addEventListener("input", () => {
		const url = url.value.trim();
		if (url) {
			avatarImg.src = url;
		}
	});
});
