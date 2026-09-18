import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module6 } from './module6';

describe('Module6', () => {
  let component: Module6;
  let fixture: ComponentFixture<Module6>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module6],
    }).compileComponents();

    fixture = TestBed.createComponent(Module6);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
