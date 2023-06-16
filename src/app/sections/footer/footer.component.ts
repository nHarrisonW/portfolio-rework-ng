import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  my_footer_info = [
    {
      name: 'N. Harrison Wilkins',
      completed_on: '06-16-2023',
      tools: ['angular', 'bootstrap'],
    },
  ];
  my_links = [
    {
      reference: 'https://www.linkedin.com/in/nharrisonw/',
      img_url: 'assets/images/linkedin.svg',
    },
    {
      reference: 'https://github.com/nHarrisonW',
      img_url: 'assets/images/github.svg',
    },
  ];

  nav_links=[
    {
      area:'Hero',
      reference:'#hero'
    },
    {
      area:'Dev Skills',
      reference:'#dev_skills'
    },
    {
      area:'About Me',
      reference:'#about_me'
    },
  ]
}
