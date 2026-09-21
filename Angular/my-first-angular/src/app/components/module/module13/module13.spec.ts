import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Module13 } from './module13';

describe('Module13', () => {
  let component: Module13;
  let fixture: ComponentFixture<Module13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Module13],
    }).compileComponents();

    fixture = TestBed.createComponent(Module13);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
