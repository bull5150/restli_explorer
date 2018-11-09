import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { MarkerItem } from '../models/markeritem';

@Injectable()
export class RestliService {
  constructor(private http: HttpClient) { }
  public getMarker(markernumber: number){
    console.log(markernumber);
    return this.http.get<MarkerItem>('/getmarker/' + markernumber)
  }
}
