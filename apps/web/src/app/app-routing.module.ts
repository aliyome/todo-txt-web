import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@page/home/home.component';

export const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
})
export class AppRoutingModule {}
