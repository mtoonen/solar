import {Injectable} from '@angular/core';
import {Opbrengst} from "../models/opbrengst";
import {ChartData, Serie} from "../models/ChartData";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class DataConverterService {

  constructor(private datepipe: DatePipe) { }

  public convertOpbrengst(opbrengst: Opbrengst): ChartData[]{
    let data : Map<string,Serie[]> = new Map<string, Serie[]>();

    opbrengst.intervals.forEach(interval =>{
      const d = new Date(interval.end_at*1000);
      const day = ''+ this.datepipe.transform(new Date(interval.end_at * 1000), 'dd-MM-yy');

      if(!data.has(day)){
        data.set(day, []);
      }
      const series = data.get(day) || [];
      const n = this.datepipe.transform(new Date(interval.end_at * 1000), 'HH:mm:ss dd-MM-yy');
      series.push({
        name: n ? n : '',
        value: interval.powr
      });
    });
    const array = Array.from(data, ([name, value]) => ({ name, value }));

    return [];
  }
}
