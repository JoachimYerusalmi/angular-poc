import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


const routes: Routes = [
  {
    path: 'feature1',
    loadChildren: './feature1/feature1.module#Feature1Module'
  },
  {
    path: 'feature2',
    loadChildren: './feature2/feature2.module#Feature2Module'
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
