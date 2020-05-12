import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public mensagem: string;
  public jogoEmAndamento = true;
  public finalizarGame(mensagem: string): void {
    this.mensagem = mensagem;
    this.jogoEmAndamento = false;
  }

  public reiniciarJogo(): void {
    this.mensagem = undefined;
    this.jogoEmAndamento = true;
  }
}
