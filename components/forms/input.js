// Input behavior

// Function to handle input focus event
function handleFocus(event) {
    // Implementation for input focus behavior
    console.log("Input focused:", event.target.value);
}

// Function to handle input blur event
function handleBlur(event) {
    // Implementation for input blur behavior
    console.log("Input blurred:", event.target.value);
}

// Add focus and blur event listeners to inputs
const inputs = document.querySelectorAll('.input');
inputs.forEach(input => {
    input.addEventListener('focus', handleFocus);
    input.addEventListener('blur', handleBlur);
});
