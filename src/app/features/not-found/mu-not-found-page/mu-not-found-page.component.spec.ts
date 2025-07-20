import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuNotFoundPageComponent } from './mu-not-found-page.component';

describe('MuNotFoundPageComponent', () => {
  let component: MuNotFoundPageComponent;
  let fixture: ComponentFixture<MuNotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuNotFoundPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
