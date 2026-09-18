import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Project1CunterApp } from './project1-cunter-app';

describe('Project1CunterApp', () => {
  let component: Project1CunterApp;
  let fixture: ComponentFixture<Project1CunterApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project1CunterApp],
    }).compileComponents();

    fixture = TestBed.createComponent(Project1CunterApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
