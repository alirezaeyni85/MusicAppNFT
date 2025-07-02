import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuToCreatorsComponent } from './mu-to-creators.component';

describe('MuToCreatorsComponent', () => {
  let component: MuToCreatorsComponent;
  let fixture: ComponentFixture<MuToCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuToCreatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuToCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
