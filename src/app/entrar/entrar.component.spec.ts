import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html'
})

export class EntrarComponent implements OnInit {

  ngOnInit(): void {
    document.getElementById("loginForm")!.addEventListener("submit", this.validarLogin);
  }

  public validarLogin(event: { preventDefault: () => void; }) {
    event.preventDefault();

    var email = (document.getElementById("email") as any).value;
    var senha = (document.getElementById("senha") as any).value;
    var lembrarSenha = (document.getElementById("lembrarSenha") as any).checked;

    if (email === "") {
      alert("Insira seu Email");
      return false;
    } else if (senha === "") {
      alert("Insira sua Senha");
      return false;
    } else {
      alert("Tudo Certo");
      return true;
    }
  }
}







