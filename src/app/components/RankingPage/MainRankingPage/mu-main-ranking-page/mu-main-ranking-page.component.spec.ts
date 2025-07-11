import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuMainRankingPageComponent } from './mu-main-ranking-page.component';

describe('MuMainRankingPageComponent', () => {
  let component: MuMainRankingPageComponent;
  let fixture: ComponentFixture<MuMainRankingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuMainRankingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuMainRankingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
