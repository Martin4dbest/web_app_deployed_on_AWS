// script.js

// Function to display a welcome message
function displayWelcomeMessage() {
    alert('Welcome to our web application!');
}

// Function to toggle the visibility of an element
function toggleVisibility(elementId) {
    var element = document.getElementById(elementId);
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}
