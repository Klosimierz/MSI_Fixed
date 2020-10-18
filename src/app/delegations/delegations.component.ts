import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CrudOperationsService } from '../crud-operations.service';

@Component({
  selector: 'app-delegations',
  templateUrl: './delegations.component.html',
  styleUrls: ['./delegations.component.css']
})
export class DelegationsComponent implements OnInit {

  delegations$: Observable<object>;

  constructor(private crud:CrudOperationsService) { }

  ngOnInit(): void {
    this.delegations$ = this.crud.getDelegations();
  }

}
