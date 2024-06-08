import { Component } from '@angular/core';

@Component({
  selector: 'app-componente',
  standalone: true,
  imports: [],
  templateUrl: './componente.component.html',
  styleUrl: './componente.component.css'
})
export class ComponenteComponent {

  // Declara uma propriedade 'nome' do tipo string e a inicializa com o valor 'Cinthia'
  nome: string = 'Cinthia';
    
  // Declara uma propriedade 'idade' do tipo number e a inicializa com o valor 25
  idade: number = 25;

  // Declara um array string
  nomes: string[] = ['Alice', 'Bob', 'Carlos'];
  
  // Declara um array string
  idades: number[] = [20, 30, 40];
}
