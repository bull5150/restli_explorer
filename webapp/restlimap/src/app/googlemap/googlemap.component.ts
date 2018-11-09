import { Component, OnInit } from '@angular/core';
import { MarkerItem } from '../models/markeritem';
import { RestliService } from '../services/restli.service';

declare var google: any;

@Component({
  selector: 'googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})

export class GoogleMapComponent implements OnInit {

  public googleMap: any;
  public mapMarkers: google.maps.Marker[];
  public marker: google.maps.Marker;

  constructor(private RestliService: RestliService) { }

  ngOnInit() {
    this.mapMarkers = [];
  }

  //when map loads
  onMapReady(map) {
    this.googleMap = map
    this.setStyle();
  }

  setMarkers(value: number): void {
    const marker = new google.maps.Marker();
    this.RestliService.getMarker(value).subscribe(response=>{
      marker.setPosition(new google.maps.LatLng(response.latitude, response.longitude));
      marker.setIcon(response.icon);
      marker.setTitle(response.name);
      marker.setMap(this.googleMap);
      this.mapMarkers.push(marker);
    });
  }
  removeMarker(): void {
      this.mapMarkers.forEach(marker =>{
        marker.setMap(null);
      });
      this.mapMarkers = [];
  }
  ////////////////////////////////////////////////////
  ///                 Set Map Style                ///
  ////////////////////////////////////////////////////
  setStyle(): void {
    this.googleMap.setOptions({styles:
      [
        {
          elementType: 'geometry',
          stylers: [{color: '#f5f5f5'}]
        },
        {
          elementType: 'labels.icon',
          stylers: [{visibility: 'off'}]
        },
        {
          elementType: 'labels.text.fill',
          stylers: [{color: '#616161'}]
        },
        {
          elementType: 'labels.text.stroke',
          stylers: [{color: '#f5f5f5'}]
        },
        {
          featureType: 'administrative.land_parcel',
          elementType: 'labels.text.fill',
          stylers: [{color: '#bdbdbd'}]
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [{color: '#eeeeee'}]
        },
        {
          featureType: 'poi',
          elementType: 'labels.text.fill',
          stylers: [{color: '#757575'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [{color: '#e5e5e5'}]
        },
        {
          featureType: 'poi.park',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9e9e9e'}]
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{color: '#ffffff'}]
        },
        {
          featureType: 'road.arterial',
          elementType: 'labels.text.fill',
          stylers: [{color: '#757575'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'geometry',
          stylers: [{color: '#dadada'}]
        },
        {
          featureType: 'road.highway',
          elementType: 'labels.text.fill',
          stylers: [{color: '#616161'}]
        },
        {
          featureType: 'road.local',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9e9e9e'}]
        },
        {
          featureType: 'transit.line',
          elementType: 'geometry',
          stylers: [{color: '#e5e5e5'}]
        },
        {
          featureType: 'transit.station',
          elementType: 'geometry',
          stylers: [{color: '#eeeeee'}]
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [{color: '#c9c9c9'}]
        },
        {
          featureType: 'water',
          elementType: 'labels.text.fill',
          stylers: [{color: '#9e9e9e'}]
        }
      ],
    });
  }
}
