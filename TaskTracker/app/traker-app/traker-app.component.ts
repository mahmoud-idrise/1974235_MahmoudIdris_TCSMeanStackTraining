import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Tracker } from '../tracker.model';

import { TrakerAppService } from '../traker-app.service';

@Component({
  selector: 'app-traker-app',
  templateUrl: './traker-app.component.html',
  styleUrls: ['./traker-app.component.css']
})


export class TrakerAppComponent implements OnInit {
data:string="";
ELEMENT_DATA: Tracker[] = [];
displayedColumns: string[] = ['id', 'name', 'task', 'date'];
dataSource = new MatTableDataSource <Tracker>(this.ELEMENT_DATA);

constructor(public taskSer: TrakerAppService) { }

  ngOnInit(): void {
  this.loadData();
    
  }

  taskUser(taskRef:any){
   this.ELEMENT_DATA.push( {id: taskRef.id, name: taskRef.name, task: taskRef.task, date: taskRef.date} );
    this.taskSer.storeTask(taskRef);
  }

loadData(){
  let response = this.taskSer.LoadTask();
  response.subscribe(task => this.dataSource.data = task as Tracker[]);
  console.log("load date call"+response);

}
  


 

}

function Array<T>(): Tracker {
  throw new Error('Function not implemented.');
}

