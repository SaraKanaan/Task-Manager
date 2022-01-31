import { TasksService } from './../../service/tasks.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private taskServ : TasksService ,
              private toastr : ToastrService) { }
  
  allTasks:any ; 

  ngOnInit(): void {
    this.getTask()
  }

  getTask(){
   this.allTasks  = this.taskServ.Tasks;
  }

  deleteTask(index:number){
    alert('Are You Sure To Delete This Task ?!');
   this.taskServ.deleteTask(index);
   this.deleteSuccess()
  }
  deleteSuccess() {
    this.toastr.success(`Task Deleted Successfully`);
  }
}
