import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AngularFormComponent } from './components/angular-form/angular-form.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { RfComponent } from './components/rf/rf.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { MyColorComponent } from './components/my-color/my-color.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/Guard/auth.guard';

const routes: Routes = [

  // Default Routing
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  
  // Named Routing
  {path: "data-binding", component: DataBindingComponent, canActivate:[AuthGuard]},
  {path: "directives", component: DirectivesComponent, canActivate:[AuthGuard]},
  

  // Re-direction Routing
  // {path: "directives", redirectTo:"pipes", pathMatch:"full"},

  {path: "pipes", component: PipesComponent, canActivate:[AuthGuard]},
  {path: "pipes/:id", component: PipesComponent, canActivate:[AuthGuard]},

  {path: "comp2", component: Comp2Component, canActivate:[AuthGuard]},
  {path: "mycolor", component: MyColorComponent, canActivate:[AuthGuard]},

  {path: "parent", component: ParentComponent, canActivate:[AuthGuard]},

  // Lazy Loading :- Doing this for only modules becuase modules have huge set of components in them
  {path: "crud", canActivate:[AuthGuard], loadChildren: () => import("./crud/crud.module").then( m => m.CrudModule)},

  // Child Routing
  {path: "forms", component: AngularFormComponent, canActivate:[AuthGuard],
  children: [
    {path: "", component: TdfComponent},
    {path: "tdf", component: TdfComponent},
    {path: "rf", component: RfComponent}
  ]},

  // Wild Card Routing
  // Sequence Matters!! Always specify this at the end
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
