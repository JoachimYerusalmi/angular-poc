import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Link1Component} from "../components/link1/link1.component";
import {Link2Component} from "../components/link2/link2.component";


const routes: Routes = [
  {path: 'link1', component: Link1Component},
  {path: 'link2', component: Link2Component}
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
