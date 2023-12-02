
 function logar(){

        var login = document.getElementById('Usuario').value;
        var senha = document.getElementById('Senha').value;
        
        if(login == "admin" && senha == "admin"){
            location.href = "home.html";
        }else {
        alert('Usuario ou senha Incorretos!');
        }

}