import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuLoginPageBodyComponent } from './mu-login-page-body.component';

describe('MuLoginPageBodyComponent', () => {
  let component: MuLoginPageBodyComponent;
  let fixture: ComponentFixture<MuLoginPageBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuLoginPageBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuLoginPageBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
