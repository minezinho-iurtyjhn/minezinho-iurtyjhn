document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navUl = document.querySelector('nav ul');
    const loginButtonNav = document.getElementById('login-button-nav');
    const loginModal = document.getElementById('login-modal');
    const closeButton = document.querySelector('.close-button');
    const discordLoginButton = document.querySelector('.discord-login');
    const googleLoginButton = document.querySelector('.google-login');

    if (menuToggle && navUl) {
        menuToggle.addEventListener('click', () => {
            navUl.classList.toggle('active');
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') { // Exclude generic href="#"
                e.preventDefault();
                return;
            }
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                // If mobile nav is open, close it after click
                if (navUl.classList.contains('active')) {
                    navUl.classList.remove('active');
                }
            }
        });
    });

    // Login Modal Logic
    if (loginButtonNav && loginModal && closeButton) {
        loginButtonNav.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            loginModal.style.display = 'block';
            // If mobile nav is open, close it
            if (navUl.classList.contains('active')) {
                navUl.classList.remove('active');
            }
        });

        closeButton.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });

        // Close modal if user clicks outside of it
        window.addEventListener('click', (event) => {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }

    if (discordLoginButton) {
        discordLoginButton.addEventListener('click', () => {
            // Placeholder for Discord login
            alert('Integração com Discord em breve!');
            console.log('Attempting Discord login...');
            // Actual Discord OAuth flow would start here
        });
    }

    if (googleLoginButton) {
        googleLoginButton.addEventListener('click', () => {
            // Placeholder for Google login
            alert('Integração com Google em breve!');
            console.log('Attempting Google login...');
            // Actual Google OAuth flow would start here
        });
    }
});