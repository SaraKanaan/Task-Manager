import { Router, Routes } from '@angular/router';
import { TasksService } from './../../service/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';
import { Form } from '@angular/forms';
import { concatAll } from 'rxjs';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  x =''
  constructor(private taskServ : TasksService ,
              private Routes :Router ,
              private title : Title ,
              private toastr: ToastrService) 
              {
               this.title.setTitle('Add Task')
              }

  ngOnInit(): void {
  }

  addTask(item:any){
       this.x=item.value.title;
       this.showSuccess();
       this.taskServ.addTask(item.value.title , item.value.desc);
       this.Routes.navigate(['/']);
       
  }

 save(save:any){
   this.taskServ.addTask(save.value.title , save.value.desc);
   this.showSuccess();
   this.x=save.value.title;
   this.Routes.navigate(['/']);

 }
  showSuccess() {
    this.toastr.success(`${this.x} task added successfully`);
  }
}
