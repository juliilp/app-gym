import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjerciciosServiceService } from './services/ejercicios-service.service';
import { DiaGym, Ejercicios } from './models/ArrayGym.model';
import { CardEjercicioComponent } from './components/card-ejercicio/card-ejercicio.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardEjercicioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  dia = 1;

  seleccionarDia(diaSelect: 1 | 2 | 3) {
    this.dia = diaSelect;
  }
  title = 'app-gym';
  ejerciciosService: DiaGym[];
  Pecho: Ejercicios[] = [];
  Triceps: Ejercicios[] = [];
  Espalda: Ejercicios[] = [];
  Biceps: Ejercicios[] = [];
  Hombros: Ejercicios[] = [];
  Piernas: Ejercicios[] = [];
  Abdominales: Ejercicios[] = [];
  constructor($ejerciciosService: EjerciciosServiceService) {
    this.ejerciciosService = $ejerciciosService.arrayGym;
    this.Pecho = $ejerciciosService.Pecho;
    this.Abdominales = $ejerciciosService.Abdominales;
    this.Biceps = $ejerciciosService.Biceps;
    this.Triceps = $ejerciciosService.Tríceps;
    this.Espalda = $ejerciciosService.Espalda;
    this.Hombros = $ejerciciosService.Hombros;
    this.Piernas = $ejerciciosService.Piernas;
  }
}
