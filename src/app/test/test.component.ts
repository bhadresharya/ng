import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  @Output() outputData = new EventEmitter<{name: string}>()

  constructor() { }

  ngOnInit(): void {
  }

  onOutputData() {
    this.outputData.emit({
      name: 'test'
    })
  }

}
