import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
  {
    path: 'projects',
    loadChildren: () =>
      import('./features/projects/reports.routes').then((c) => c.routes),
  },
];
