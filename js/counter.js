// Contador animado

document.addEventListener('DOMContentLoaded', () => {
    iniciarContador();
});

function iniciarContador() {
    const contadorElemento = document.getElementById('contadorVisitantes');
    
    if (!contadorElemento) return;
    
    // Número final 
    const numeroFinal = 500;
    let numeroActual = 0;
    
    // Función para animar el contador
    function animarContador() {
        // Duración total de la animación
        const duracion = 2000; // 2 segundos
        const intervalo = 20; // Actualizar cada 20ms
        const pasos = duracion / intervalo;
        const incremento = numeroFinal / pasos;
        
        // Agregar clase de animación CSS
        contadorElemento.classList.add('animate');
        
        const timer = setInterval(() => {
            numeroActual += incremento;
            
            if (numeroActual >= numeroFinal) {
                contadorElemento.textContent = numeroFinal + '+';
                clearInterval(timer);
                
                // Agregar pulso continuo
                setTimeout(() => {
                    contadorElemento.classList.add('pulse');
                }, 500);
            } else {
                contadorElemento.textContent = Math.floor(numeroActual);
            }
        }, intervalo);
    }
    
    // Detectar cuando el contador entra en vista
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animarContador();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    
    // Observar el contenedor del contador
    const counterSection = document.querySelector('.counter-section');
    if (counterSection) {
        observer.observe(counterSection);
    } else {
        //  animar directamente
        animarContador();
    }
}