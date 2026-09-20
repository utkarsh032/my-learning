import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module8 } from './module8';

describe('Module8', () => {
  let component: Module8;
  let fixture: ComponentFixture<Module8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module8],
    }).compileComponents();

    fixture = TestBed.createComponent(Module8);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
