import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

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
