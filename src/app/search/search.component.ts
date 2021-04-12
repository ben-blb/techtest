import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	peopleList: any = {};
	jobList: any = {};
	searchQ: string = "";

  constructor(private route: ActivatedRoute, private router: Router, private api: ApiService) { }

  ngOnInit(): void {
  	
	this.route.paramMap.subscribe(params => {
		this.searchQ = this.route.snapshot.paramMap.get("param");
		this.api.searchPeople(this.searchQ).subscribe(ppl => {
			this.peopleList = ppl.results;
		});
		this.api.searchJobs(this.searchQ).subscribe(job => {
			this.jobList = job.results;
		});
	});
  }

  	doSearch(): void{
		this.router.navigate(['/search/' + this.searchQ]);
	}


}
