import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-policy-details',
  templateUrl: './policy-details.component.html',
  styleUrls: ['./policy-details.component.scss']
})
export class PolicyDetailsComponent implements OnInit {

  pdfPath= '';
  pdfName= '';

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
    this.pdfPath = history.state.url;
    this.pdfName = history.state.name;
  }

  goBack() {
    this.location.back()
  }

}
