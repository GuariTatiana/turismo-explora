//  Formulario de contacto avanzado

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactoForm');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.querySelector('.btn-text');
    const spinner = document.getElementById('spinner');
    const modal = document.getElementById('modalConfirmacion');
    const closeModal = document.getElementById('closeModal');
    
    // Validación de fecha futura
    const fechaInput = document.getElementById('fecha');
    if (fechaInput) {
        // Establecer fecha mínima = hoy
        const hoy = new Date();
        const yyyy = hoy.getFullYear();
        const mm = String(hoy.getMonth() + 1).padStart(2, '0');
        const dd = String(hoy.getDate()).padStart(2, '0');
        fechaInput.min = `${yyyy}-${mm}-${dd}`;
        
        // Validar que la fecha sea futura
        fechaInput.addEventListener('change', () => {
            const fechaSeleccionada = new Date(fechaInput.value);
            if (fechaSeleccionada < hoy) {
                fechaInput.setCustomValidity('La fecha debe ser futura');
                fechaInput.classList.add('invalid');
            } else {
                fechaInput.setCustomValidity('');
                fechaInput.classList.remove('invalid');
            }
        });
    }
    
    // Envío del formulario
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validar el formulario
            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }
            
            // Mostrar spinner
            btnText.classList.add('hidden');
            spinner.classList.add('active');
            submitBtn.disabled = true;
            
            // Simular envío (delay de 1.5 segundos)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Ocultar spinner
            btnText.classList.remove('hidden');
            spinner.classList.remove('active');
            submitBtn.disabled = false;
            
            // Mostrar modal de éxito
            modal.classList.add('active');
            
            // Limpiar formulario
            form.reset();
            
            // Remover clases de validación visual
            document.querySelectorAll('.form-group input, .form-group select, .form-group textarea').forEach(field => {
                field.classList.remove('valid', 'invalid');
            });
        });
    }
    
    // Cerrar modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }
    
    // Cerrar modal al hacer clic fuera
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
    
    // Validación en tiempo real con estilos
    const inputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.checkValidity()) {
                input.classList.add('valid');
                input.classList.remove('invalid');
            } else {
                input.classList.add('invalid');
                input.classList.remove('valid');
            }
        });
        
        input.addEventListener('blur', () => {
            if (input.checkValidity()) {
                input.classList.add('valid');
                input.classList.remove('invalid');
            } else {
                input.classList.add('invalid');
                input.classList.remove('valid');
            }
        });
    });
    
    // Validación específica para el checkbox de términos
    const terminosCheckbox = document.getElementById('terminos');
    if (terminosCheckbox) {
        terminosCheckbox.addEventListener('change', () => {
            if (terminosCheckbox.checked) {
                terminosCheckbox.classList.add('valid');
                terminosCheckbox.classList.remove('invalid');
            } else {
                terminosCheckbox.classList.add('invalid');
                terminosCheckbox.classList.remove('valid');
            }
        });
    }
});