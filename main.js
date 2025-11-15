// Registration Form Validation
function validateRegister() {
    let name = document.getElementById("regName").value;
    let email = document.getElementById("regEmail").value;
    let pass = document.getElementById("regPass").value;

    if (name === "" || email === "" || pass === "") {
        alert("Please fill all fields");
        return false;
    }

    alert("Registration Successful (Slipcart)");
    return true;
}

// Login Form Validation
function validateLogin() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPass").value;

    if (email === "" || pass === "") {
        alert("Please enter Email and Password");
        return false;
    }

    alert("Login Successful! Welcome to Slipcart");
    return true;
}