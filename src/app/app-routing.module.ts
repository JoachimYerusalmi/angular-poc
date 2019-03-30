import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';



const routes: Routes = [
  {
    path:'link1',
    loadChildren:'./link1/link1.module#Link1Module'
  },
  {
    path:'link2',
    loadChildren:'./link2/link2.module#Link2Module'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
