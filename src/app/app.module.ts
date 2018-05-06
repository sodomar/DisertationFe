import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {StorageServiceModule} from 'angular-webstorage-service';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {LengthPipe} from './home/Pipes/LengthPipe';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {UserService} from './login/Services/UserService';
import {HomeService} from './home/Services/HomeService';
import {EventDetailsService} from './event-details/Services/EventDetailsService';
import {GlobalServiceRequests} from './GlobalUtils/GlobalServices/GlobalServiceRequests';
import {HomeComponent} from './home/home.component';
import {EventDetailsComponent} from './event-details/event-details.component';
import { GoogleMapsComponent } from './Google Services/google-maps/google-maps.component';
import {AgmCoreModule} from '@agm/core';



const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'eventDetails/:id', component: EventDetailsComponent},
  {path: '**', component: LoginComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LengthPipe,
    EventDetailsComponent,
    GoogleMapsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StorageServiceModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUpn9RuRVAWBKjeaTeBIughNIaYhVTj_0'
    }),
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true,
        useHash: true
      })
  ],
  exports: [],
  providers: [UserService, HomeService, EventDetailsService, GlobalServiceRequests],
  bootstrap: [AppComponent]
})
export class AppModule {
}
