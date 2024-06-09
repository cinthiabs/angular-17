import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-grud-angular',
  standalone: true,
  imports: [ReactiveFormsModule],
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
}
