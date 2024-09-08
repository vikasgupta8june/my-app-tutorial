import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';
import { ErrorComponent } from './features/error/components/error/error.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent
  },
  {
  path:'error',
  component: ErrorComponent
  },
  {
    path:'**',
    redirectTo:'error?key=pageNotFound'
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
