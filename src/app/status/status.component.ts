import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent implements OnInit {
  mode = 'add';
  form: FormGroup;
  status: any;

  constructor(private dataService: DataService) {
    this.form = new FormGroup({
      taskStatus: new FormControl('', Validators.required),
      id: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  onEdit(id: string, status: string) {
    this.mode = 'edit';
    // this.dataService.putStatus(id,'test')
    this.form.patchValue({
      id: id,
      taskStatus: status
    });
  }

  onSubmit() {
    if (this.mode != 'edit') {
      let taskStatus = this.form.value.taskStatus;
      let status = { status: taskStatus };
      this.dataService.addStatus(status);
      this.getData();
    } else if(this.mode === 'edit') {
      let id = this.form.value.id;
      let status = this.form.value.taskStatus
      console.log(id, status);
      this.dataService.putStatus(id,status)
    }
    this.form.reset();
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
      });
  }
}
