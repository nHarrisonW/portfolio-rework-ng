import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './sections/navbar/navbar.component';
import { DevSkillsComponent } from './sections/dev-skills/dev-skills.component';
import { AboutMeComponent } from './sections/about-me/about-me.component';
import { HeroComponent } from './sections/hero/hero.component';
import { FooterComponent } from './sections/footer/footer.component';
import { SkillsCardComponent } from './components/skills-card/skills-card.component';
import { ProjectsComponent } from './sections/projects/projects.component';
import { PersonalProjectArticleComponent } from './components/personal-project-article/personal-project-article.component';
import { CapitalizeSentencesPipe } from './capitalize-sentences.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DevSkillsComponent,
    AboutMeComponent,
    HeroComponent,
    FooterComponent,
    SkillsCardComponent,
    ProjectsComponent,
    PersonalProjectArticleComponent,
    CapitalizeSentencesPipe
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
