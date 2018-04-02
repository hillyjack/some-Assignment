import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Element} from '../app.component';

@Component({
  selector: 'app-single-stock',
  templateUrl: './single-stock.component.html',
  styleUrls: ['./single-stock.component.css']
})
export class SingleStockComponent implements OnInit {
  @Input()
  data:  Element[];
  @Output()
  statusChanges: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
