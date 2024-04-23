import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',

})
export class CadastroComponent implements OnInit {

  ngOnInit(): void {
    document.getElementById("botaoCadastrar")!.addEventListener("click", this.validarFormulario);
  }

  public validarFormulario() {
      var nome: any = (document.getElementById("nome") as any).value;
      var email: any = (document.getElementById("email") as any).value;
      var senha: any = (document.getElementById("senha") as any).value;
      var senhaConfirmacao: any = (document.getElementById("senhaConfirmacao") as any).value;
      var concordo: any = (document.getElementById("concordo") as any).checked;

      console.log(senha);
      console.log(senhaConfirmacao);

      if(nome === ""){
          alert("Insira seu nome.");
          return false;
      } else if (email === ""){
          alert("Insira seu email.");
          return false;
      } else if (senha === ""){
          alert("Crie sua senha.");
          return false;
      }else if (senha !== senhaConfirmacao){
          alert("As senhas não são iguais.");
          return false;
      }

      alert("As informções foram validadas, OK");
      return true;
  }
}
