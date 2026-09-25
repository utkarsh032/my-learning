import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module20 } from './module20';

describe('Module20', () => {
  let component: Module20;
  let fixture: ComponentFixture<Module20>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module20],
    }).compileComponents();

    fixture = TestBed.createComponent(Module20);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
