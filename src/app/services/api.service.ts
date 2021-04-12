import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
	private jobUrl: string = "https://torre.co/api/opportunities/";

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor(private http: HttpClient) { }

	getJob(id: string): Observable<any>{
		return this.http.get<any>(this.jobUrl + id);
	}
}
