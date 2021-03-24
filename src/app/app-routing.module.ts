import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./apphome/apphome.module').then( m => m.ApphomePageModule)
  },
  {
    path: '',
    redirectTo: 'apphome',
    pathMatch: 'full'
  },
  {
    path: 'job',
    loadChildren: () => import('./job/job.module').then( m => m.JobPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
