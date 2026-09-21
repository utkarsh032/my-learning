import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module15 } from './module15';

describe('Module15', () => {
  let component: Module15;
  let fixture: ComponentFixture<Module15>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module15],
    }).compileComponents();

    fixture = TestBed.createComponent(Module15);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
