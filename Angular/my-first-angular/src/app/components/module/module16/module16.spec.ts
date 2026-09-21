import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module16 } from './module16';

describe('Module16', () => {
  let component: Module16;
  let fixture: ComponentFixture<Module16>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module16],
    }).compileComponents();

    fixture = TestBed.createComponent(Module16);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
