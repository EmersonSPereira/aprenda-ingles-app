import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public coracaoVazio: string = String('assets/coracao_vazio.png');
  public coracaoCheio: string = String('assets/coracao_cheio.png');

  public primeiraChamada = false;

  @Input()
  public coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  @Input()
  public tentativas: number;
  constructor() { }
  ngOnChanges(): void {
    if (this.primeiraChamada){
      this.coracoes[this.tentativas].cheio = false;
    }
    this.primeiraChamada = true;
  }

  ngOnInit(): void {
  }

}
