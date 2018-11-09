import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
//pages
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './googlemap/googlemap.component';
//user npm adds
import { NguiMapModule} from '@ngui/map';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule.forRoot(),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyC5yDYGGb2IWb74lt6cyPVqTKcDSqajKKY'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
