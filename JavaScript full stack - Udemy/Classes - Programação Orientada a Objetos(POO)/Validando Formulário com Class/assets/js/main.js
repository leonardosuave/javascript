class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  //Método só com eventos.
  eventos() {
    this.formulario.addEventListener('submit', e => {
      this.handleSubmit(e)
    });

  }

  handleSubmit(e) {
    e.preventDefault(); //Para que o formulário não seja enviado.
    const checkCamposValidos = this.checkCamposValidos();
    const senhasValidas = this.senhasValidas();

    if(checkCamposValidos && senhasValidas) {
      alert('Formulário enviado');
      this.formulario.submit();
    }
  }

  senhasValidas() {
    let valid = true; //flag

    const senha = this.formulario.querySelector('.senha')
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repetirSenha.value){
      valid = false;
      this.criaErro(senha, 'As senhas precisam ser iguais');
      this.criaErro(repetirSenha, 'As senhas precisam ser iguais');
    };

    if(senha.value.length < 6 || senha.value.length > 12) {
      this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres.')
      valid =  false;
    }   

    return valid;
  }

  checkCamposValidos() {
    let valid = true; //flag

    //PARA EVITAR QUE ACUMULE MSG DE ERRO EM UM MESMO CAMPO.
    for(let errorText of this.formulario.querySelectorAll('.error-text')) { //Vai pegar de todos os campos que ja possui a class error-text adicionado quando deu erro.
      errorText.remove() //Para remover novos avisos de erro em um mesmo campo.
    }

    //
    for(let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerHTML //Retorna o elemento anterior referente ao mesmo nivel do campo (Neste caso retorna os label do html).

      //Campo em branco
      if(!campo.value) {//Se não possui escrito, volta False (!false = true) e então ativa os comandos abaixo.
        this.criaErro(campo, `Campo ${label} não pode estar em branco.`)
        valid = false;
      }

      if(campo.classList.contains('cpf')) {
        if(!this.validaCPF(campo)) valid = false;
      }

      if(campo.classList.contains('usuario')) {
        if(!this.validaUsuario(campo)) valid = false;
      }
    }

    return valid //retorna o primeiro valid = true especificado na let valid.
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valid = true;

    //Checar quantidade de caracteres do usuário
    if(usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.')
      valid =  false;
    }

    //Checar o tipo de caracteres do usuário
    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e/ou números')
      valid =  false;
    }
    return valid;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if(!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido')
      return false
    }
    return true
  }

  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text'); //add classe para os campos em branco.
    campo.insertAdjacentElement('afterend', div)
  }
}

const valida = new ValidaFormulario();
