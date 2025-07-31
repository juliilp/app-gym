import { Component, input, Input } from '@angular/core';
import { Ejercicios } from '../../models/ArrayGym.model';

@Component({
  selector: 'app-card-ejercicio',
  imports: [],
  templateUrl: './card-ejercicio.component.html',
})
export class CardEjercicioComponent {
  nombreEjercicio = input<Ejercicios['nombreEjercicio']>('');
  repiticionesYSeries = input<Ejercicios['repiticionesYSeries']>('');
  pesoUtilizado = input<Ejercicios['pesoUtilizado']>('');
  masInformacion = input<Ejercicios['masInformacion']>('');
  imagenGif = input<Ejercicios['imagenGif']>('');
}
