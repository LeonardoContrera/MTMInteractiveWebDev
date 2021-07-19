const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const address = document.getElementById("address");
const city = document.getElementById("city");
const state = document.getElementById("state");
const zip = document.getElementById("zip");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const cpassword = document.getElementById("cpassword");

const name_pattern = /.*[a-z].*[a-z].*/;
const email_pattern = /\w{1,}[@]{1}\w{2,}[.]{1}\w{2,}/; 
const address_pattern = /\w{1,}[ ][\w ]{1,}/; 
const city_pattern = /[A-Za-z]{1}[A-Za-z]{1}[\w ]{0,}/; 
const state_pattern = /^(AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY)$/i; 
const zip_pattern = /(^[0-9]{5}$)|(^[0-9]{5}-[0-9]{4}$)/; 
const phone_pattern = /^[1]?[(]{1}([0-9]{3})[)]{1}[ ]?[0-9]{3}[-][0-9]{4}$|^[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}$/; 
const passwordPt1_pattern = /\w{8,}/; 
const passwordPt2_pattern = /[A-Z]/; 
const passwordPt3_pattern = /\d/; 
const passwordPt4_pattern = /[^A-Za-z0-9]/; 

let error_msg = "";
let no_errors = false;

const validate = evt =>{
    error_msg = "";
    no_errors = true;

    if(cpassword.value !== password.value){
        if(cpassword.value !== "")
        {
            cpasswordMyErrors.innerHTML = "Must match password";
        }
        else{
            cpasswordMyErrors.innerHTML = "";
        }
        no_errors = false;
    }
    else{
        cpasswordMyErrors.innerHTML = "";
    }

    if(!passwordPt2_pattern.test(password.value) || !passwordPt3_pattern.test(password.value) || !passwordPt4_pattern.test(password.value)){
        if(passwordPt1_pattern.test(password.value)){
            passwordMyErrors.innerHTML = `Password must have at least 1 capital letter, number, and special character`;
            no_errors = false;
        }
    }
    else{
        passwordMyErrors.innerHTML = "";
    }
    
    if(!passwordPt1_pattern.test(password.value)){
        if(password.value !== "")
        {
            passwordMyErrors.innerHTML = `Password must be at least 8 characters long`;
        }
        no_errors = false;
    }

    if(!phone_pattern.test(phone.value)){
        if(phone.value !== "")
        {
            phoneMyErrors.innerHTML = `Allowed formats for phone numbers are but no other formats:
            1(801)555-1212, 
            1(801) 555-1212, 
            (801)555-1212, 
            (801) 555-1212, 
            801-555-1212, 
            8015551212`;
        }
        else{
            phoneMyErrors.innerHTML = "";
        }
        no_errors = false;
    }
    else{
        phoneMyErrors.innerHTML = "";
    }

    if(!zip_pattern.test(zip.value)){
        if(zip.value !== "")
        {
            zipMyErrors.innerHTML = "Zip Code must be 5 digits or 5 digits plus a '-' followed by 4 digits (i.e. 84111 or 84111-0294)";
        }
        else{
            zipMyErrors.innerHTML = "";
        }
        no_errors = false;
    }
    else{
        zipMyErrors.innerHTML = "";
    }

    if(!state_pattern.test(state.value)){
        if(state.value !== "")
        {
            stateMyErrors.innerHTML = "Enter a state's valid abbreviation";
        }
        else{
            stateMyErrors.innerHTML = "";
        }
        no_errors = false;
    }
    else{
        stateMyErrors.innerHTML = "";
    }
    
    if(!city_pattern.test(city.value)){
        if(city.value !== "")
        {
            cityMyErrors.innerHTML = "City must contain at least two letters";
        }
        else{
            cityMyErrors.innerHTML = "";
        }
        no_errors = false;
    }
    else{
        cityMyErrors.innerHTML = "";
    }

    if(!address_pattern.test(address.value)){
        if(address.value !== "")
        {
            addressMyErrors.innerHTML = "Address must have at least one character, followed by a space and at least one or more other characters";
        }
        else{
            addressMyErrors.innerHTML = "";
        }
        no_errors = false;
    }
    else{
        addressMyErrors.innerHTML = "";
    }

    if(!email_pattern.test(email.value)){
        if(email.value !== "")
        {
            emailMyErrors.innerHTML = "Email must have at least one character, followed by an '@', then at least two characters, followed by a dot, and then at least two more characters";
        }
        else{
            emailMyErrors.innerHTML = "";
        }
        no_errors = false;
    }
    else{
        emailMyErrors.innerHTML = "";
    }

    if(!name_pattern.test(lname.value)){
        if(lname.value !== "")
        {
            lnameMyErrors.innerHTML = "Last Name needs to be a minimum of two letters.";
        }
        else{
            lnameMyErrors.innerHTML = "";
        }
        no_errors = false;
    }
    else{
        lnameMyErrors.innerHTML = "";
    }

    if(!name_pattern.test(fname.value)){
        if(fname.value !== "")
        {
            fnameMyErrors.innerHTML = "First Name needs to be a minimum of two letters.";
        }
        else{
            fnameMyErrors.innerHTML = "";
        }
        no_errors = false;
    }
    else{
        fnameMyErrors.innerHTML = "";
    }
    

}

const mySubmit = () => {
    validate();
    return no_errors;
}

fname.addEventListener('input', validate);
lname.addEventListener('input', validate);
email.addEventListener('input', validate);
address.addEventListener('input', validate);
city.addEventListener('input', validate);
state.addEventListener('input', validate);
zip.addEventListener('input', validate);
phone.addEventListener('input', validate);
password.addEventListener('input', validate);
cpassword.addEventListener('input', validate);