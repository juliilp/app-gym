import { Component, Input } from '@angular/core';
import { Ejercicios } from '../../models/ArrayGym.model';

@Component({
  selector: 'app-card-ejercicio',
  imports: [],
  templateUrl: './card-ejercicio.component.html',
})
export class CardEjercicioComponent {
  @Input()
  nombreEjercicio: Ejercicios['nombreEjercicio'] = '';
  @Input()
  repiticionesYSeries: Ejercicios['repiticionesYSeries'] = '';
  @Input()
  pesoUtilizado: Ejercicios['pesoUtilizado'] = '';
  @Input()
  masInformacion: Ejercicios['masInformacion'] = '';
  @Input()
  imagenGif: Ejercicios['imagenGif'] = '';
}
