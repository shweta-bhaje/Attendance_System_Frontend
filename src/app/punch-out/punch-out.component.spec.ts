import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchOutComponent } from './punch-out.component';

describe('PunchOutComponent', () => {
  let component: PunchOutComponent;
  let fixture: ComponentFixture<PunchOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PunchOutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunchOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
