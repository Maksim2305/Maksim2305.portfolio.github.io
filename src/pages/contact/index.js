const SignIn = document.querySelector('.contact-form_js');

(function(){
    function getDataFromForm (SignIn){
        let data = {};
        const inputs = SignIn.querySelectorAll('input');  
        for (const input of inputs){
            switch (input.type){
                case 'checkbox':
                    if (!data[input.name]){
                        data[input.name] = [];
                    }
                    if (input.checked){
                        data[input.name].push(input.value)
                    }
                    break;
                    default:
                    data[input.name] = input.value
            }
        }

        const textareas = SignIn.querySelectorAll('textarea');
        for (const textarea of textareas){
            data[textarea.name] = textarea.value;
        }
        return data;
    }

    function setErrorsMessage(input, message){
        let messageError = input.parentNode.querySelector('.invalid-feedback');
        console.log(messageError);
        messageError.classList.add('invalid-message');
        messageError.innerText = message;
        input.insertAdjacentElement('afterend', messageError);
        input.classList.add('invalid-input');
        input.addEventListener('input', function handler(){
            input.classList.remove('invalid-input');
            messageError.classList.remove('invalid-message');
            input.removeEventListener('input', handler);
            messageError.innerText = '';
        })
        return messageError;
    }

    SignIn.addEventListener('submit', function(event){
        event.preventDefault();
        const data = getDataFromForm(SignIn);
        console.log(data);
        let errors = {};
        if (!checkEmail(data.email)){
            errors.email = 'Неверная почта';
            const input = SignIn.querySelector('input[name="email"]');
            setErrorsMessage(input,errors.email);
        }
        if (!checkPhone(data.phone)){
            errors.phone = 'Неверный телефон';
            const input = SignIn.querySelector('input[name="phone"]');
            setErrorsMessage(input,errors.phone);
        }
        if (data.name === ''){
            errors.name = 'введите имя';
            const input = SignIn.querySelector('input[name="name"]');
            setErrorsMessage(input,errors.name);
        }
        if (data.checkbox.length == 0){
            errors.checkbox = 'поставьте галочку';
            const input = SignIn.querySelector('input[name="checkbox"]');
            setErrorsMessage(input,errors.checkbox);
        }
        console.log(errors);
    })


    function checkEmail(email){
       return email.match(/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i);
    }
    function checkPhone(phone){
        return phone.match(/^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/);
    }

})();




