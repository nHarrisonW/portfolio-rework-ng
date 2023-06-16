import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalProjectArticleComponent } from './personal-project-article.component';

describe('PersonalProjectArticleComponent', () => {
  let component: PersonalProjectArticleComponent;
  let fixture: ComponentFixture<PersonalProjectArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalProjectArticleComponent]
    });
    fixture = TestBed.createComponent(PersonalProjectArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
