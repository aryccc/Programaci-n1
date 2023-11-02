document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtén los valores ingresados por el usuario
        const username = usernameInput.value;
        const password = passwordInput.value;

        // Verifica el usuario y la contraseña
        if (username === "agus" && password === "1414", username === "tomas" && password === "1234") {
            alert("Inicio de sesión exitoso");
            window.location.href = "Html.html";
            
        } else {
            // Cuando ingresen mal el usuario o contraseña saltara el alert
            alert("Usuario o contraseña incorrecta");
        }
    });
});
//Hace visible la contraseña
const visi = document.getElementById("visible");
    
    document.addEventListener("change", (e)=>{
        if(e.target === visi){
            if(visi.checked === false) password.type = "password";
            else password.type = "text";
        }
    });