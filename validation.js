window.onload = function () {

    //validate if the variable has more equal or more than some length

    function validateLenghtOrMore(v, l) {
        if (v.length >= l) {
            return 1;
        } else {
            return 0;
        }
    }

    //validate if the variable has at least 1 number

    function lookForNumber(a) {
        var flag = 0;
        for (i = 0; i < a.length; i++) {
            if (a.charCodeAt(i) >= 48 && a.charCodeAt(i) <= 57) {
                flag = 1;
                return flag;
            }
        }
        return flag;
    }

    //validate if the variable has at least 1 letter

    function lookForLetter(b) {
        var flag1 = 0;
        for (i = 0; i < b.length; i++) {
            if (b.charCodeAt(i) >= 97 && b.charCodeAt(i) <= 122) {
                flag1 = 1;
                return flag1;
            } else if (b.charCodeAt(i) >= 65 && b.charCodeAt(i) <= 90) {
                flag1 = 1;
                return flag1;
            }
        }
        return flag1;
    }

    // Search for a particular character in the variable a

    function lookForCharacter(variable, a) {
        var flag = 0;
        if (variable.indexOf(a) !== -1) {
            flag = 1;
            return flag;
        } else {
            return flag;
        }
    }

    // General commands

    var errors = document.getElementsByClassName('error');
    var inputsData = document.getElementsByTagName('input');

    // inicializate global variables

    nameWarning = 1;
    emailWarning = 1;
    passowrdWarning = 1;
    rePasswordWarning = 1;
    ageWarning = 1;
    phoneWarning = 1;
    addressWarning = 1;
    cityWarning = 1;
    postalWarning = 1;
    dniWarning = 1;
    alertWarning = 0;

    // Hide the error message on Focus

    for (var i = 0; i <= 9; i++) {
        const message = errors[i];
        inputsData[i].onfocus = function () {
            message.style.visibility = "hidden";
        }
    }

    // Changing message of the greetings
        
    var message = document.getElementsByClassName('greetings')[0];
    var inputName = inputsData[0];
    inputName.onkeypress = function (e) {
        message.innerHTML = 'Hello reader' + ' ' + e.target.value;
    }

    // validate fullname

    inputsData[0].onblur = validateName;
    function validateName() {
        var name = inputsData[0].value;
        var result = validateLenghtOrMore(name, 6);
        var gotBlank = lookForCharacter(name, ' ');
        var doesItHaveANumber = lookForNumber(name);
        if (result === 1 && gotBlank === 1 && doesItHaveANumber != 1) {
            nameWarning = 0;
            return;
        } else {
            errors[0].style.visibility = 'visible';
            nameWarning = 1;
            return;
        }
    }

    // validate email

    inputsData[1].onblur = validateEmail;
    function validateEmail() {
        var email = inputsData[1].value;
        var gotDotCom = lookForCharacter(email, '.com');
        var gotEmailChar = lookForCharacter(email, '@');
        if (gotDotCom === 1 && gotEmailChar === 1) {
            emailWarning = 0;
            return;
        } else {
            errors[1].style.visibility = 'visible';
            emailWarning = 1;
            return;
        }
    }

    // validate password

    inputsData[2].onblur = validatePassword;
    function validatePassword() {
        var pass = inputsData[2].value;
        var passLength = validateLenghtOrMore(pass, 8);
        var isItANumber = pass % 1;
        var doesItHaveANumber = lookForNumber(pass);
        if (isItANumber != 0 && passLength == 1 && doesItHaveANumber == 1) {
            passowrdWarning = 0;
            return;
        } else {
            errors[2].style.visibility = 'visible';
            passowrdWarning = 1;
            return;
        }
    }

    // validate repeat password

    inputsData[3].onblur = validateRepPassword;
    function validateRepPassword() {
        var pass = inputsData[2].value;
        var rPass = inputsData[3].value;
        var isSamePass = lookForCharacter(rPass, pass);
        if (isSamePass === 1 && pass.length === rPass.length) {
            rePasswordWarning = 0;
            return;
        } else {
            errors[3].style.visibility = 'visible';
            rePasswordWarning = 1;
            return;
        }
    }

    // validate Age

    inputsData[4].onblur = validateAge;
    function validateAge() {
        var age = inputsData[4].value;
        var isItANumber = age % 1;
        if (age >= 18 && isItANumber === 0) {
            ageWarning = 0;
            return;
        } else {
            errors[4].style.visibility = 'visible';
            ageWarning = 1;
            return;
        }
    }

    // validate phone number

    inputsData[5].onblur = validatePhoneNumber;
    function validatePhoneNumber() {
        var phoneNumber = inputsData[5].value;
        var isItANumber = phoneNumber % 1;
        var result = validateLenghtOrMore(phoneNumber, 7);
        var gotSomeChar1 = lookForCharacter(phoneNumber, ' ');
        var gotSomeChar2 = lookForCharacter(phoneNumber, '-');
        var gotSomeChar3 = lookForCharacter(phoneNumber, '(');
        var gotSomeChar4 = lookForCharacter(phoneNumber, ')');
        var gotSomeChar5 = lookForCharacter(phoneNumber, '_');
        var doesItHasSomeChart = gotSomeChar1 + gotSomeChar2 + gotSomeChar3 + gotSomeChar4 + gotSomeChar5;
        if (isItANumber === 0 && doesItHasSomeChart === 0 && isItANumber.length !== 0 && result === 1) {
            phoneWarning = 0;
            return;
        } else {
            errors[5].style.visibility = 'visible';
            phoneWarning = 1;
            return;
        }
    }

    // validate Address

    inputsData[6].onblur = validateAddress;
    function validateAddress() {
        var address = inputsData[6].value;
        var addressLengthOk = validateLenghtOrMore(address, 5);
        var doesItHaveANumber = lookForNumber(address);
        var doesItHaveALetter = lookForLetter(address);
        var gotBlank = lookForCharacter(address, ' ');
        if (addressLengthOk == 1 && doesItHaveALetter == 1 && doesItHaveANumber == 1 && gotBlank == 1) {
            addressWarning = 0;
            return;
        } else {
            errors[6].style.visibility = 'visible';
            addressWarning = 1;
            return;
        }
    }

    // validate city of resident

    inputsData[7].onblur = validateCity;
    function validateCity() {
        var city = inputsData[7].value;
        var cityLength = validateLenghtOrMore(city, 3);
        if (cityLength == 1) {
            cityWarning = 0;
            return;
        } else {
            errors[7].style.visibility = 'visible';
            cityWarning = 1;
            return;
        }
    }

    // validate Postal Code

    inputsData[8].onblur = validatePostal;
    function validatePostal() {
        var postalCode = inputsData[8].value;
        var result = validateLenghtOrMore(postalCode, 3);
        if (result == 1) {
            postalWarning = 0;
            return;
        } else {
            errors[8].style.visibility = 'visible';
            postalWarning = 1;
            return;
        }
    }

    // validate DNI 

    inputsData[9].onblur = validateDni;
    function validateDni() {
        var dni = inputsData[9].value;
        var dniLength1 = validateLenghtOrMore(dni, 7);
        var dniLength2 = validateLenghtOrMore(dni, 9);
        var dniIsNumber = dni % 1;
        if (dniLength1 + dniLength2 == 1 & dniIsNumber == 0) {
            dniWarning = 0;
            return;
        } else {
            errors[9].style.visibility = 'visible';
            dniWarning = 0;
            return;
        }
    }

    // validate submit
    
    var buttonn = document.getElementsByTagName('button')[0];

    buttonn.addEventListener('click', submitVal);

    function submitVal() {
        var messageAlert = [];
        var dataOkValues = ['The next information is going to submit: '];
        if (nameWarning == 1) {
            messageAlert.push('Name: ' + errors[0].innerHTML);
            alertWarning = 1;
        }
        if (emailWarning == 1) {
            messageAlert.push('E-mail: ' + errors[1].innerHTML);
            alertWarning = 1;
        }
        if (passowrdWarning == 1) {
            messageAlert.push('Password: ' + errors[2].innerHTML);
            alertWarning = 1;
        }
        if (rePasswordWarning == 1) {
            messageAlert.push('Repeat Password: ' + errors[3].innerHTML);
            alertWarning = 1;
        }
        if (ageWarning == 1) {
            messageAlert.push('Age: ' + errors[4].innerHTML);
            alertWarning = 1;
        }
        if (phoneWarning == 1) {
            messageAlert.push('Phone Number: ' + errors[5].innerHTML);
            alertWarning = 1;
        }
        if (addressWarning == 1) {
            messageAlert.push('Address: ' + errors[6].innerHTML);
            alertWarning = 1;
        }
        if (cityWarning == 1) {
            messageAlert.push('City of residence: ' + errors[7].innerHTML);
            alertWarning = 1;
        }
        if (postalWarning == 1) {
            messageAlert.push('Postal Number: ' + errors[8].innerHTML);
            alertWarning = 1;
        }
        if (dniWarning == 1) {
            messageAlert.push('DNI: ' + errors[9].innerHTML);
            alertWarning = 1;
        }
        if (alertWarning == 1) {
            alert('Submit failed. Wrong data entry in the category of: \n' + messageAlert.join('\n'));
        } else {
            for (var i = 0; i < inputsData.length; i++) {
                dataOkValues.push(inputsData[i].value);
            }
            alert(dataOkValues.join('\n'));
        }
    }

}


