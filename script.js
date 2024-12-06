function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "" || password === "") {
        alert("Por favor, preencha ambos os campos.");
        return false;
    }
    return true;
}
