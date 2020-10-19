import { Component, OnInit } from '@angular/core';
import { CommonComponent } from '../../../../shared/modals/common/common.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';  

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  modalRef: BsModalRef;  

  constructor(
    private _modalService: BsModalService
  ) { }

  ngOnInit() {
  }

  addTransaction() {
    const initialState = {}
    this.modalRef = this._modalService.show(CommonComponent, { class: 'modal-md', initialState });
  }

}
