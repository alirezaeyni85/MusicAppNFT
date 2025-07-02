import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuMainHeaderPageComponent } from './mu-main-header-page.component';

describe('MuMainHeaderPageComponent', () => {
  let component: MuMainHeaderPageComponent;
  let fixture: ComponentFixture<MuMainHeaderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuMainHeaderPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuMainHeaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
