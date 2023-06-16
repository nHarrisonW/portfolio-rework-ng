import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevSkillsComponent } from './dev-skills.component';

describe('DevSkillsComponent', () => {
  let component: DevSkillsComponent;
  let fixture: ComponentFixture<DevSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevSkillsComponent]
    });
    fixture = TestBed.createComponent(DevSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
