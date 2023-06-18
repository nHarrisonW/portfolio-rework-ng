import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-personal-project-article',
  templateUrl: './personal-project-article.component.html',
  styleUrls: ['./personal-project-article.component.scss']
})
export class PersonalProjectArticleComponent {
  @Input() title = '';
  @Input() img_src = '';
  @Input() description_one = '';
  @Input() description_two = '';
  @Input() reference = '';

  get_color(index: number): string {
    if ((index + 1) % 15 === 0) {
      return 'red';
    }
    return '';
  }

  get_random_color(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
