import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoDetail } from './photo-detail';

@Injectable()
export class PhotoService {

  constructor(private http: HttpClient) { }

  public  getPhotoDetails() {    
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
      .toPromise()
      .then(res => <PhotoDetail[]> res)
      .then(data => { return data; });
  }
}