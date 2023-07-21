import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { loadRemoteModule } from '@nx/angular/mf';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

export const appRoutes: Route[] = [
  {
    path: 'about',
    loadChildren: () =>
      loadRemoteModule('about', './Module').then(
        (m: { RemoteEntryModule: any }) => m.RemoteEntryModule
      ),
  },
  {
    path: 'tech-projects',
    component: WebComponentWrapper,
    data: {
      type: 'module',
      remoteEntry:
        'http://localhost:4202/remoteEntry.js',
      remoteName: 'tech-projects',
      elementName: 'tech-projects-ele',
      exposedModule: './Module',
    } as WebComponentWrapperOptions,
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
