import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person } from '../model/Person';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grud-angular',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './grud-angular.component.html',
  styleUrl: './grud-angular.component.css'
})
export class GrudAngularComponent {

  //Obj de formulario
  formulario = new FormGroup({
    nome: new FormControl('',[Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null,[Validators.required, Validators.min(0), Validators.max(120)]),
    cidade: new FormControl('',[Validators.required, Validators.minLength(3)])
  });

  // Visibilidade dos botoes
  btnCadastrar: boolean = true;

  indice: number = -1;

  //Vetor
  vetor:Person[] = [];

  //funcao cadastro
  cadastrar(){

    //cadastro no vetor
    this.vetor.push(this.formulario.value as Person);

    //limpar os inputs
    this.formulario.reset();

    //visualizar  table via console
    console.table(this.vetor)
  }
  selecionar(id: number){

    this.indice = id;

    //atribuir os dados da pessoa no formulario
    this.formulario.setValue({
      nome : this.vetor[id].nome,
      idade: this.vetor[id].idade,
      cidade: this.vetor[id].cidade
    })

    this.btnCadastrar = false;
  }
}
