import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { GoalsCareersService } from '../goals-careers.service';

@Component({
  selector: 'app-roles-kra',
  templateUrl: './roles-kra.component.html',
  styleUrls: ['./roles-kra.component.scss']
})
export class RolesKraComponent implements OnInit {
  rolesKra = [
    {
      "id": 1,
      "designation": "CXO",
      "data": [
        {
          "keyResults": "I. Professional excellence",
          "specificGoals": "Development of competencies basis the requirements of the role Enhancing one's professional capability and role productivity (contribution)",
          "activities": "a. Pursuing competency development programs to keep oneself abreast in his / her technology area of work. b. Investing time mentoring team members on areas of expertise to be able to enhance one's knowledge and that of the team",
          "measures": "a. No. of trainings attended b. Ideas and productivity improvements suggested and implemented c. No. of knowledge sharing sessions attended d. Time spent on mentoring team members e. Tranings delivered (person hours) f. Relevant Certifications acquired and the ability to transfer the knowledge in one's tasks / deliverables",
          "weightage": "10%"
        },
        {
          "keyResults": "II. Role excellence - Individual contribution",
          "specificGoals": "a. Ensuring on time delivery of tasks and modules b. Ensuring quality output c. Enhancing personal productivity",
          "activities": "1.Understanding the requirements of the role and be able to deliver within the specified timelines and expected quality 2. Ensuring coding and testing standards meet the design specifications accurately 3. On time delivery of modules within the acceptable quality standards 4. Technical documentation 5. Effective reviews",
          "measures": "a. Productivity measures applicable for the role / project / Productivity improvements achieved b. Ideas and process improvements suggested and implemented c. Lines of code d. No. of review comments raised e. No. of bugs detected f. No. of bugs fixed g. Schedule variance h. Effort variance i. Effort saved through re-usability and usage of KM portal / project repository j. No. of defects identified post unit testing k. Defect injection rate l. Defects Density Ratio m. No. of delivered defects n. Customer feedback / C-SAT rating",
          "weightage": "40%"
        },
        {
          "keyResults": "III. Role excellence - Technological Guidance",
          "specificGoals": "1. Ensuring quality output from the team 2. Enhancing the technology prowess of the project and ensuring risk-free execution 3. Enhancing C-SAT 4. Building team competence",
          "activities": "1. Identifying appropriate tasks and metrics for team members to help them manage their peformance and contribution to the project effectively 2. Encouraging use of KM repository for enhancing quality / productivity 3. Encouraging resuability and contributing to reusability 4. Mentoring team in delivering error-free output 5. Helping team members in tracking metrics and reporting per the standards defined 6. Helping team understand, appreciate and adhere to necessary processes, standards and templates 7. Mentoring the team to bridge the competency gaps of individual team members as appropriate",
          "measures": "a. Usage of the KM repositories b. Productivity improvements achieved c. Contributions made to the KM repositories d. Process improvements achieved e. Audit observations and NCs that can be attributed to process non-compliance at the module level",
          "weightage": "35%"
        },
        {
          "keyResults": "IV. Project / Process / organizational excellence",
          "specificGoals": "1. Project performance enhancement 2. Process improvements achieved; 3. Work products delivered are accurate, upto the standards and specifications defined for the project / customer / orgn.",
          "activities": "1. Contribution towards process improvements at the project level and org. level w.r.t technical standards and POCs 2. Usage of Marlabs KM repository to demonstrate productivity improvements 3. Contributing towards knowledge assets in the form of papers, best practices, improved processes 4. Paricipating in the competency development initiatives at the org. level through delivery of trainings, contributing to knowledge assets such as case studies, ideas for process / productivity enhancements, presenting papers, etc. 5. Adherence to project practices, standards, specifications, etc. at the team level.",
          "measures": "a. Usage of the KM repositories b. Productivity improvements achieved c. Contributions made to the KM repositories d. Process improvements achieved e. Audit observations and NCs that can be attributed to process non-compliance by the role-holder",
          "weightage": "15%"
        }
      ]
    }
  ];
  roles = [];

  constructor(
    private location: Location,
    private goalsCareersService: GoalsCareersService
  ) { }

  ngOnInit(): void {
    this.goalsCareersService.getJSON().subscribe(data=> {
      console.log(data);
      this.roles = data
      
    });
  }

  goBack() {
    this.location.back();
  }

}
