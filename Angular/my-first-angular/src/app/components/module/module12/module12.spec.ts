import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module12 } from './module12';

describe('Module12', () => {
  let component: Module12;
  let fixture: ComponentFixture<Module12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module12],
    }).compileComponents();

    fixture = TestBed.createComponent(Module12);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
