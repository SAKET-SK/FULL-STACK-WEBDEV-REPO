import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { GenderPipe } from './shared/custom-pipe/gender.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { NavComponent } from './components/nav/nav.component';
import { AngularFormComponent } from './components/angular-form/angular-form.component';
import { TdfComponent } from './components/tdf/tdf.component';
import { RfComponent } from './components/rf/rf.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { SquarePipe } from './shared/square.pipe';
import { AreaOfCirclePipe } from './shared/area-of-circle.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    GenderPipe,
    ParentComponent,
    ChildComponent,
    NavComponent,
    AngularFormComponent,
    TdfComponent,
    RfComponent,
    PageNotFoundComponent,
    DirectivesComponent,
    SquarePipe,
    AreaOfCirclePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
