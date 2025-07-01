import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRecordComponent } from './get-record.component';

describe('GetRecordComponent', () => {
  let component: GetRecordComponent;
  let fixture: ComponentFixture<GetRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetRecordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
