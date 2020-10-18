import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { textChangeRangeIsUnchanged } from 'typescript';
import { CrudOperationsService } from '../crud-operations.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients$: Observable<object>;

  constructor(private http:CrudOperationsService,public modalService:NgbModal) { }

  open(content):void {
    this.modalService.open(content,{ariaLabelledBy:'Utwórz klienta'});
  }

  addClient(data) {
    this.http.insertClient(data.value)
    .subscribe(response => {
      console.log(response);
      this.clients$ = this.http.getClients();
    })
  }

  deleteClient(id) {
    this.http.deleteClient(id)
    .subscribe(response => {
      console.log(response);
      this.clients$ = this.http.getClients();
    })
  }

  edit(data,id) {
    this.http.updateClient(data.value,id)
    .subscribe(response => {
      console.log(response);
      this.clients$ = this.http.getClients();
    })
  }

  ngOnInit(): void {
  this.clients$ = this.http.getClients();
  }

}
