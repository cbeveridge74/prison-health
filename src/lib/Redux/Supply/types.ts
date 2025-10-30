export enum DaysOfWeek {
    Sunday = 'Sunday',
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday'
}

export enum Frequency {
    daily = 1,  // Note that Frequency * Interval gives  how ofter e.g. 1 * 2 = every 2 days or Frequency / Interval = 0.5 day
    weekly = 7, 
    monthly = 28, 
    yearly = 365
}

export enum MonthsOfYear {
    January = 'January',
    February = 'February',
    March = 'March',
    April = 'April',
    May = 'May',
    June = 'June',
    July = 'July',
    August = 'August',
    September = 'September',
    October = 'October',
    November = 'November',
    December = 'December'
}

export interface ISupply {
    UUID: string;
    Cadence: ICadence;
}

export interface ISupplyICadenceRef {
    UUID: string;
    SingleDose: ICadence;
    Course: ICadence;
    AsRequired: ICadence;
    Daily: ICadence;
    Weekly: ICadence;
    Fortnightly: ICadence;
    Monthly: ICadence;
    Supervised: ICadence; // This covers "custom" too
}
  
export interface ICadence {
    UUID: string;
    Frequency: number; // See Frequency
    Interval: number;
    DaysOfWeek: string[]; // See DaysOfWeek
    MonthsOfYear: string[] // See MonthsOfYear
    StartTime: string;
    EndTime: string;
    Exclusions: string[];
}