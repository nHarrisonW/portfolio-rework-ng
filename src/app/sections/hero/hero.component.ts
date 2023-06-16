import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  aspiring_junior_dev = [
    {
      name: 'N. Harrison Wilkins',
      email: 'nwilkins@codestack.co',
      phone_number: '(209)-612-2203',
      location: 'Tracy, CA 95376',
      currently_working_on: [
        'Stockton Mayor Website',
        'Codestack Internship',
        'Angular Udemy certification',
      ],
    },
  ];
}
