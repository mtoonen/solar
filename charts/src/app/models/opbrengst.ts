export interface Opbrengst {
  'system_id': number;
  'total_devices': number;
  'intervals': Interval[]
}

export interface Interval {
  "end_at": number;
  "devices_reporting": number;
  "powr": number;
  "enwh": number;
}
