import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuLayoutComponent } from './mu-layout.component';

describe('MuLayoutComponent', () => {
  let component: MuLayoutComponent;
  let fixture: ComponentFixture<MuLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
