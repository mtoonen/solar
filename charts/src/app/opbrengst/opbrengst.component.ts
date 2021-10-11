import {Component, OnInit} from '@angular/core';
import { multi } from './data';

@Component({
  selector: 'app-opbrengst',
  templateUrl: './opbrengst.component.html',
  styleUrls: ['./opbrengst.component.css']
})
export class OpbrengstComponent implements OnInit {

  constructor() {
    Object.assign(this, { multi });
  }

  multi: any[] = [];
  view: any[] = [700, 300];

  // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };


  ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
