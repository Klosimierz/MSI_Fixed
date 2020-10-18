import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudOperationsService {

  constructor(private http:HttpClient) { }

  getClients(): Observable<object> {
    return this.http.get(environment.backend+'/getClients');
  }

  getDelegations(): Observable<object> {
    return this.http.get(environment.backend+'/delegations')
  }

  deleteClient(client_id){
    console.log('delete_client');
    return this.http.post(environment.backend+'/deleteClient',{"ID":client_id});
  }

  insertClient(client_model) {
    return this.http.post(environment.backend+'/insertClient',
    {
      "NIP":client_model.nip,
      "REGON":client_model.regon,
      "NAZWA":client_model.nazwa,
      "VAT":client_model.vat,
      "ULICA":client_model.ulica,
      "NRDOMU":client_model.nrdomu,
      "NRMIESZKANIA":client_model.nrmieszkania
    })
  }

  updateClient(client_model,id) {
    return this.http.post(environment.backend+'/updateClient',
    {
      "NIP":client_model.nip,
      "REGON":client_model.regon,
      "NAZWA":client_model.nazwa,
      "VAT":client_model.vat,
      "ULICA":client_model.ulica,
      "NRDOMU":client_model.nrdomu,
      "NRMIESZKANIA":client_model.nrmieszkania,
      "ID":id
    });
  }



}
