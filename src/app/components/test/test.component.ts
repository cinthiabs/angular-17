import { Component, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  @Input() mensagemRecebida : string = "";
  @Output() mensagemEnviada = new EventEmitter<string>()

  EnviarParaApp(){
    this.mensagemEnviada.emit('Estou sendo Obs!');
  }
}
