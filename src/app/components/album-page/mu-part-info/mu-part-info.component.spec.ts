import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuPartInfoComponent } from './mu-part-info.component';

describe('MuPartInfoComponent', () => {
  let component: MuPartInfoComponent;
  let fixture: ComponentFixture<MuPartInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuPartInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuPartInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
