import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {
	jobID: string = '';
	actualJob: any = {};

	constructor(private route: ActivatedRoute, private api: ApiService) { }

	ngOnInit(): void {
		this.jobID = this.route.snapshot.paramMap.get("id");
		this.api.getJob(this.jobID).subscribe(job => {
			for(let i in job.details){
				job.details[i].content = job.details[i].content.replaceAll('•', '\n');
			}
			this.actualJob = job;
			console.log(job);
		});
	}

}
