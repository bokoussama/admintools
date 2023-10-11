import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-node-config',
  templateUrl: './node-config.component.html',
  styleUrls: ['./node-config.component.scss']
})
export class NodeConfigComponent implements OnInit {

  @Input() type: string;
  host: string;
  nodeType: string;
  testStatus: boolean;

  constructor() { }

  ngOnInit() {
    this.nodeType = this.type;
  }

  verifyHost() {
    // send signal to check
    console.log(this.host);
  }

}
