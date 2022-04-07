var nome = document.getElementById("txtNome");
var telefone = document.getElementById("txtTel");
var email = document.getElementById("txtEmail");

var NOMES = document.getElementById("nomes");
var TELEFONE = document.getElementById("telefone");
var EMAIL = document.getElementById("email");

const agenda = [];
let user = [];

function salvardados() {
  user.push(nome.value); 
  user.push(telefone.value);
  user.push(email.value);
  var criarLinha = document.createElement("li");
  var conteudoNovo = document.createTextNode(user);
  criarLinha.appendChild(conteudoNovo);
  document.getElementById('linhas').appendChild(criarLinha);
  agenda.push(user);
  user = [];
  console.log(agenda);


}