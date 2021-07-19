import CalendarType from './calendar.type';

export const increase = (month) => ({
  type: CalendarType.INCREASE,
  payload: month,
});
export const decrease = (month) => ({ type: CalendarType.DECREASE });

export const showdate = () => ({
  type: CalendarType.SHOWDATE,
});
