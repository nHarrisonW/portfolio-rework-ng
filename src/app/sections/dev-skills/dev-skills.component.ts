import { Component } from '@angular/core';

@Component({
  selector: 'app-dev-skills',
  templateUrl: './dev-skills.component.html',
  styleUrls: ['./dev-skills.component.scss']
})
export class DevSkillsComponent {

  dev_skills=[
    {
      name:'react',
      img_src:'assets/images/react.svg'
    },
    {
      name:'angular',
      img_src:'assets/images/angular.svg'
    },
    {
      name:'unity',
      img_src:'assets/images/unity.svg'
    },
    {
      name:'tailwind css',
      img_src:'assets/images/tailwindcss.svg'
    },
    {
      name:'css',
      img_src:'assets/images/css.svg'
    },
    {
      name:'html5',
      img_src:'assets/images/html5.svg'
    },
    {
      name:'javascript',
      img_src:'assets/images/js.svg'
    },
    {
      name:'visual studio',
      img_src:'assets/images/vscode.svg'
    },
    {
      name:'bootstrap',
      img_src:'assets/images/bootstrap.svg'
    },
    {
      name:'typescript',
      img_src:'assets/images/typescript.svg'
    },
    {
      name:'node.js',
      img_src:'assets/images/nodejs.svg'
    },
    {
      name:'c#',
      img_src:'assets/images/csharp.svg'
    },
    {
      name:'material ui',
      img_src:'assets/images/mui.svg'
    },
  ]
  work_flow_skills=[
    {
      name:'slack',
      img_src:'assets/images/slack.svg'
    },
    {
      name:'jira',
      img_src:'assets/images/jira.svg'
    },
    {
      name:'devops',
      img_src:'assets/images/devops.svg'
    },
    {
      name:'filezilla',
      img_src:'assets/images/filezilla.svg'
    },
    {
      name:'azure',
      img_src:'assets/images/azure.svg'
    },
    {
      name:'postman',
      img_src:'assets/images/postman.svg'
    },
    {
      name:'notion',
      img_src:'assets/images/notion.svg'
    },
    {
      name:'windows',
      img_src:'assets/images/windows.svg'
    },
    {
      name:'mac + ios',
      img_src:'assets/images/apple.svg'
    },
    
  ]
  ui_ux_skills=[
    {
      name:'figma',
      img_src:'assets/images/figma.svg'
    },
    {
      name:'illustrator',
      img_src:'assets/images/illustrator.svg'
    },
    {
      name:'photoshop',
      img_src:'assets/images/photoshop.svg'
    },
    
  ]
}
