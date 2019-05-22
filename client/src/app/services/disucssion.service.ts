import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Thread } from '../model/thread';

@Injectable({
  providedIn: 'root'
})
export class DisucssionService {
  private endpoint = "http://localhost:3000/api/discussion/";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    })
  };

  constructor(private http: HttpClient) { }

  public getAllThread(): Observable<any> {
    return this.http.get<any>(this.endpoint , this.httpOptions);
  }

  public addThread(thread : Thread){
    return this.http.post<any>(
      this.endpoint + "addThread",
      thread,
      this.httpOptions
    );
  }

}
