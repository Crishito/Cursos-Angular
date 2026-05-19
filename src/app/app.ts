import { Component } from '@angular/core';
import { PerfilAlumno } from './perfil-alumno/perfil-alumno';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PerfilAlumno],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}