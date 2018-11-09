import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GoogleMapComponent implements OnInit {

  public googleMap: any;
  public mapMarkers: google.maps.Marker[];
  public is_marker: boolean;
  public radioData: number;

  constructor() { }

  ngOnInit() {
    this.radioData = 1;
    this.is_marker = false;
    this.mapMarkers = [];
  }

  //when map loads
  onMapReady(map) {
    this.googleMap = map
    this.setStyle(1);
  }

  setMarkers(value: number): void {
    if(this.is_marker == false)
    {
      const marker6 = new google.maps.Marker();
      marker6.setPosition(new google.maps.LatLng(37.423370, -122.070930));
      marker6.setTitle("LinkedIn HQ");
      marker6.setIcon("assets/media/linkedin-logo.png");
      marker6.setMap(this.googleMap);
      this.mapMarkers.push(marker6);
    }
    else
    {
      this.mapMarkers.forEach(marker =>{
        marker.setMap(null);
      });
      this.mapMarkers = [];
      this.is_marker = false;
    }
  }
  ////////////////////////////////////////////////////
  ///                 Set Map Style                ///
  ////////////////////////////////////////////////////
  setStyle(value: number): void {
    switch(value)
    {
      case 1:
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
        break;
      case 2:
      this.googleMap.setOptions({styles:
        [
          {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
          {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{color: '#263c3f'}]
          },
          {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{color: '#6b9a76'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{color: '#38414e'}]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [{color: '#212a37'}]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{color: '#9ca5b3'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{color: '#746855'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{color: '#1f2835'}]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{color: '#f3d19c'}]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{color: '#2f3948'}]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{color: '#d59563'}]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{color: '#17263c'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{color: '#515c6d'}]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.stroke',
            stylers: [{color: '#17263c'}]
          }
        ]
      });
      break;
      case 3:
        this.googleMap.setOptions({styles: null});
      break;
    }
  }
}
