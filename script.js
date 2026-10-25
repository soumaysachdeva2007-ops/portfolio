
document.addEventListener('DOMContentLoaded', () => {
    // Form submission mock
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks for reaching out! This is a static demo, so no email was actually sent. You will need to connect a backend to process emails.');
            form.reset();
        });
    }
});
