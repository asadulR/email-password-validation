const checkEmail = () => {
    const emailField = document.getElementById('inputEmail');
    const email = emailField.value;


    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!filter.test(email)) {
        alert('Please provide a valid email address');
        email.focus;
        return false;
    }
    
}