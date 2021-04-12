import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BioComponent } from './bio/bio.component';
import { JobComponent } from './job/job.component';

const routes: Routes = [
	{ path: '', redirectTo: '/main', pathMatch: 'full' },
	{path: 'main', component: MainComponent},
	{path: 'bio', component: BioComponent},
	{path: 'job', redirectTo: '/main', pathMatch: 'full' },
	{path: 'job/:id', component: JobComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
