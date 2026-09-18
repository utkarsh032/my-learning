import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClickEvent } from './click-event';

describe('ClickEvent', () => {
  let component: ClickEvent;
  let fixture: ComponentFixture<ClickEvent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickEvent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClickEvent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
