
const validate = (email, password) =>{

    const isEmailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    
    if(!isEmailValid) return "Error! Email Id is not valid";
    if(!isPasswordValid) return `Error! Password is not valid.`;

    return null;
}


export default validate;