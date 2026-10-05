import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { DynamicRoutingWithApi } from './dynamic-routing-with-api';

describe('DynamicRoutingWithApi', () => {
  let component: DynamicRoutingWithApi;
  let fixture: ComponentFixture<DynamicRoutingWithApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicRoutingWithApi],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicRoutingWithApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
