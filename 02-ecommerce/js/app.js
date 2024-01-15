const modalImagen = document.querySelector('#modal-imagen');

if (modalImagen){

    modalImagen.addEventListener('show.bs.modal', function(e){
        const enlace = e.relatedTarget;
        const ruta = enlace.getAttribute('data-bs-imagen');
        
        //construir imagen
        const imagen = document.createElement('IMG');
        imagen.src = `img/${ruta}.jpg`
        imagen.classList.add('img-fluid');
        imagen.alt = 'imagen Galeria';
        
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.appendChild(imagen);
    })
    
    modalImagen.addEventListener('hidden.bs.modal', function(e){
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.textContent = '';
    })
};

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()