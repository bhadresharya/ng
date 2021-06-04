import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: any = [];
  status: any;
  noStatus = false;


  constructor(public router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
    this.getStatus()
  }

  getData() {
    this.dataService
      .getTasks()
      .pipe(
        map((responseData: any) => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe((response) => {
        this.tasks = response;
        console.log(this.tasks);
        
      });
  }

  getStatus() {
    this.dataService
      .getStatus()
      .pipe(
        map((taskResponseData: any) => {
          const postsArray = [];
          for (const key in taskResponseData) {
            if (taskResponseData.hasOwnProperty(key)) {
              postsArray.push({ ...taskResponseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe((taskResponse) => {
        this.status = taskResponse;
        console.log(this.status)
        if(this.status.length < 1) {
          this.noStatus = true
        }
      });
  }

  onDetails(id: string) {
    this.router.navigateByUrl('/task/'+id);
  }

  onAddTask() {
    this.router.navigateByUrl('/add-task');
  }
}
