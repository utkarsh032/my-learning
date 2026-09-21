import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module14 } from './module14';

describe('Module14', () => {
  let component: Module14;
  let fixture: ComponentFixture<Module14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module14],
    }).compileComponents();

    fixture = TestBed.createComponent(Module14);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
