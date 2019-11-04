import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TematicComponent } from './tematic/tematic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { JobCategoryComponent } from './job-category/job-category.component';


const routes: Routes = [
  {path: '', redirectTo: '/employees', pathMatch: 'full'},
  {path:'employees', component: EmployeeListComponent},
  {path:'tematic', component: TematicComponent},
  {path: 'jobCategory', component: JobCategoryComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [EmployeeListComponent, TematicComponent];
