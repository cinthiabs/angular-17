import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteComponent } from './componente-variables/componente.component';
import { Componente02Component } from './componente02-event-click/componente02.component';
import { Componente03Component } from './componente03-image/componente03.component';
import { Componente04Component } from './componente04-function-ngif/componente04.component';
import { Componente05Component } from './componente05-ngfor/componente05.component';
import { Componente06Component } from './componente06-ngswithcase/componente06.component';
import { Componente07Component } from './componente07-ngstyle/componente07.component';
import { Componente08Component } from './componente08-control-flow/componente08.component';
import { Componente09Component } from './componente09-form-ngmodel/componente09.component';
import { Componente10Component } from './componente10/componente10.component';
import { GrudAngularComponent } from './grud-angular/grud-angular.component';
import { Componente11Component } from './componente11-localStorage/componente11.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponenteComponent,Componente02Component,Componente03Component,
    Componente04Component,Componente05Component, Componente06Component,Componente07Component,
    Componente08Component, Componente09Component, Componente10Component, GrudAngularComponent,
    Componente11Component ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-treinamento';
}
