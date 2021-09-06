import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-aboard',
  templateUrl: './welcome-aboard.component.html',
  styleUrls: ['./welcome-aboard.component.scss']
})
export class WelcomeAboardComponent implements OnInit {

  policies = [
    {
      "name": "New Martian HR Induction",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": ""
    },
    {
      "name": "Compensation & Benefits",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": ""
    },
    {
      "name": "National Pension Scheme",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": ""
    },
    {
      "name": "Basics of Income Tax",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": ""
    },
    {
      "name": "Organizational Chart",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": ""
    },
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openPolicy(pdfName: string, pdfPath: string) {
    this.router.navigateByUrl('hr-policies/policy-details', { state: { name: pdfName, url: pdfPath } })
  }

}
