import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [

  // Default Routing
  {path: '', component: DirectivesComponent},
  
  // Named Routing
  {path: "directives", component: DirectivesComponent},
  {path: "pipes", component: PipesComponent},
  {path: "parent", component: ParentComponent},

  // Wild Card Routing
  // Sequence Matters!! Always specify this at the end
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
