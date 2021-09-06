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
    },
    {
      "name": "Bench Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "People Policies"
    },
    {
      "name": "Corporate social Reponsibility",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "People Policies"
    },
    {
      "name": "Grievance Redressai Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "People Policies"
    },
    {
      "name": "Holiday Calendar for 2021",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "People Policies"
    },
    {
      "name": "Leave Donation Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "People Policies"
    },
    {
      "name": "Leave Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "People Policies"
    },
    {
      "name": "Separation Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "People Policies"
    },
    {
      "name": "Teleworking Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "People Policies"
    },
    {
      "name": "Corona Kavach Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "COmpensation & Benefits"
    },
    {
      "name": "Group Medical Insurance Program",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "COmpensation & Benefits"
    },
    {
      "name": "Medical Loan Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "COmpensation & Benefits"
    },
    {
      "name": "Performance Linked Incentive Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "COmpensation & Benefits"
    },
    {
      "name": "PF Forms",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "COmpensation & Benefits"
    },
    {
      "name": "Salary Advance Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "COmpensation & Benefits"
    },
    {
      "name": "Skill Allowance Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "COmpensation & Benefits"
    },
    {
      "name": "Vehicle Lease Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "COmpensation & Benefits"
    },
    {
      "name": "Corona Compentency Management System and Procedure",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Performance & Learning"
    },
    {
      "name": "Marlabs Certification Program for Professional Development",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Performance & Learning"
    },
    {
      "name": "Marlabs Freshers Hiring Policy and Procedure",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Performance & Learning"
    },
    {
      "name": "Performance Management System Policy and Procedure",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Performance & Learning"
    },
    {
      "name": "PIP Policy and Procedure",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Performance & Learning"
    },
    {
      "name": "Training Development Policy and Procedure",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Performance & Learning"
    },
    {
      "name": "Training Calendar",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Performance & Learning"
    },
    {
      "name": "Training Curriculam",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Performance & Learning"
    },
    {
      "name": "Training Plan",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Performance & Learning"
    },
    {
      "name": "Goals & Careers",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Performance & Learning"
    },
    {
      "name": "Business and Entertainment Meals Policy - US",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Travel & Expenses"
    },
    {
      "name": "Domestic Travel Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Travel & Expenses"
    },
    {
      "name": "International Travel Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Travel & Expenses"
    },
    {
      "name": "Special Deputation Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Travel & Expenses"
    },
    {
      "name": "Employee Referral Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Hiring"
    },
    {
      "name": "Freshers Hiring Policy and Procedure",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Hiring"
    },
    {
      "name": "Standard Operating Procedure for Talent Acquisition",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Hiring"
    },
    {
      "name": "US Background Verification Policy",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Hiring"
    },
    {
      "name": "Standard Operating Procedure For Human Resources Department",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Others"
    },
    {
      "name": "Miscellaneous Expense ",
      "pdfPath": "../assets/policies/Back To Office Manual - Marlabs, India (1).pdf",
      "category": "Others"
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
