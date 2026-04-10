// Scroll Reveal - Los artículos aparecen al hacer scroll
document.addEventListener('DOMContentLoaded', () => {
    const articulos = document.querySelectorAll('.articulo');
    
    // Crear el observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar una vez visible
            }
        });
    }, {
        threshold: 0.2, // Cuando el 20% del artículo es visible
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observar cada artículo
    articulos.forEach(articulo => {
        observer.observe(articulo);
    });
});