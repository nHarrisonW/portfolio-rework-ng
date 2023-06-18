import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeSentences'
})
export class CapitalizeSentencesPipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return value;
    }

    const sentences = value.split('. ');
    const capitalizedSentences = sentences.map(sentence => {
      const trimmedSentence = sentence.trim();
      return trimmedSentence.charAt(0).toUpperCase() + trimmedSentence.slice(1);
    });

    return capitalizedSentences.join('. ');
  }
}
