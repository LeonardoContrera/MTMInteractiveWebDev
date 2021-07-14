const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

const myErrors = document.getElementById("myErrors");

let error_msg = "";
let no_errors = true;

const name_pattern = /.*[a-z].*[a-z].*/

const validate = evt =>{
    error_msg = "";
    no_errors = true;

    if(!name_pattern.test(lname.value)){
        error_msg = 'Last Name needs to be a minimum of two letters. <br />';
        no_errors = false;
    }
    
    if(!name_pattern.test(fname.value)){
        error_msg = 'First Name needs to be a minimum of two letters. <br />';
        no_errors = false;
    }

    myErrors.innerHTML = error_msg;
}

const mySubmit = () => {
    validate();
    return no_errors;
}

fname.addEventListener('input', validate)
lname.addEventListener('input', validate)