import { Component, OnInit } from '@angular/core';
import {workers_data} from '../../assets/pracownicy.json';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent implements OnInit {

  constructor() { }
  
  color_A = "#F1F1F1";
  color_B = "#D1D1D1";
  workersTab = workers_data;

  ngOnInit(): void {
  }
  
}
