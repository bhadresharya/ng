import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss'],
})
export class AddEditTaskComponent implements OnInit {
  form: FormGroup;
  status: any;
  noStatus = false;
  id: any;
  task: any;

  constructor(
    private dataService: DataService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      taskStatus: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {
    this.getData();
    this.getEditTask();
  }

  onSubmit() {
    let title = this.form.value.title;
    let description = this.form.value.description;
    let status = this.form.value.taskStatus;
    let result = {
      title: title,
      description: description,
      status: status,
    };
    this.dataService.createTask(result);
    this.router.navigateByUrl('/');
  }

  getData() {
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
        if (this.status.length < 1) {
          this.noStatus = true;
        }
      });
  }

  getEditTask() {
    this.id = this.route.snapshot.queryParams.id;
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
        console.log('edit', this.task);
      });

  }
}
