import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { map } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
  task: any;
  id: any;
  status: any;
  form: FormGroup;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = new FormGroup({
      status: new FormControl('',Validators.required),
      title: new FormControl(''),
      description: new FormControl('')
    })
  }

  ngOnInit(): void {
    this.getData();
    this.getStatus();
  }

  getData() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService
      .getSingleTask(this.id)
      .pipe(
        map((responseData: any) => {
          const postsArray = [];
          postsArray.push(responseData);
          return postsArray;
        })
      )
      .subscribe((response) => {
        this.task = response;
        console.log(this.task);
      });
  }

  onEditTask() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.router.navigate(['/add-task/'], { queryParams: { id: this.id } });
  }

  onStatusChange() {
    this.id = this.route.snapshot.paramMap.get('id');
    let status = this.form.value.status;
    this.dataService.changeTaskStatus(this.id,status)
  }

  getStatus() {
    this.dataService
      .getStatus()
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
        this.status = response;
        console.log(this.status);
       
      });
  }
}
