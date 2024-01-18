import {Injectable, signal} from '@angular/core'
@Injectable({
  providedIn: 'root'
})
export class SideBarSignal {
  sidebarOpen = signal(true);
}
