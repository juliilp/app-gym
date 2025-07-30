import { Injectable } from '@angular/core';
import { arraygym } from '../assets/arraygym';
@Injectable({
  providedIn: 'root',
})
export class EjerciciosServiceService {
  arrayGym = arraygym;
  constructor() {}
}
