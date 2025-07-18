import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuTrendCollPageComponent } from './mu-trend-coll-page.component';

describe('MuTrendCollPageComponent', () => {
  let component: MuTrendCollPageComponent;
  let fixture: ComponentFixture<MuTrendCollPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuTrendCollPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuTrendCollPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
