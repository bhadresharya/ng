import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.scss']
})
export class DesignationComponent implements OnInit {

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

  openDetails() {
    this.router.navigateByUrl('/goals-careers/roles-kra')
  }

}
