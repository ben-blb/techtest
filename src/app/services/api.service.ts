import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Job } from '../interfaces/job';
import { Bio } from '../interfaces/bio';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	private jobUrl: string = "https://torre.co/api/opportunities/";
	private bioUrl: string = "/proxy.php?user=";
	private peopleUrl: string = "https://search.torre.co/people/_search?page=0&lang=es&size=20&aggregate=false&offset=0";
	private jobsUrl: string = "https://search.torre.co/opportunities/_search/?offset=0&size=20&aggregate=false&page=0";

	httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

	constructor(private http: HttpClient) { }

	getJob(id: string): Observable<Job>{
		return this.http.get<Job>(this.jobUrl + id);
	}

	getUser(id: string): Observable<Bio>{
		return this.http.get<Bio>(this.bioUrl + id, this.httpOptions);
	}

	getPeople(): Observable<any>{
		return this.http.post<any>(this.peopleUrl, this.httpOptions);
	}

	getAllJobs(): Observable<any>{
		return this.http.post<any>(this.jobsUrl, this.httpOptions);
	}

	searchPeople(name: string): Observable<any>{
		return this.http.post<any>(this.peopleUrl, {and: [{name: {term: name}}]});
	}

	searchJobs(org: string): Observable<any>{
		return this.http.post<any>(this.jobsUrl, {'skill/role': {text: org, experience: "potential-to-develop"}});
	}
}
