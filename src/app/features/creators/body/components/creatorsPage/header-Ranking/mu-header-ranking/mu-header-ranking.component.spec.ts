import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuHeaderRankingComponent } from './mu-header-ranking.component';

describe('MuHeaderRankingComponent', () => {
  let component: MuHeaderRankingComponent;
  let fixture: ComponentFixture<MuHeaderRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuHeaderRankingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuHeaderRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
