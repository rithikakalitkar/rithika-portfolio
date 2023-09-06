import { Route } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
  }
];
