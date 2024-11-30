// Get the form and success message div
const feedbackForm = document.getElementById('feedbackForm');
const successMessage = document.querySelector('.response-message');
const feedbackItemsContainer = document.querySelector('.feedback-items-container');

// Handle form submission
feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate inputs (simple check)
    if (name && email && message) {
        // Create feedback object
        const feedback = {
            name: name,
            email: email,
            message: message
        };

        // Store feedback in LocalStorage (this is just for demonstration purposes)
        let storedFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
        storedFeedback.push(feedback);
        localStorage.setItem('feedback', JSON.stringify(storedFeedback));

        // Display success message
        successMessage.style.display = 'block';
        successMessage.textContent = 'Your feedback has been submitted successfully!';
        
        // Clear form fields
        feedbackForm.reset();

        // Dynamically show the feedback below
        displayFeedback(storedFeedback);

    } else {
        successMessage.style.display = 'block';
        successMessage.textContent = 'Please fill out all fields.';
    }
});

// Function to display feedback from Local Storage
function displayFeedback(feedbackList) {
    feedbackItemsContainer.innerHTML = ''; // Clear existing feedback

    feedbackList.forEach(feedback => {
        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('feedback-item');
        
        feedbackItem.innerHTML = `
            <strong>${feedback.name}</strong>
            <p><strong>Email:</strong> ${feedback.email}</p>
            <p><strong>Feedback:</strong> ${feedback.message}</p>
        `;
        
        feedbackItemsContainer.appendChild(feedbackItem);
    });
}

// Call displayFeedback to load stored feedback on page load (for feedback display page)
window.onload = function() {
    const storedFeedback = JSON.parse(localStorage.getItem('feedback')) || [];
    displayFeedback(storedFeedback);
};
