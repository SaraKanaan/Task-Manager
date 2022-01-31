import { Injectable } from '@angular/core';
import {Task} from '../interface/task'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() {
    let savedTask = localStorage.getItem('tasks');
    if(savedTask){
      this.Tasks = JSON.parse(savedTask);
    }else{
      this.Tasks =[]
    }
    // console.log(savedTask)
   }

 
  Tasks : Array<Task> = [] ;

  addTask(title:any , description:any){
      this.Tasks.push({
        title :title,
        description:description
      })
    this.saveAllData()
  }

  deleteTask(i:number){
     this.Tasks.splice(i,1);
     this.saveAllData();
  }

  update(i:any , data:any){
    this.Tasks[i] = data;
    this.saveAllData();
  }

  saveAllData(){
    localStorage.setItem('tasks' , JSON.stringify(this.Tasks))
    // console.log(localStorage)
  }

}
