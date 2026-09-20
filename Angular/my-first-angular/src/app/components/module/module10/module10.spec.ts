import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module10 } from './module10';

describe('Module10', () => {
  let component: Module10;
  let fixture: ComponentFixture<Module10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module10],
    }).compileComponents();

    fixture = TestBed.createComponent(Module10);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
