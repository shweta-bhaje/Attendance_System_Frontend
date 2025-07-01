import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PunchInComponent } from './punch-in.component';

describe('PunchInComponent', () => {
  let component: PunchInComponent;
  let fixture: ComponentFixture<PunchInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PunchInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PunchInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
