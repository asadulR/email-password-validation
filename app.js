const checkEmail = () => {
    const emailField = document.getElementById('inputEmail');
    const email = emailField.value;

    const worngError = document.getElementById('worng-email');
    const rightEmail = document.getElementById('correct-email');

    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email)) {
        
        // alert('Please provide a valid email address');
        worngError.classList.remove('d-none');
        rightEmail.classList.add('d-none')

        email.focus;
        return false;
    }
    else if(filter.test(email)){
        rightEmail.classList.remove('d-none')
        worngError.classList.add('d-none');

    }
    
    emailField.value = '';
}