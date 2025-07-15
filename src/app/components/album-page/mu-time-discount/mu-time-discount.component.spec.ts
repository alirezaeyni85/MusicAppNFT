import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuTimeDiscountComponent } from './mu-time-discount.component';

describe('MuTimeDiscountComponent', () => {
  let component: MuTimeDiscountComponent;
  let fixture: ComponentFixture<MuTimeDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuTimeDiscountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuTimeDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
