import { Component, OnInit } from '@angular/core';
import { TasksService } from './../../service/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  
  //  To get Task Id 
  taskID :any = null; 
  task :any
  newTitle :any;
  newDesc:any

  constructor(private taskServ : TasksService,
             private route :Router,
             private router :ActivatedRoute,
             private namePage:Title,
             private toastr : ToastrService) 
             
 { 
  this.namePage.setTitle("Task Manger")
 }

  ngOnInit(): void {
    this.taskID = this.router.snapshot.paramMap.get('id'); 
    this.task = this.taskServ.Tasks[this.taskID];
  }

  delete(){
    this.taskServ.deleteTask(this.taskID);
    alert(`Are You Sure TO Delete ${this.task.title} Task`)
    this.deleteSuccess()
    this.route.navigate(['/'])
  }
  // Alert MSG 
    deleteSuccess() {
    this.toastr.success(`${this.task.title} Task Deleted Successfully`);
  }
 
  updateData(){
    if (this.newTitle){
    this.task.title = this.newTitle ; 
    }
    if(this.newDesc){
      this.task.description = this.newDesc ; 
    }

    this.taskServ.update(this.taskID , this.task);
    this.UpdateSuccess()
    this.route.navigate(['/'])
  }
  UpdateSuccess() {
    this.toastr.success(`${this.task.title} Task Update Successfully`);
  }
  
  changeTitle(title:any){
   this.newTitle = title.innerHTML;
  }

  changeDescrption(desc:any){
    this.newDesc = desc.innerHTML;
  }
}
