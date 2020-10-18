import { Component, OnInit } from '@angular/core';
import {faktury} from '../../assets/pracownicy.json'

@Component({
  selector: 'app-vat',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.css']
})
export class VatComponent implements OnInit {

  faktury:object[] = faktury;
  flag_A:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  swapFlag():void {
    this.flag_A = !this.flag_A;
  }
}
