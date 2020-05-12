import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Array<Frase> = FRASES;
  public instrucao: string = String('Traduza a frase:');

  public rodada = 0;
  public progresso = 0;
  public frase: Frase;
  public resposta: string;
  public tentativas = 3;
  @Output()
  public encerrarJogo: EventEmitter<string> = new EventEmitter();
  constructor() {
    this.atualizarFrase();
   }

  ngOnInit(): void {
    this.resposta = '';
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (resposta.target as HTMLInputElement).value;
  }

  public verificarResposta(): void {
    console.log(this.frase.frasePtbr + this.resposta);
    if (this.frase.frasePtbr === this.resposta){
      if (this.rodada === 3){
        this.progresso += 100 / this.frases.length;
        this.encerrarJogo.emit('Vitoria');
      } else {
        this.rodada++;
        this.progresso += 100 / this.frases.length;
        this.atualizarFrase();
        this.resposta = '';
      }

    }else {
      if (this.tentativas === 0){
        this.encerrarJogo.emit('Derrota');
      } else {
        this.tentativas--;
      }
    }
}

private atualizarFrase() {
  this.frase = this.frases[this.rodada];
}


}
