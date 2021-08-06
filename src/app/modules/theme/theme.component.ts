import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar() {
    $('.sidebar, header').toggleClass('sidebar-collapsed');
  }

}
