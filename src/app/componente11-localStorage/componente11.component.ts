import { Component } from '@angular/core';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {
  session: any;
  saveData(){
    let data = {id: 1, name:'cinthia'};
    localStorage.setItem('session',JSON.stringify(data));
  }


  loadData(){
    let data = localStorage.getItem('session');
    this.session = JSON.parse(data);
  }
}
