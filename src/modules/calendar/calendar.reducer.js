import CalendarType from './calendar.type';
import { getNextMonth } from './calnder.util';

const initialState = {
  today: new Date(),
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
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
        month: action.payload - 1,
      };
    default:
      return state;
  }
}
