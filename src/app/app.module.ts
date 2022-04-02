import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { TimerService } from './timer.service';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsService } from './subjects.service';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'subjects-list', component: SubjectsComponent},
      {path: 'about-me', component: AboutMeComponent}
    ])
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    HomeComponent,
    AboutMeComponent,
    SubjectsComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    TimerService,
    SubjectsService
  ]
})
export class AppModule { }
