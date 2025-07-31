import { Injectable } from '@angular/core';
import { arraygym } from '../assets/arraygym';
import { Ejercicios } from '../models/ArrayGym.model';
@Injectable({
  providedIn: 'root',
})
export class EjerciciosServiceService {
  arrayGym = arraygym;
  Pecho: Ejercicios[] = [];
  Tríceps: Ejercicios[] = [];
  Espalda: Ejercicios[] = [];
  Biceps: Ejercicios[] = [];
  Hombros: Ejercicios[] = [];
  Piernas: Ejercicios[] = [];
  Abdominales: Ejercicios[] = [];
  constructor() {
    for (const objEjercicio of this.arrayGym[0].ejercicios) {
      if (objEjercicio.tipoEjercicio == 'Pecho') {
        this.Pecho.push(objEjercicio);
      }
      if (objEjercicio.tipoEjercicio == 'Tríceps') {
        this.Tríceps.push(objEjercicio);
      }
    }

    for (const objEjercicio of this.arrayGym[1].ejercicios) {
      if (objEjercicio.tipoEjercicio == 'Espalda') {
        this.Espalda.push(objEjercicio);
      }
      if (objEjercicio.tipoEjercicio == 'Biceps') {
        this.Biceps.push(objEjercicio);
      }
    }

    for (const objEjercicio of this.arrayGym[2].ejercicios) {
      if (objEjercicio.tipoEjercicio == 'Hombros') {
        this.Hombros.push(objEjercicio);
      }
      if (objEjercicio.tipoEjercicio == 'Piernas') {
        this.Piernas.push(objEjercicio);
      }
    }
  }
}
