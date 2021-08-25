import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events = [
    {
      "date": new Date('1/08/21'),
      "time": "05:00 - 05:45 PM",
      "subHeading": "25 year celebration series",
      "heading": "Practice Talk: Dymistifying the AI/ML Practice",
      "moreLink": "/"
    },
    {
      "date": new Date('2/05/21'),
      "time": "05:00 - 05:45 PM",
      "subHeading": "25 year celebration series",
      "heading": "Practice Talk: Dymistifying the IOT Practice",
      "moreLink": "/"
    },
    {
      "date": new Date('10/21/21'),
      "time": "05:00 - 05:45 PM",
      "subHeading": "25 year celebration series",
      "heading": "Practice Talk: Dymistifying the IOT Practice",
      "moreLink": "/"
    },
    {
      "date": new Date('6/31/21'),
      "time": "05:00 - 05:45 PM",
      "subHeading": "25 year celebration series",
      "heading": "Practice Talk: Dymistifying the IOT Practice",
      "moreLink": "/"
    },
    {
      "date": new Date('10/20/21'),
      "time": "05:00 - 05:45 PM",
      "subHeading": "25 year celebration series",
      "heading": "Practice Talk: Dymistifying the IOT Practice",
      "moreLink": "/"
    },
    {
      "date": new Date('2/05/21'),
      "time": "05:00 - 05:45 PM",
      "subHeading": "25 year celebration series",
      "heading": "Practice Talk: Dymistifying the IOT Practice",
      "moreLink": "/"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
