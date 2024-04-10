import {Routes} from '@angular/router';
import {ContentComponent} from "./_layouts/public/content/content.component";
import {PrivateContentComponent} from "./_layouts/private/private-content/private-content.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

export const routes: Routes = [
  {
    path: '', component: ContentComponent,
    loadChildren: () => import('./pages/public.routes').then(r => r.PUBLIC_ROUTES)
  },
  {
    path: 'admin',
    component: PrivateContentComponent,
    loadChildren: () => import('./pages/_private/private.routes').then(r => r.ADMIN_ROUTES)
  },
  {
    path: '**', component: ContentComponent,
    children: [
      {path: '', component: NotFoundComponent, title: 'Not Found'}
    ]
  }
];
