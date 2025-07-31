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
  AbdominalesDia1: Ejercicios[] = [];
  AbdominalesDia2: Ejercicios[] = [];
  AbdominalesDia3: Ejercicios[] = [];

  activeTab =
    'px-4 py-2 rounded-lg bg-pink-700 text-white font-semibold shadow cursor-pointer';
  inactiveTab =
    'px-4 py-2 rounded-lg bg-gray-100 text-gray-800 hover:bg-pink-100 transition cursor-pointer';

  cssDia = 'text-sm text-gray-500';
  cssTituloEjercicio =
    'text-xl font-bold text-pink-700 border-b border-pink-200 pb-1';
  constructor($ejerciciosService: EjerciciosServiceService) {
    this.ejerciciosService = $ejerciciosService.arrayGym;
    this.Pecho = $ejerciciosService.Pecho;
    this.AbdominalesDia1 = $ejerciciosService.AbdominalesDia1;
    this.AbdominalesDia2 = $ejerciciosService.AbdominalesDia2;
    this.AbdominalesDia3 = $ejerciciosService.AbdominalesDia3;
    this.Biceps = $ejerciciosService.Biceps;
    this.Triceps = $ejerciciosService.Tríceps;
    this.Espalda = $ejerciciosService.Espalda;
    this.Hombros = $ejerciciosService.Hombros;
    this.Piernas = $ejerciciosService.Piernas;
  }
}
