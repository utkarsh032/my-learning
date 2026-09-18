import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OtherEvents } from './other-events';

describe('OtherEvents', () => {
  let component: OtherEvents;
  let fixture: ComponentFixture<OtherEvents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherEvents],
    }).compileComponents();

    fixture = TestBed.createComponent(OtherEvents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
