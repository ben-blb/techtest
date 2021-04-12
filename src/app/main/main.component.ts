import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	peopleList: any = {};
	jobList: any = {};
	searchQ: string = "";

	constructor(private router: Router, private api: ApiService) { }

	ngOnInit(): void {
		this.api.getPeople().subscribe(main => {
			this.peopleList = main.results;
		});

		this.api.getAllJobs().subscribe(main => {
			this.jobList = main.results;
			console.log(main);
		});
	}

	doSearch(): void{
		this.router.navigate(['/search/' + this.searchQ]);
	}

}
