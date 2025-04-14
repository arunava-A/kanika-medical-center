// Your Google Apps Script Web App URL
const scriptUrl = 'https://script.google.com/macros/s/AKfycbw5T-vkmIqK884eCTWcsNSl6JPwr_NWzoMRCW_9sxW6n4CF4r4tAemzAN1cXaTHXENOfQ/exec';

// Handle form submission
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    var formData = new FormData(this);
    
    fetch(scriptUrl, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('Data submitted successfully!');
        document.getElementById('userForm').reset(); // Reset the form after submission
    })
    .catch(error => {
        alert('Error submitting data');
    });
});