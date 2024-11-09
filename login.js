const username = document.getElementsByClassName("name")[0];
const password = document.getElementsByClassName("password")[0];
const email=document.getElementsByClassName("email")[0];


document.querySelector("form").addEventListener("submit", function(event) {
    if (!validateForm()) {
        event.preventDefault();
    }
});

function validateForm() {
    if (username.value === "") {
        alert("Username is required");
        return false;
    } else if (password.value.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
   
    } 

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
        alert("Please enter a valid email address");
        return false;
    }

   
    return true;

    
    
   

}
