import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Module19 } from './module19';

describe('Module19', () => {
  let component: Module19;
  let fixture: ComponentFixture<Module19>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module19],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Module19);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
