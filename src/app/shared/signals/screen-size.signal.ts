import { Injectable, signal } from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class ScreenSizeSignal {
  currenScreenSize = signal('');
}
