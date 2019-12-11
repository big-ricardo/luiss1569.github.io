async function mensagem() {
    let nome = document.getElementsByName("Nome")[0].value;
    let email = document.getElementsByName("Email")[0].value;
    let cidade = document.getElementsByName("Cidade")[0].value;
    let mensagem = document.getElementsByName("Mensagem")[0].value;
  
    if (
      email == "E-mail*" ||
      nome == "Seu Nome*" ||
      cidade == "Cidade*" ||
      mensagem == "" ||
      mensagem == "Mensagem"
    ) {
      alert("Preencha todos os campos");
    } else {
      const response = await axios.post('https://getjobserver.herokuapp.com/fale', {nome,email,cidade,mensagem})
      if (response) {
        document.querySelector(".form").classList.add("active")
        setTimeout(() => {
          document.querySelector('.menEnv').classList.remove("some")
          document.querySelector(".form").classList.add("some")
        }, 1000);
        setTimeout(() => {
          document.querySelector(".menEnv").classList.remove("active")
        }, 1500);
      } else {
        alert("Mensagem não Enviada!");
      }
    }
  }