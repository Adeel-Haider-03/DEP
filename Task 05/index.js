document.getElementById('reservation-form').addEventListener('input', function (e) {
    validateField(e.target);
});

function validateField(field) {
    const errorMessage = field.nextElementSibling;
    
    if (field.id === 'name') {
        const validName = /^[A-Za-z\s]+$/.test(field.value);
        errorMessage.textContent = validName ? '' : 'Please enter a valid name (letters only).';
    }
    
    if (field.id === 'email') {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
        errorMessage.textContent = validEmail ? '' : 'Please enter a valid email.';
    }
    
    if (field.id === 'phone') {
        const validPhone = /^\d{10}$/.test(field.value);
        errorMessage.textContent = validPhone ? '' : 'Please enter a valid 10-digit phone number.';
    }
    
    if (field.id === 'date') {
        const selectedDate = new Date(field.value);
        const today = new Date();
        const validDate = selectedDate > today;
        errorMessage.textContent = validDate ? '' : 'Reservation date must be in the future.';
    }
    
    if (field.id === 'guests') {
        const validGuests = field.value >= 1 && field.value <= 10;
        errorMessage.textContent = validGuests ? '' : 'Number of guests must be between 1 and 10.';
    }
}
