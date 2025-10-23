// --------------------------------------------------------------------------
// ------------------- contact form validation ----------
document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("contactForm");
	const successMsg = document.getElementById("success");

	// ------------------- Show small when typing -------------------
	const fields = [
		{ input: "name", hint: "Please enter your full name (e.g. John Who)." },
		{
			input: "email",
			hint: "Please enter a valid email (e.g. JohnWho@xxxx.xxx).",
		},
		{ input: "subject", hint: "Add a short subject (at least 5 letters)." },
		{ input: "message", hint: "Write at least 10 characters." },
	];

	fields.forEach(({ input, hint }) => {
		const inputEl = document.getElementById(input);
		const smallEl = document.getElementById(`error-${input}`);

		// show the hint when user starts typing
		inputEl.addEventListener("input", () => {
			if (inputEl.value.trim() !== "") {
				smallEl.style.display = "block";
				smallEl.textContent = hint;
			} else {
				smallEl.style.display = "none";
				smallEl.textContent = "";
			}
		});

		// hide hint on blur if empty
		inputEl.addEventListener("blur", () => {
			if (inputEl.value.trim() === "") {
				smallEl.style.display = "none";
				smallEl.textContent = "";
			}
		});
	});

	// ------------------- Submit validation -------------------
	form.addEventListener("submit", (e) => {
		e.preventDefault();

		const name = document.getElementById("name");
		const email = document.getElementById("email");
		const subject = document.getElementById("subject");
		const message = document.getElementById("message");

		let valid = true;

		// Clear all existing errors
		document.querySelectorAll("small").forEach((el) => (el.textContent = ""));

		// ------------------- Full Name Validation -------------------
		const fullName = name.value.trim();

		if (fullName === "") {
			document.getElementById("error-name").textContent =
				"Full name is required (e.g. John Who).";
			valid = false;
		} else if (fullName.split(" ").length < 2) {
			document.getElementById("error-name").textContent =
				"Please enter your first and last name (e.g. John Who).";
			valid = false;
		}

		// ------------------- Email Validation -------------------
		const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
		if (!emailPattern.test(email.value.trim())) {
			document.getElementById("error-email").textContent =
				"Please enter a valid email (e.g. JohnWho@xxxx.xxx).";
			valid = false;
		}

		// ------------------- Subject Validation -------------------
		const subjectValue = subject.value.trim();
		if (subjectValue === "") {
			document.getElementById("error-subject").textContent =
				"Subject is required.";
			valid = false;
		} else if (subjectValue.replace(/[^a-zA-Z]/g, "").length < 5) {
			document.getElementById("error-subject").textContent =
				"Subject must contain at least 5 letters.";
			valid = false;
		}

		// ------------------- Message Validation -------------------
		if (message.value.trim().length < 10) {
			document.getElementById("error-message").textContent =
				"Message must be 10 characters or more.";
			valid = false;
		}

		// ------------------- Final Validation -------------------
		if (valid) {
			successMsg.classList.add("show");
			e.target.reset();

			// hide all smalls again after successful submit
			document.querySelectorAll("small").forEach((el) => {
				el.style.display = "none";
				el.textContent = "";
			});

			setTimeout(() => {
				successMsg.classList.remove("show");
			}, 3000);
		} else {
			successMsg.hidden = true;
		}
	});
});
