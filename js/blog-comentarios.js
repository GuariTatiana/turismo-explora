// Manejo del formulario de comentarios
document.addEventListener('DOMContentLoaded', () => {
    const comentarioForm = document.getElementById('comentarioForm');
    
    if (comentarioForm) {
        comentarioForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Obtener valores
            const nombre = comentarioForm.querySelector('input[placeholder="Tu nombre"]').value;
            const email = comentarioForm.querySelector('input[placeholder="Tu email"]').value;
            const rating = comentarioForm.querySelector('select').value;
            const comentario = comentarioForm.querySelector('textarea').value;
            
            // Crear estrellas según rating
            let estrellas = '';
            for (let i = 0; i < parseInt(rating); i++) {
                estrellas += '⭐';
            }
            
            // Crear nuevo comentario
            const nuevoComentario = document.createElement('div');
            nuevoComentario.className = 'comentario';
            nuevoComentario.innerHTML = `
                <div class="comentario-avatar avatar-nuevo"></div>
                <div class="comentario-content">
                    <div class="comentario-header">
                        <strong class="comentario-nombre">${nombre}</strong>
                        <span class="comentario-fecha">Recién ahora</span>
                        <div class="comentario-rating">${estrellas}</div>
                    </div>
                    <p>"${comentario}"</p>
                    <button class="comentario-responder">Responder</button>
                </div>
            `;
            
            // Agregar estilo para avatar nuevo
            const style = document.createElement('style');
            style.textContent = `
                .avatar-nuevo::before {
                    content: "👤";
                    font-size: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                }
                .avatar-nuevo {
                    background: linear-gradient(135deg, var(--color-secondary), var(--color-primary));
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }
            `;
            document.head.appendChild(style);
            
            // Insertar al inicio de los comentarios
            const comentariosGrid = document.querySelector('.comentarios-grid');
            comentariosGrid.insertBefore(nuevoComentario, comentariosGrid.firstChild);
            
            // Limpiar formulario
            comentarioForm.reset();
            
            // Mostrar mensaje de éxito
            const mensaje = document.createElement('div');
            mensaje.className = 'mensaje-exito';
            mensaje.textContent = '✅ ¡Comentario publicado!';
            mensaje.style.cssText = `
                background-color: var(--color-success);
                color: white;
                padding: 10px;
                border-radius: 8px;
                text-align: center;
                margin-top: 20px;
            `;
            comentarioForm.appendChild(mensaje);
            
            setTimeout(() => {
                mensaje.remove();
            }, 3000);
        });
    }
});