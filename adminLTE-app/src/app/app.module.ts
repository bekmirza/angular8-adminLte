import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TematicComponent } from './tematic/tematic.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AgGridModule} from 'ag-grid-angular';
import { JobCategoryComponent } from './job-category/job-category.component';

 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    routingComponents,
    
    TematicComponent,
    PageNotFoundComponent,
    JobCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgGridModule.withComponents([
      TematicComponent,
      EmployeeListComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
