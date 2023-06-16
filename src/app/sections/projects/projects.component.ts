import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  personal_projects = [
    {
      title: 'business redesign',
      img_src: '',
      description_one:
        'this project involves redesigning the website for a local gym using react-bootstrap. the main objective is to enhance the user experience and improve the user interface by implementing a responsive design. it was also made in collaboration with another student, utilizing git.',
        description_two:'i aim to showcase my creative ability and understanding of ui/ux principles. the goal is to provide a seamless and enjoyable user experience that not only highlights the gym\'s unique features but also encourages users to explore and engage with the website\'s content.',
    },
    {
      title: 'rock vs paper vs scissors vs lizard vs spock',
      img_src: '',
      description_one: 'the rock paper scissors lizard spock game is an exciting and interactive single-page application that showcases my frontend development skills using react bootstrap . with the integration of an api call, this project takes the classic game to the next level by allowing users to play against a computer opponent and enjoy a challenging and engaging gameplay experience.',
      description_two: 'based on the popular game variation featured in "the big bang theory," players can choose from rock, paper, scissors, lizard, or spock as their moves. the game logic is implemented using react components and javascript, ensuring smooth and responsive gameplay.',
    },
    {
      title: 'advice generator',
      img_src: '',
      description_one: 'the advice generator is a web application developed using react and react-bootstrap . it was created as a project for frontend mentor, with the goal of providing users with random advice and inspiration sourced from the advice slip api.',
      description_two: 'by including the advice generator in my portfolio, i want to highlight my skills in frontend development and showcase my ability to create engaging and functional applications. this project exemplifies my capability to follow a design, technical expertise, and api integration to deliver a valuable user experience.',
    },
  ];
}
