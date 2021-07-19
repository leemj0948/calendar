import CalendarType from './calendar.type';

export const increase = (month) => ({
  type: CalendarType.INCREASE,
  payload: month,
});
export const decrease = (month) => ({
  type: CalendarType.DECREASE,
  payload: month,
});

export const showdate = () => ({
  type: CalendarType.SHOWDATE,
});

export const showcalendar = (month, year) => ({
  type: CalendarType.SHOWCALENDAR,
  payload: month,
  year,
});

export const gotoday = () => ({
  type: CalendarType.GOTODAY,
});
