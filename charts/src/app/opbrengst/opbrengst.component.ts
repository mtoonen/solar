import {Component, OnInit} from '@angular/core';
import {data} from './data_energy_2';
import {multi} from './data';
import {ChartData} from "../models/ChartData";
import {DataConverterService} from "../services/data-converter.service";
import {GetDataService} from "../services/get-data.service";
import {concatMap, map, switchMap} from "rxjs/operators";
import {Interval, Opbrengst} from "../models/opbrengst";

@Component({
  selector: 'app-opbrengst',
  templateUrl: './opbrengst.component.html',
  styleUrls: ['./opbrengst.component.css']
})
export class OpbrengstComponent implements OnInit {

  constructor(private dataConverter: DataConverterService,
              private service : GetDataService) {
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
  xAxisLabel: string = 'Datum';
  yAxisLabel: string = 'Energie';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };


  ngOnInit(): void {
    const dates = ['1634428800', '1634342400'];
    this.service.getDataMulti(dates)
      .subscribe(vals =>{
        const intervals : Interval[]= [];
        vals.forEach(op => intervals.push(...op.intervals))
        const b = 0;
        const a = this.dataConverter.convertOpbrengst({
          system_id: 123,
          intervals,
          total_devices:12
        });
        this.data = a;


    });
    /*this.service.getData('1634559950').subscribe(value => {
      const a = this.dataConverter.convertOpbrengst(value);
      this.data = a;
    })*/

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
