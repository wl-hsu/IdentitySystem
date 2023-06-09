import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/component/errors/not-found/not-found.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'play', component: PlayComponent},
  {path: 'account', loadChildren: () => import('./account/account.module').then(module => module.AccountModule)},
  {path: 'not-found', component: NotFoundComponent},
  //any paht not assign over here
  {path: '**', component: NotFoundComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
