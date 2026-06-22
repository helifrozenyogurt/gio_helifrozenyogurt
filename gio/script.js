// Modal Functions
function openSignupModal() {
    document.getElementById('signupModal').classList.add('show');
}

function closeSignupModal() {
    document.getElementById('signupModal').classList.remove('show');
    document.getElementById('signupForm').reset();
}

function openFeedbackModal() {
    document.getElementById('feedbackModal').classList.add('show');
}

function closeFeedbackModal() {
    document.getElementById('feedbackModal').classList.remove('show');
    document.getElementById('feedbackForm').reset();
}

// Close modal when clicking outside
document.addEventListener('click', function(event) {
    const signupModal = document.getElementById('signupModal');
    const feedbackModal = document.getElementById('feedbackModal');

    if (event.target === signupModal) {
        closeSignupModal();
    }
    if (event.target === feedbackModal) {
        closeFeedbackModal();
    }
});

// Email Validation
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Phone Validation
function isValidPhone(phone) {
    if (!phone) return true; // phone is optional
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length >= 10;
}

// Signup Form Submission
function handleSignupSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const apartment = document.getElementById('apartment').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const consent = document.getElementById('consent').checked;

    // Validation
    if (!name) {
        alert('Please enter your name.');
        return;
    }

    if (!apartment) {
        alert('Please enter your apartment number.');
        return;
    }

    if (!email) {
        alert('Please enter your email.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (phone && !isValidPhone(phone)) {
        alert('Please enter a valid phone number.');
        return;
    }

    if (!consent) {
        alert('Please agree to receive updates.');
        return;
    }

    // Form is valid - show success popup
    closeSignupModal();
    showSuccessPopup();
}

// Feedback Form Submission
function handleFeedbackSubmit(event) {
    event.preventDefault();

    const rating = document.querySelector('input[name="rating"]:checked');
    const feedback = document.getElementById('feedback').value.trim();
    const email = document.getElementById('feedbackEmail').value.trim();

    // Validation
    if (!rating) {
        alert('Please select a rating.');
        return;
    }

    if (!email) {
        alert('Please enter your email.');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Form is valid - show thank you popup
    closeFeedbackModal();
    showThankYouPopup();
}

// Show Success Popup
function showSuccessPopup() {
    const popup = document.getElementById('successPopup');
    popup.classList.add('show');

    // Auto-close after 8 seconds
    setTimeout(() => {
        popup.classList.remove('show');
    }, 8000);
}

// Show Thank You Popup
function showThankYouPopup() {
    const popup = document.getElementById('thankYouPopup');
    popup.classList.add('show');

    // Auto-close after 5 seconds
    setTimeout(() => {
        popup.classList.remove('show');
    }, 5000);
}

// Close popup when clicking outside
document.addEventListener('click', function(event) {
    const successPopup = document.getElementById('successPopup');
    const thankYouPopup = document.getElementById('thankYouPopup');

    if (event.target === successPopup) {
        successPopup.classList.remove('show');
    }
    if (event.target === thankYouPopup) {
        thankYouPopup.classList.remove('show');
    }
});
