import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Faculty {
  facultyName: string;
  facultyType: string;
  beeLevel: string;
  active: boolean; 
}

const FACULTIES:Faculty[] = [
  {facultyName:'Tshimologong',facultyType:'Incubator',beeLevel:'Level 3',active:true},
  {facultyName:'DLA',facultyType:'Incubator',beeLevel:'Level 4',active:false},
  {facultyName:'Makerspace',facultyType:'Incubator',beeLevel:'Level 5',active:true},
  {facultyName:'Innovation Hub',facultyType:'Incubator',beeLevel:'Level 4',active:true},
  {facultyName:'Skills Academy',facultyType:'Academy',beeLevel:'Level 4',active:true},
  {facultyName:'Animation SC',facultyType:'Studio Collective',beeLevel:'Level 4',active:true}]

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})

export class FacultiesComponent implements OnInit {
  displayedColumns: string[] = ['facultyName', 'facultyType', 'beeLevel', 'active','action'];
  dataSource = FACULTIES;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  edit(data){
    this.router.navigate(['/home/editfaculty'],{state:{data:data}}); 
    console.log(data);
  }
  info(data){
    this.router.navigate(['/home/infofaculty'],{state:{data:data}}); 
    console.log(data);
  }

}
