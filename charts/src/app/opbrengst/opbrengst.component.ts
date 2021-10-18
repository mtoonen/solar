import {Component, OnInit} from '@angular/core';
import {data} from './data_energy_2';
import {multi} from './data';
import {ChartData} from "../models/ChartData";
import {DataConverterService} from "../services/data-converter.service";

@Component({
  selector: 'app-opbrengst',
  templateUrl: './opbrengst.component.html',
  styleUrls: ['./opbrengst.component.css']
})
export class OpbrengstComponent implements OnInit {

  constructor(private dataConverter: DataConverterService) {
    const a = dataConverter.convertOpbrengst(data);
    //Object.assign(this, { multi });
    this.data = multi;
  }

  data: ChartData[] = [];
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
        const a = 0;
    }

  onSelect(data: ChartData): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: ChartData): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: ChartData): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
