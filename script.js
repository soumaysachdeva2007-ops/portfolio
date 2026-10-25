
document.addEventListener('DOMContentLoaded', () => {
    // Form handling
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thanks for reaching out! (This is a static demo so the email was not actually sent).');
            form.reset();
        });
    }

    // Modal Handling
    const modal = document.getElementById('thanksModal');
    const openBtn = document.getElementById('openThanksBtn');
    const closeBtn = document.querySelector('.close-btn');

    if (modal && openBtn && closeBtn) {
        // Open modal
        openBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
            // slight delay to allow display block to apply before changing opacity
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);
        });

        // Close modal on X click
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // match transition duration
        });

        // Close modal on outside click
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 300);
            }
        });
    }
});
