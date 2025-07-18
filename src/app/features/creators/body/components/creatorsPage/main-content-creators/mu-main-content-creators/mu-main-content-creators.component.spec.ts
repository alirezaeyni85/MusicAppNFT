import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuMainContentCreatorsComponent } from './mu-main-content-creators.component';

describe('MuMainContentCreatorsComponent', () => {
  let component: MuMainContentCreatorsComponent;
  let fixture: ComponentFixture<MuMainContentCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuMainContentCreatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuMainContentCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
