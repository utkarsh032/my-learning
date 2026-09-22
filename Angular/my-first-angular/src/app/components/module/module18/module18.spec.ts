import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module18 } from './module18';

describe('Module18', () => {
  let component: Module18;
  let fixture: ComponentFixture<Module18>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module18],
    }).compileComponents();

    fixture = TestBed.createComponent(Module18);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
