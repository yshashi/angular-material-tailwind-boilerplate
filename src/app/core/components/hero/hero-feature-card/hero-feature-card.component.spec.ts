import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFeatureCardComponent } from './hero-feature-card.component';

describe('HeroFeatureCardComponent', () => {
  let component: HeroFeatureCardComponent;
  let fixture: ComponentFixture<HeroFeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroFeatureCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeroFeatureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
