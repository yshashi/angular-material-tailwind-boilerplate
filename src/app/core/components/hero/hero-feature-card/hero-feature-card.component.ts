import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-feature-card',
  standalone: true,
  imports: [],
  templateUrl: './hero-feature-card.component.html',
  styleUrl: './hero-feature-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroFeatureCardComponent {
  @Input({required: true}) title !: string;
  @Input({required: true}) desrecption !: string;
}
