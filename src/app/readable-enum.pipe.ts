import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readableEnum'
})
export class ReadableEnumPipe implements PipeTransform {

    transform(value: string): string {
      if (!value) return '';
      
      // Remplace les underscores par des espaces
      return value
        .replace(/_/g, ' ') // Remplace _ par un espace
        .toLowerCase() // Convertit tout en minuscules
        .replace(/\b\w/g, char => char.toUpperCase()); // Met en majuscule la première lettre de chaque mot
    }
  
}

