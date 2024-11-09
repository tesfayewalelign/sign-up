document.querySelector(".forgot-password-link").addEventListener("click", function() {
    document.querySelector(".forgot-password-form").style.display = "block"; 
});


document.getElementById("sendResetLink").addEventListener("click", function() {
    const email = document.getElementById("resetEmail").value;


    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email)) {
        alert(`A password reset link has been sent to ${email}.`);
        
    } else {
        alert("Please enter a valid email address.");
    }
});