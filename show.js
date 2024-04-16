// Get references to the button and envelope elements
const showEnvelopeBtn = document.getElementById('dialog');
const envelope = document.getElementById('envelope');

// Add click event listener to the button
showEnvelopeBtn.addEventListener('click', () => {
    // Display the envelope by removing the 'hidden' class
    envelope.classList.remove('hidden');
});
