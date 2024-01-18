import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroFeatureCardComponent } from './hero-feature-card/hero-feature-card.component';
import { HERO_FEATURES } from '../../constants/hero-feature-description.constant';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeroFeatureCardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  features = HERO_FEATURES;
}
