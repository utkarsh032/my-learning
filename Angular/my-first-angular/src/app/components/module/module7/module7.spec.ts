import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module7 } from './module7';

describe('Module7', () => {
  let component: Module7;
  let fixture: ComponentFixture<Module7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module7],
    }).compileComponents();

    fixture = TestBed.createComponent(Module7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
