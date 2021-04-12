import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BioComponent } from './bio/bio.component';
import { JobComponent } from './job/job.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
	{ path: '', redirectTo: '/main', pathMatch: 'full' },
	{path: 'main', component: MainComponent},
	{path: 'bio', redirectTo: '/main', pathMatch: 'full' },
	{path: 'bio/:id', component: BioComponent},
	{path: 'job', redirectTo: '/main', pathMatch: 'full' },
	{path: 'job/:id', component: JobComponent},
	{path: 'search', redirectTo: '/main', pathMatch: 'full' },
	{path: 'search/:param', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
