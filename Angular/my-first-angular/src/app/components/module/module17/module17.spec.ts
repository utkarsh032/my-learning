import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module17 } from './module17';

describe('Module17', () => {
  let component: Module17;
  let fixture: ComponentFixture<Module17>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module17],
    }).compileComponents();

    fixture = TestBed.createComponent(Module17);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
