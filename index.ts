// Clase que representa un tubo fluorescente individual
class Tube {
  usedHours: number;

  constructor() {
    this.usedHours = rand();
  }

  // Método para verificar si el tubo está roto
  isBroken(): boolean {
    return this.usedHours <= 0;
  }

  // Método para decrementar las horas de uso del tubo
  decreaseHours(): void {
    this.usedHours--;
  }
}

// Clase que representa una unidad de tubos fluorescentes
class TubeUnit {
  tubes: Tube[];
  brokenTubesCount: number;

  constructor() {
    this.tubes = Array(4).fill(new Tube());
    this.brokenTubesCount = 0;
  }

  // Método para verificar si se necesita mantenimiento para la unidad
  needsMaintenance(): boolean {
    let brokenCount = 0;
    this.tubes.forEach(tube => {
      if (tube.isBroken()) {
        brokenCount++;
      }
    });
    return brokenCount >= 2;
  }

  // Método para reemplazar los tubos de la unidad
  replaceTubes(): void {
    this.tubes = this.tubes.map(() => new Tube()); // Crea una nueva matriz de tubos reemplazados
  }
}

// Función para generar un número aleatorio entre 100 y 200
function rand(): number {
  return Math.floor(Math.random() * 101) + 100; // Genera un número aleatorio entre 100 y 200
}

// Función principal para ejecutar la simulación y mostrar los resultados
function main() {
  const tubeUnits: TubeUnit[] = Array(4).fill(new TubeUnit()); // Array de 4 TubeUnits
  let totalBrokenTubesCount = 0;
  let totalCost = 0;

  // Simula un año de uso del aula
  for (let hour = 1; hour <= 2700; hour++) {
    tubeUnits.forEach(unit => {
      unit.tubes.forEach(tube => {
        tube.decreaseHours(); // Decrementa las horas de uso del tubo
        if (tube.isBroken()) {
          unit.brokenTubesCount++;
          if (unit.needsMaintenance()) {
            unit.replaceTubes();
          }
        }
      });
    });
  }

  // Calcula el total de tubos rotos y el costo total
  tubeUnits.forEach(unit => {
    totalBrokenTubesCount += unit.brokenTubesCount;
  });

  // Ten en cuenta el costo de los primeros 16 tubos en el cálculo del costo total
  totalCost = (totalBrokenTubesCount + 16) * 7;

  console.log("1. Total de tubos rotos en un año:", totalBrokenTubesCount);
  console.log("2. Costo total por año por aula:", totalCost, "USD");
}

// Ejecuta la función principal
main();
