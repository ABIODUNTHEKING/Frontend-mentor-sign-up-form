(() => {
    //Get all the needed Document Object
    const forms = document.querySelectorAll('.needs-validation')
    const input = document.querySelectorAll('.form-control')
    const heading = document.querySelector('#intro')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
       
      }, false)
    })
  })()
  