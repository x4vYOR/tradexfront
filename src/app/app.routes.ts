import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'configuration/strategy', loadChildren: () => import('./features/configuration/strategy/strategy.routes').then(m => m.strategyRoutes) },
  { path: 'autotrain', loadComponent: () => import('./features/autotrain/autotrain.component').then(m => m.AutotrainComponent) },
  { path: 'autotrade', loadComponent: () => import('./features/autotrade/autotrade.component').then(m => m.AutotradeComponent) },
  { path: '**', redirectTo: 'configuration/strategy' } // Redirección por defecto
];
