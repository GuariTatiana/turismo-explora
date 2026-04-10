// js/components.js
document.addEventListener('DOMContentLoaded', () => {
    // Cargar header
    fetch('partials/header.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('afterbegin', data);
            initMobileMenu();
            initDarkMode();
            initDropdownMobile();
        })
        .catch(error => console.error('Error cargando header:', error));
    
    // Cargar footer
    fetch('partials/footer.html')
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML('beforeend', data);
            initNewsletter();
        })
        .catch(error => console.error('Error cargando footer:', error));
});

// Menú hamburguesa para móvil
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    
    if (menuBtn && mainNav) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
}

// Dropdown en móvil (click en lugar de hover)
function initDropdownMobile() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        toggle.addEventListener('click', (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
}

// Modo oscuro
function initDarkMode() {
    const darkModeBtn = document.getElementById('darkModeToggle');
    
    if (darkModeBtn) {
        // Verificar si hay preferencia guardada
        if (localStorage.getItem('darkMode') === 'enabled') {
            document.body.classList.add('dark-mode');
        }
        
        darkModeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
            } else {
                localStorage.setItem('darkMode', 'disabled');
            }
        });
    }
}

// Newsletter
function initNewsletter() {
    const form = document.querySelector('#newsletterForm');
    const messageDiv = document.querySelector('#newsletterMessage');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]');
            
            if (email && email.value) {
                messageDiv.innerHTML = '✅ ¡Gracias por suscribirte!';
                messageDiv.style.color = '#2ecc71';
                form.reset();
                
                setTimeout(() => {
                    messageDiv.innerHTML = '';
                }, 3000);
            }
        });
    }
}