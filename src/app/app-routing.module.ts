import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FarmersComponent } from './farmers/farmers.component';

const routes: Routes = [
  { path: 'farmers',  component: FarmersComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
