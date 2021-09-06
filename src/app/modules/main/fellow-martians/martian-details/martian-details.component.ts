import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-martian-details',
  templateUrl: './martian-details.component.html',
  styleUrls: ['./martian-details.component.scss']
})
export class MartianDetailsComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back()
  }

}
