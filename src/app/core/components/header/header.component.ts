import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideBarSignal } from '../../../shared/signals/sidebar.signal';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  public readonly sidebarSignal = inject(SideBarSignal);
  toggle() {
    this.sidebarSignal.sidebarOpen.update(val => !val);
  }
}
