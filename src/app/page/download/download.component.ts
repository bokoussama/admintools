import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  closeResult: string;
  constructor(private modalService: NgbModal) {}

  @ViewChild('content') modalDiv: NgbModal;

  ngOnInit() {
    this.modalService.open(this.modalDiv, { windowClass: 'dark-modal' });
  }

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }
}
