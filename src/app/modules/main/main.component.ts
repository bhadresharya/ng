import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openSubmenu(id: string) {
    $('#' + id + ' .submenu').toggleClass('show');
  }

}
