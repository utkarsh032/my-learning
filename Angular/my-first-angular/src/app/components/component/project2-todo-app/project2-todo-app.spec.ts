import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Project2TodoApp } from './project2-todo-app';

describe('Project2TodoApp', () => {
  let component: Project2TodoApp;
  let fixture: ComponentFixture<Project2TodoApp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Project2TodoApp],
    }).compileComponents();

    fixture = TestBed.createComponent(Project2TodoApp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
