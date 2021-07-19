import CalendarType from './calendar.type';
import {
  getNextMonth,
  getprevMonth,
  goToday,
  makeDateArr,
} from './calnder.util';

const initialState = {
  today: new Date(),
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
  calendardatearr: [],
  getToday: 0,
  // thisMonth: DATE.getMonth() + 1;
};

export default function calendar(state = initialState, action) {
  switch (action.type) {
    case CalendarType.SHOWDATE:
      return {
        ...state,
        year: state.year,
        month: state.month,
      };
    case CalendarType.INCREASE:
      return {
        ...state,
        month: getNextMonth(state.month, action.payload),
      };
    case CalendarType.DECREASE:
      return {
        ...state,
        month: getprevMonth(state.month, action.payload),
      };
    case CalendarType.SHOWCALENDAR:
      return {
        ...state,
        calendardatearr: makeDateArr(state.year, state.month),
      };
    case CalendarType.GOTODAY:
      return {
        ...state,
        getToday: goToday(),
        month: new Date().getMonth() + 1,
      };
    default:
      return state;
  }
}
