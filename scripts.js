// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Grab the form, input, and message div
    const form = document.querySelector(".newsletter form");
    const input = document.querySelector(".newsletter input");
    const messageDiv = document.querySelector(".message");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // stop the form from refreshing the page

        const email = input.value.trim(); // get the email entered

        // Clear previous message classes
        messageDiv.classList.remove("success", "error");

        if (email) {
            // Success case
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            messageDiv.classList.add("success");
        } else {
            // Error case
            messageDiv.textContent = "Please enter a valid email address.";
            messageDiv.classList.add("error");
        }
    });
});
