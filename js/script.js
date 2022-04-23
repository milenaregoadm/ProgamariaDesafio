document.querySelector("#botaoEnviar").addEventListener("click", validaFormulario)

function validaFormulario(){

  if(document.querySelector("#nome").value != "" &&
      document.querySelector("#email").value != "" &&
      document.querySelector("#telefone").value != "" ){
    alert("It's done. You will receive news soon")
   }else{
    alert("Please.Fill in email and phone")
   }
 }
