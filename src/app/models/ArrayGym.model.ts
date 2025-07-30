interface Ejercicios {
  tipoEjercicio:
    | 'Pecho'
    | 'Tríceps'
    | 'Espalda'
    | 'Biceps'
    | 'Hombros'
    | 'Piernas'
    | 'Abdominales';
  nombreEjercicio: string;
  repiticionesYSeries: string;
  pesoUtilizado: string;
  masInformacion: string;
  imagenGif: any;
}

export interface DiaGym {
  dia: '1' | '2' | '3';
  ejercicios: Ejercicios[];
}
