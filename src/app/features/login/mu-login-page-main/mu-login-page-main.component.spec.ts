import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuLoginPageMainComponent } from './mu-login-page-main.component';

describe('MuLoginPageMainComponent', () => {
  let component: MuLoginPageMainComponent;
  let fixture: ComponentFixture<MuLoginPageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuLoginPageMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuLoginPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
