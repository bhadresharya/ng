import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hr-policies',
  templateUrl: './hr-policies.component.html',
  styleUrls: ['./hr-policies.component.scss']
})
export class HrPoliciesComponent implements OnInit {
  policies = [
    {
      "name": "Back to Office",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Code of Conduct"
    },
    {
      "name": "Code of Conduct",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Code of Conduct"
    },
    {
      "name": "Disiplinary Procedure",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Code of Conduct"
    },
    {
      "name": "Employee Handbook",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Code of Conduct"
    },
    {
      "name": "Guidelines for attandance Regularization",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Code of Conduct"
    }
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
