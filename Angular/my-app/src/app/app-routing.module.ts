import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AngularFormComponent } from './components/angular-form/angular-form.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { RfComponent } from './components/rf/rf.component';

const routes: Routes = [

  // Default Routing
  {path: '', component: DirectivesComponent},
  
  // Named Routing
  {path: "directives", component: DirectivesComponent},

  // Re-direction Routing
  // {path: "directives", redirectTo:"pipes", pathMatch:"full"},

  {path: "pipes", component: PipesComponent},
  {path: "pipes/:id", component: PipesComponent},

  {path: "parent", component: ParentComponent},

  // Child Routing
  {path: "forms", component: AngularFormComponent, children: [
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
