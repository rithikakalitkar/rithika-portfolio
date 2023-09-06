import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { AboutMeComponent } from '../about-me/about-me.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  {
    path: 'me',
    component: AboutMeComponent
  }
];
