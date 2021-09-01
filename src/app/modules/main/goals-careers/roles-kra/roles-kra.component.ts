import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles-kra',
  templateUrl: './roles-kra.component.html',
  styleUrls: ['./roles-kra.component.scss']
})
export class RolesKraComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
