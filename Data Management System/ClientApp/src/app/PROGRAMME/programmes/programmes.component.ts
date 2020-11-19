import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface Programme {
  programmeName: string;
  faculty: string;
  contract: number;
  active: boolean; 
  startDate:Date
}

const PROGRAMMES:Programme[] = [
  {programmeName:'JP Morgan',faculty:'Tshimologong',contract:500000,active:true,startDate:new Date('2020-04-14')},
  {programmeName:'IBM',faculty:'Incubator',contract:900000,active:false,startDate:new Date('2020-01-25')},
  {programmeName:'Samsung',faculty:'Incubator',contract:2000000,active:true,startDate:new Date('2020-05-14')},]

@Component({
  selector: 'app-programmes',
  templateUrl: './programmes.component.html',
  styleUrls: ['./programmes.component.css']
})
export class ProgrammesComponent implements OnInit {
  displayedColumns: string[] = ['programmeName', 'faculty', 'contract', 'active','startDate','action'];
  dataSource = PROGRAMMES;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  edit(data){
    this.router.navigate(['/home/editprogramme']);
  }
  info(){
    this.router.navigate(['/home/infoprogramme']);
  }
}
