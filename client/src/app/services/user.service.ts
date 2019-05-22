import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Character } from '../model/character';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private endpoint = "http://localhost:3000/api/user/";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers":
        "Origin, X-Requested-With, Content-Type, Accept"
    })
  };

  constructor(private http: HttpClient) { }

  //get all the user
  public getCharacterList(): Observable<any> {
    return this.http.get<any>(this.endpoint , this.httpOptions);
  }

  //Add character
  public addCharacter(character : Character){
    return this.http.post<any>(
      this.endpoint + "addCharacter",
      character,
      this.httpOptions
    );
  }

  public getCharacter(userId : string){
    return this.http.post<any>(
      this.endpoint + "character/",
      userId,
      this.httpOptions
    );
  }

  public getUser(userId : string){
    return this.http.post<any>(
      this.endpoint,
      userId,
      this.httpOptions
    );
  }

  
}
