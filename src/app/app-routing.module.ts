import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablainformacionComponent } from './components/tablainformacion/tablainformacion.component';
const routes: Routes = [
 {
  path: "",
  component: TablainformacionComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


