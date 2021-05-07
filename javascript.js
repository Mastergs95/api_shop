function CreateConta(){


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let passwordConfirmed = document.getElementById("passwordConfirmed").value;
    let tipoConta = document.getElementById("tipoConta").value;
    let saldo = document.getElementById("saldo").value;

    console.log(name, email, passwordConfirmed, password, tipoConta,saldo);

   fetch('http://127.0.0.1:8000/api/register', {
       method: 'POST',
       headers: {
       'Accept': 'application/json',
       'Content-type': 'application/json',
       },
       body: JSON.stringify({
           name: name,
           email: email,
           password: password,
           password_confirmation: passwordConfirmed,
           tipoConta: tipoConta,
           saldo: saldo
       })
   }).then(response => response.json())
   .then((responseJson) => checkConta(responseJson));
}
function checkConta(response){
    console.log(response.message);
    if (response.message=="CREATED"){
        window.location.replace("main.html")
    }else{
        alert("Resgisto Inválido")
    }
}


function login(){

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    console.log(email ,password);

    fetch('http://127.0.0.1:8000/api/login', {
       method: 'POST',
       headers: {
       'Accept': 'application/json',
       'Content-type': 'application/json',
       },
       body: JSON.stringify({
        
        email: email,
        password: password,
        
    })
  
    }).then(response => response.json())
    .then((responseJson) => checkLogin(responseJson))
    
   
}

function checkLogin(response){
    console.log(response);
    console.log(String(response.token).length);
    if (String(response.token).length > 30){

       
        window.location.replace("principal.html")

    }else{
        alert("Login Inválido");
      
    }
}

