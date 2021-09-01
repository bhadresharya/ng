import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {
  policies = [
    {
      "name": "Back to Office",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "IT"
    },
    {
      "name": "Code of Conduct",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "IT"
    },
    {
      "name": "Disiplinary Procedure",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "IT"
    },
    {
      "name": "Employee Handbook",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "IT"
    },
    {
      "name": "Guidelines for attandance Regularization",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "IT"
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openPolicy(pdfName: string, pdfPath: string) {
    this.router.navigateByUrl('policies/policy-details', { state: { name: pdfName, url: pdfPath } })
  }

}
