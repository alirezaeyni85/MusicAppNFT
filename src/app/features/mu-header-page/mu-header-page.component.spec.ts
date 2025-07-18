import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuHeaderPageComponent } from './mu-header-page.component';

describe('MuHeaderPageComponent', () => {
  let component: MuHeaderPageComponent;
  let fixture: ComponentFixture<MuHeaderPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuHeaderPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuHeaderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
