import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-curso-aula';
  nome = 'Cinthia'
  nomes = ['Caio','Fernanda','Lucas']

  vaiAparecer = true;
  fonte = 40;
  cor = 'blue';

  meMostre(){
    alert('Estou mostrando');
  }
  mensagem ="Estou aquiiiii";

  meMostreApp(mensagem:string){
    alert(mensagem);
  }
}
