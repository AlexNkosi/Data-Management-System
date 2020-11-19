import { InfoprogrammeComponent } from './PROGRAMME/infoprogramme/infoprogramme.component';
import { EditprogrammeComponent } from './PROGRAMME/editprogramme/editprogramme.component';
import { AddprogrammeComponent } from './PROGRAMME/addprogramme/addprogramme.component';
import { AddfacultyComponent } from './FACULTY/addfaculty/addfaculty.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core'; 
import { HomeComponent } from './home/home.component';
import { FacultiesComponent } from './FACULTY/faculties/faculties.component';
import { ProgrammesComponent } from './PROGRAMME/programmes/programmes.component';
import { StartupsComponent } from './startups/startups.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';
import { ReportsComponent } from './reports/reports.component';
import { EditfacultyComponent } from './FACULTY/editfaculty/editfaculty.component';
import { InfofacultyComponent } from './FACULTY/infofaculty/infofaculty.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, 
        children:[{path:'faculties',component:FacultiesComponent},
                  {path:'programmes',component:ProgrammesComponent},
                  {path:'startups',component:StartupsComponent},
                  {path:'beneficiaries',component:BeneficiariesComponent},
                  {path:'reports',component:ReportsComponent},
                  {path:'addfaculty',component:AddfacultyComponent},
                  {path:'editfaculty',component:EditfacultyComponent},
                  {path:'infofaculty',component:InfofacultyComponent},
                  {path:'addprogramme',component:AddprogrammeComponent},
                  {path:'editprogramme',component:EditprogrammeComponent},
                  {path:'infoprogramme',component:InfoprogrammeComponent}] }, 
      { path: 'fetch-data', component: FetchDataComponent },
      {path:'',redirectTo:'home',pathMatch:'full'}
]

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
