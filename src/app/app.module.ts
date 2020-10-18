import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HtmlControlsComponent } from './html-controls/html-controls.component';
import { RouterModule } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { WorkersComponent } from './workers/workers.component';
import { VatComponent } from './vat/vat.component';
import { DelegationsComponent } from './delegations/delegations.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HtmlControlsComponent,
    WorkersComponent,
    ClientsComponent,
    VatComponent,
    DelegationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HtmlControlsComponent},
      {path: 'kontrolki', component:HtmlControlsComponent},
      {path: 'kontrahenci', component:ClientsComponent},
      {path: 'pracownicy', component:WorkersComponent},
      {path: 'faktury', component: VatComponent},
      {path: 'delegacje', component: DelegationsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
