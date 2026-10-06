import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module11 } from './module11';

describe('Module11', () => {
  let component: Module11;
  let fixture: ComponentFixture<Module11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module11],
    }).compileComponents();

    fixture = TestBed.createComponent(Module11);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
