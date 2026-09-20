import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module9 } from './module9';

describe('Module9', () => {
  let component: Module9;
  let fixture: ComponentFixture<Module9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module9],
    }).compileComponents();

    fixture = TestBed.createComponent(Module9);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
