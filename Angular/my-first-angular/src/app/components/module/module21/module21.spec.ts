import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module21 } from './module21';

describe('Module21', () => {
  let component: Module21;
  let fixture: ComponentFixture<Module21>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module21],
    }).compileComponents();

    fixture = TestBed.createComponent(Module21);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
