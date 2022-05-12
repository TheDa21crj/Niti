document.getElementById("Login").addEventListener("click", function(e) {
    const UserNameInpValue = document.getElementById("UserNameInp").value;
    const PassInpValue = document.getElementById("PasswordInp").value;
    if (PassInpValue === "" || UserNameInpValue === "") {
        console.log("Empty");
    } else {
        console.log(UserNameInpValue + "\t\t" + PassInpValue);
    }
});