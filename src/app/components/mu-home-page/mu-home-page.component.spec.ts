import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuHomePageComponent } from './mu-home-page.component';

describe('MuHomePageComponent', () => {
  let component: MuHomePageComponent;
  let fixture: ComponentFixture<MuHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuHomePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
