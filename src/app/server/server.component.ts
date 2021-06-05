import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent implements OnInit {
  serverName = 'TestServer';
  serverId = 10;
  serverStatus = 'offline';

  constructor() { }

  ngOnInit(): void {
  }

  getServerStatus() {
    return this.serverStatus;
  }

}
