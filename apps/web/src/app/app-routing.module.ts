import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomePage } from '@page/home/home.page';

export const routes: Routes = [{ path: '', component: HomePage }];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: [],
})
export class AppRoutingModule {}
