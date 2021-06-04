import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  tasks: {} = {};
  constructor(private http: HttpClient) {}

  createTask(data: {}) {
    this.http
      .post<any>(
        'https://ng-api-c1239-default-rtdb.firebaseio.com/tasks.json',
        data
      )
      .subscribe((data) => {
          console.log(data);
      });
  }

  addStatus(data: {}) {
    this.http
      .post<any>(
        'https://ng-api-c1239-default-rtdb.firebaseio.com/status.json',
        data
      )
      .subscribe((data) => {
          console.log(data);
      });
  }

  getTasks() {
    return this.http
      .get('https://ng-api-c1239-default-rtdb.firebaseio.com/tasks.json')
  }

  getSingleTask(id: string) {
    return this.http
      .get(`https://ng-api-c1239-default-rtdb.firebaseio.com/tasks/${id}.json`)
  }

  getStatus() {
    return this.http
      .get('https://ng-api-c1239-default-rtdb.firebaseio.com/status.json')
  }

  putStatus(id: string, status: any) {
    return this.http.put(`https://ng-api-c1239-default-rtdb.firebaseio.com/status/${id}.json`, {status: status})
    .subscribe(data => {
      console.log(data);
      
    })
  }

  changeTaskStatus(id: string, status: any) {
    return this.http.patch(`https://ng-api-c1239-default-rtdb.firebaseio.com/tasks/${id}.json`, {status: status})
    .subscribe(data => {
      console.log(data);
    })
  }

}
