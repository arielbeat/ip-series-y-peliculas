import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule' },
  { path: 'acerca-de', loadChildren: './acerca-de/acerca-de.module#AcercaDePageModule' },
  { path: 'p-accion', loadChildren: './p-accion/p-accion.module#PAccionPageModule' },
  { path: 'p-ciencia', loadChildren: './p-ciencia/p-ciencia.module#PCienciaPageModule' },
  { path: 'p-comedia', loadChildren: './p-comedia/p-comedia.module#PComediaPageModule' },
  { path: 'p-terror', loadChildren: './p-terror/p-terror.module#PTerrorPageModule' },
  { path: 's-accion', loadChildren: './s-accion/s-accion.module#SAccionPageModule' },
  { path: 's-ciencia', loadChildren: './s-ciencia/s-ciencia.module#SCienciaPageModule' },
  { path: 's-comedia', loadChildren: './s-comedia/s-comedia.module#SComediaPageModule' },
  { path: 's-terror', loadChildren: './s-terror/s-terror.module#STerrorPageModule' }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
