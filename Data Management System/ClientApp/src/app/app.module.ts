import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components Imports
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component'; 
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FacultiesComponent } from './FACULTY/faculties/faculties.component';
import { ProgrammesComponent } from './PROGRAMME/programmes/programmes.component';
import { StartupsComponent } from './startups/startups.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { ReportsComponent } from './reports/reports.component';
import { AddfacultyComponent } from './FACULTY/addfaculty/addfaculty.component';
import { EditfacultyComponent } from './FACULTY/editfaculty/editfaculty.component';
import { InfofacultyComponent } from './FACULTY/infofaculty/infofaculty.component';


//Angular Material Imports
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import { AddprogrammeComponent } from './PROGRAMME/addprogramme/addprogramme.component';
import { EditprogrammeComponent } from './PROGRAMME/editprogramme/editprogramme.component';
import { InfoprogrammeComponent } from './PROGRAMME/infoprogramme/infoprogramme.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent, 
    FetchDataComponent,
    FacultiesComponent,
    ProgrammesComponent,
    StartupsComponent,
    BeneficiariesComponent,
    ReportsComponent,
    AddfacultyComponent,
    EditfacultyComponent,
    InfofacultyComponent,
    AddprogrammeComponent,
    EditprogrammeComponent,
    InfoprogrammeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule, 
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
