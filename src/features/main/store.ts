interface ICalendarData {
  calendarId: number;
  info: string;
  countDDay: number;
}

export interface ICalendar {
  msg: string;
  data: ICalendarData;
}
