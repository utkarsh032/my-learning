import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Module22 } from './module22';

describe('Module22', () => {
  let component: Module22;
  let fixture: ComponentFixture<Module22>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module22],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Module22);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
