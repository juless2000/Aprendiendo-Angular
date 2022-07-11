// Importar los componentes/modulos de las pipes
import { Pipe, PipeTransform } from '@angular/core';

// Decorador pipe para crear mi pipe personalizado
@Pipe({
	name: 'calculadora'
})
// Implementamos la interface PipeTransform 
export class CalculadoraPipe implements PipeTransform{
	// Metodo transform de manera obligatoria dentro del pipe

	// Se les pasan dos parametros
	// dato | calculadora: otroDato
	// param1				param2	
	transform(value: any, value_two: any){
		let operaciones = `
			Suma: ${value+value_two} -
			Resta: ${value-value_two} -
			Multiplicacion: ${value*value_two} -
			Division: ${value/value_two}
		`;

		return operaciones;
	}
} 