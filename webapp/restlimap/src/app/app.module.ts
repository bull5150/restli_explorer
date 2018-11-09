import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
//pages
import { AppComponent } from './app.component';
import { GoogleMapComponent } from './googlemap/googlemap.component';
//services
import { RestliService } from './services/restli.service';
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
    HttpClientModule,
    NgbModule.forRoot(),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyC5yDYGGb2IWb74lt6cyPVqTKcDSqajKKY'})
  ],
  providers: [RestliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
