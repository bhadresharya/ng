import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fellow-martians',
  templateUrl: './fellow-martians.component.html',
  styleUrls: ['./fellow-martians.component.scss']
})
export class FellowMartiansComponent implements OnInit {
  martians = [
    {
      'id': '1',
      'name': 'Amit Phatak',
      'designation': 'Principal Architect',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Aravamudan',
      'designation': 'Associate Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Arjun Ahlawat',
      'designation': 'Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Mr. Anish Srivastava',
      'designation': 'Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Caroline Remedenne',
      'designation': 'Senior Director',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Dayanand Naik',
      'designation': 'Associate Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Arjun Ahlawat',
      'designation': 'Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Aravamudan',
      'designation': 'Associate Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Amit Phatak',
      'designation': 'Principal Architect',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Aravamudan',
      'designation': 'Associate Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Arjun Ahlawat',
      'designation': 'Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Aravamudan',
      'designation': 'Associate Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Amit Phatak',
      'designation': 'Principal Architect',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Aravamudan',
      'designation': 'Associate Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Arjun Ahlawat',
      'designation': 'Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Aravamudan',
      'designation': 'Associate Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Amit Phatak',
      'designation': 'Principal Architect',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Aravamudan',
      'designation': 'Associate Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Arjun Ahlawat',
      'designation': 'Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Aravamudan',
      'designation': 'Associate Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Amit Phatak',
      'designation': 'Principal Architect',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Aravamudan',
      'designation': 'Associate Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Arjun Ahlawat',
      'designation': 'Vice President',
      'imgPath': './assets/images/prathima.png'
    },
    {
      'id': '1',
      'name': 'Aravamudan',
      'designation': 'Associate Vice President',
      'imgPath': './assets/images/prathima.png'
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openDetails(id: string) {
    this.router.navigateByUrl('fellow-martians/martian-details', { state: { id: id } })
  }

}
