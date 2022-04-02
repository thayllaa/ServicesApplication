import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TimerService } from './timer.service';
import { SubjectsComponent } from './subjects/subjects.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'subjects', component: SubjectsComponent}
    ])
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    HomeComponent,
    SubjectsComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    TimerService
  ]
})
export class AppModule { }
