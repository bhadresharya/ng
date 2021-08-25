import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-happenings',
  templateUrl: './happenings.component.html',
  styleUrls: ['./happenings.component.scss']
})
export class HappeningsComponent implements OnInit {
  happenings = [
    {
      imgPath: './assets/images/happenings/banner (1).png'
    },
    {
      imgPath: './assets/images/happenings/banner (2).png'
    },
    {
      imgPath: './assets/images/happenings/banner (3).png'
    },
    {
      imgPath: './assets/images/happenings/banner (4).png'
    },
    {
      imgPath: './assets/images/happenings/banner (5).png'
    },
    {
      imgPath: './assets/images/happenings/banner (6).png'
    },
    {
      imgPath: './assets/images/happenings/banner (7).png'
    },
    {
      imgPath: './assets/images/happenings/banner (8).png'
    },
    {
      imgPath: './assets/images/happenings/banner (9).png'
    },
    {
      imgPath: './assets/images/happenings/banner (10).png'
    },
    {
      imgPath: './assets/images/happenings/banner (11).png'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
