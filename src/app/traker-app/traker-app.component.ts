import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import { TrakerAppService } from '../traker-app.service';


@Component({
  selector: 'app-traker-app',
  templateUrl: './traker-app.component.html',
  styleUrls: ['./traker-app.component.css']
})
export class TrakerAppComponent implements OnInit {
data:string="";
displayedColumns = ['id', 'name', 'task', 'date'];
dataSource: any;

public rows: Array<{id: any, name: any, task: any, date: any}> = [];


  constructor(public taskSer: TrakerAppService) { }

  ngOnInit(): void {
  }
  taskUser(taskRef:any){
  this.rows.push( {id: taskRef.id, name: taskRef.name, task: taskRef.task, date: taskRef.date} );
  this.taskSer.storeTask(taskRef); 
  this.dataSource= document.getElementById("table");
  
  
  }
  

    taskRef = 'app';
  
    
    
  }
  
  
    
  






 
