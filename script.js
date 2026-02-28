// Select the elements
const passwordInput = document.getElementById('password');
const warningMessage = document.getElementById('password-warning');

// Only run on pages that have a password field
if (passwordInput && warningMessage) {
    // Listen for typing
    passwordInput.addEventListener('input', () => {
        const currentLength = passwordInput.value.length;

        // Check if length is 0 (don't show warning if they haven't started typing)
        if (currentLength === 0) {
            warningMessage.classList.add('hidden');
            passwordInput.classList.remove('invalid-input');
        } 
        // Check if length is less than 8
        else if (currentLength < 8) {
            warningMessage.classList.remove('hidden');
            passwordInput.classList.add('invalid-input');
        } 
        // If it's 8 or more, hide the warning
        else {
            warningMessage.classList.add('hidden');
            passwordInput.classList.remove('invalid-input');
        }
    });
}