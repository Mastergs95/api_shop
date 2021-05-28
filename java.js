function createAccount() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cfpassword = document.getElementById("cfpassword").value;
    console.log (1);

    if (password == cfpassword) {
        localStorage.setItem("account", email + "|" + password );
        window.location.replace("index.html");
        console.log (2);
    }
    else{
        alert("Password is not equal!")
        console.log (3);
    }

}



   

var formersal;

function now()
{
    formersal = document.getElementById("Saldo").value;
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


function openQiosk(){
    document.getElementById('teste').src.toString()=document.getElementById("qisk").src;
}

  function varmodal(){

  
    // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

  function varform(){

  
    // Get the modal
    var form = document.getElementById("form");
    
    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    btn.onclick = function() {
      form.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      form.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

function CreateConta(){


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let passwordConfirmed = document.getElementById("passwordConfirmed").value;
    let tipoConta = document.getElementById("tipoConta").value;
    let saldo = document.getElementById("Saldo").value;
    let pergunta = document.getElementById("pergunta").textContent;
    let resposta = document.getElementById("perguntaSeguranca").value;

    console.log(name, email, passwordConfirmed, password, tipoConta,saldo);
    
    console.log(name + " " + email + " " + password + " " + tipoConta + " " + saldo + " " + pergunta + " " + resposta);
   fetch('http://127.0.0.1:8000/api/register', {
       method: 'POST',
       headers: {
       'Accept': 'application/json',
       'Content-type': 'application/json',
       },
       body: JSON.stringify({
            name:name,
           email: email,
           password: password,
           tipoConta: tipoConta,
           saldo: saldo,
            pergunta: pergunta,
            resposta: resposta
       })
   }).then(response => response.json())
   .then((responseJson) => checkConta(responseJson));
}

function numchecker()
{
    let saldo = document.getElementById("Saldo").value;

    if (isNaN(saldo ))
        document.getElementById("Saldo").value = formersal;
    formersal = document.getElementById("Saldo").value;
}

function profile()
{
    console.log("teste");
    formersal = null;
    getUser();
}

function numchecker1()
{
    let num = document.getElementById("actnum").value;

    if (isNaN(num)|| num>50)
    {
        alert("Quantidade máxima de 50 unidades");
        document.getElementById("actnum").value = formersal;
    }
    formersal = document.getElementById("actnum").value;
}

function checkLogin(response){
    console.log(response);
    console.log(String(response.token).length);
    if (String(response.token).length > 30){

       localStorage.setItem("token",response.token);
        window.location.replace("main.html")

    }else{
        alert("Login Inválido");
      
    }
}

function checkConta(response){
    console.log(response.message);
    if (response.message=="CREATED"){
        window.location.replace("index.html")
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

/*function recovery(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cfpassword = document.getElementById("cfpassword").value;
    let texto = document.getElementById("texto").value;

    let LoginAccountFromDB = localStorage.getItem("accountrc");
    console.log(LoginAccountrcFromDB);
    let LoginAccount = email + "|" + password + "|" + texto;
    console.log(LoginAccountrc);

    if (LoginAccountrc == LoginAccountrcFromDB) {
        window.location.replace("index.html");
    }
    else {
        alert("As suas credenciais não coincidem")
    }
}*/



function accountLogin() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let LoginAccountFromDB = localStorage.getItem("account");
    console.log(LoginAccountFromDB);
    let LoginAccount = email + "|" + password;
    console.log(LoginAccount);

    if (LoginAccount == LoginAccountFromDB) {
        window.location.replace("main.html");
    }
    else {
        alert("Your credentials doesn't match any stored account!")
    }

}

function logOut(){
    window.location.replace("index.html");
}
var peixe=0;
var carne=0;
var sob=0;


function queryPrice(id,nome,preco){

    localStorage.setItem("name", nome );
    localStorage.setItem("preco", preco );
    
    if (id=="p1"){
        peixe=20;
        document.getElementById("pp").textContent="Prato escolhido: "+document.getElementById("p1").textContent;
    }
    else if(id=="p2"){
        peixe=17,55;
        document.getElementById("pp").textContent="Prato escolhido: "+document.getElementById("p2").textContent;
    } else if(id=="p3"){
        peixe=25,75;
        document.getElementById("pp").textContent="Prato escolhido: "+document.getElementById("p3").textContent;
    }else if(id=="p4"){
        peixe=30,25;
        document.getElementById("pp").textContent="Prato escolhido: "+document.getElementById("p4").textContent;
    }else if(id=="p5"){
        peixe=19,95;
        document.getElementById("pp").textContent="Prato escolhido: "+document.getElementById("p5").textContent;
    }


    /*Carne*/
    if (id=="p6"){
        carne=25,75;
        document.getElementById("pp1").textContent="Prato escolhido: "+document.getElementById("p6").textContent;
    }
    else if(id=="p7"){
        carne=17,55;
        document.getElementById("pp1").textContent="Prato escolhido: "+document.getElementById("p7").textContent;
    } else if(id=="p8"){
        carne=25,75;
        document.getElementById("pp1").textContent="Prato escolhido: "+document.getElementById("p8").textContent;
    }else if(id=="p9"){
        carne=19,99;
        document.getElementById("pp1").textContent="Prato escolhido: "+document.getElementById("p9").textContent;
    }else if(id=="p10"){
        carne=27,25;
        document.getElementById("pp1").textContent="Prato escolhido: "+document.getElementById("p10").textContent;
    }

    /*Sobremesa*/
    if (id=="p11"){
        sob=4,75;
        document.getElementById("pp2").textContent="Sobremesa escolhida: "+document.getElementById("p11").textContent;
    }
    else if(id=="p12"){
        sob=4,75;
        document.getElementById("pp2").textContent="Sobremesa escolhida: "+document.getElementById("p12").textContent;
    } else if(id=="p13"){
        sob=3,50;
        document.getElementById("pp2").textContent="Sobremesa escolhida: "+document.getElementById("p13").textContent;
    }else if(id=="p14"){
        sob=5,25;
        document.getElementById("pp2").textContent="Sobremesa escolhida: "+document.getElementById("p14").textContent;
    }else if(id=="p15"){
        sob=3,75;
        document.getElementById("pp2").textContent="Sobremesa escolhida: "+document.getElementById("p15").textContent;
    }
    
}


function fatura(){
    document.getElementById("ft1").textContent=document.getElementById("pp").textContent+"  "+peixe+"€",
    document.getElementById("ft2").textContent=document.getElementById("pp1").textContent+"  "+carne+"€";
    document.getElementById("ft3").textContent=document.getElementById("pp2").textContent+"  "+sob+"€";
    if(!(peixe==0)){
        document.getElementById("del").style.display="block";
    }else{
        document.getElementById("del2").style.display="none";
    }
    if(!(carne==0)){
        document.getElementById("del1").style.display="block";
    }else{
        document.getElementById("del2").style.display="none";
    }
    if (!(sob==0)){
        document.getElementById("del2").style.display="block";
    }
    else{
        document.getElementById("del2").style.display="none";
    }
}

function load () {
    var list = document.getElementById('pp')
  }

function apagar(elemento){


    if(elemento=="1"){
        document.getElementById("ft1").textContent="Prato escolhido: ";
        document.getElementById("pp").textContent="Prato escolhido: ";
        peixe=0;
    }
    if(elemento=="2"){
        document.getElementById("ft2").textContent="Prato escolhido: ";
        document.getElementById("pp1").textContent="Prato escolhido: ";
        carne=0;
    }
    if(elemento=="3"){
        document.getElementById("ft3").textContent="Sobremesa escolhida:";
        document.getElementById("pp2").textContent="Sobremesa escolhida: ";
        sob=0;
    }
  }

var tl=0;
var p=150;
function querySaldo(){
    var tl=0;
    var p=150;
    tl=peixe+carne+sob;
    p=p-tl;
    document.getElementById("sald").textContent="Saldo Atual: "+p;
}

function addProduct(){
        let token= localStorage.getItem("token");
        let name = localStorage.getItem("name");
        let preco = localStorage.getItem("preco");
        let qnt = document.getElementById("actnum").value;
        console.log(name,preco,qnt);
        
    
       fetch('http://127.0.0.1:8000/api/buyProduct', {
           method: 'POST',
           headers: {
           'Accept': 'application/json',
           'Content-type': 'application/json',
           'Authorization': 'Bearer '+ token,
           },
           body: JSON.stringify({
            name:name,
            preco:preco, 
            qnt:qnt,
           })
       }).then(response => response.json())
       .then((responseJson) => console.log(responseJson));
    }

    function getUser(){
    
        let token= localStorage.getItem("token");

       fetch('http://127.0.0.1:8000/api/profile', {
           method: 'GET',
           headers: {
           'Accept': 'application/json',
           'Content-type': 'application/json',
           'Authorization': 'Bearer '+ token,
           },
           
       }).then(response => response.json())
       .then((responseJson) => checkUser(responseJson));
      
    }

    function checkUser(response){
    
        document.getElementById("user").innerHTML= response.user.name;
        document.getElementById("fname").value= response.user.name;
        document.getElementById("lname").value= response.user.email;
        document.getElementById("pass").value= response.user.password;
        document.getElementById("conta").value= response.user.tipoConta;
        document.getElementById("per").value= response.user.pergunta;
        document.getElementById("res").value= response.user.resposta;
        document.getElementById("sal").value= response.user.saldo;
        console.log(response.user.name);
    }

    var l=true;
    function showProfile(){
        
        var form = document.getElementById("form");
        if(l==true){
            
        form.style.display = "block";
        l=false;
        } else{
            form.style.display = "none";
            l=true;
        }
      
        
       
    }

 
