import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Bio } from '../interfaces/bio';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {
	userID: string = "";
	compensation: string = "";
	user: Bio;
	constructor(private route: ActivatedRoute, private api: ApiService) { }

	ngOnInit(): void {
		this.userID = this.route.snapshot.paramMap.get("id");
		this.api.getUser(this.userID).subscribe(user => {
			this.user = user;
			this.compensation = this.getCompensation(user.opportunities);
			console.log(this.user);
		});
	}

	getCompensation(ops: any): string{
		console.log(ops);
		let compRate: string = "";
		let compVal: string = "";
		let compCurr: string = "";
		for(let i in ops){
			switch (ops[i].field ) {
				case "desirable-compensation-currency":
					compCurr = ops[i].data;
					break;
				case "desirable-compensation-periodicity":
					compRate = ops[i].data;
					break;
				case "desirable-compensation-amount":
					compVal = ops[i].data;
					break;
			}
		}

		return compVal + ' ' + compCurr + '/' + compRate;
	}
}
