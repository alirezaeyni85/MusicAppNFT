import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuMainBodyComponent } from './mu-main-body.component';

describe('MuMainBodyComponent', () => {
  let component: MuMainBodyComponent;
  let fixture: ComponentFixture<MuMainBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuMainBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
