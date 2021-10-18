import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Opbrengst} from "../models/opbrengst";
import {merge, Observable, zip} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(private http: HttpClient) { }


  public getDataMulti(dates: string[]): Observable<Opbrengst[]>{
    const obs : Observable<Opbrengst>[] = [];
    dates.forEach(d => obs.push(this.getData(d)));

    return zip(...obs);
  }

  public getData(date: string): Observable<Opbrengst>{
    const s = `http://localhost:4200/api/v2/systems/${environment.system_id}/stats?key=${environment.key}&user_id=${environment.user_id}&start_at=${date}`;
    return this.http.get<Opbrengst>(s);
  }
}
