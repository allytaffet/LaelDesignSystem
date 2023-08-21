// Button behavior

// Function to handle button click event
function handleClick(event) {
    // Implementation for button click behavior
    console.log("Button clicked:", event.target.textContent);
}

// Add click event listeners to buttons
const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});
