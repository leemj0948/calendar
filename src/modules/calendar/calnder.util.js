export const getNextMonth = (month, payload) => {
  return month + 1;
};

export const getprevMonth = (month, payload) => {
  return month - 1;
};

export const makeDateArr = (year, month) => {
  //이전 날짜
  let PVLastDate = new Date(year, month - 1, 0).getDate();
  let PVLastDay = new Date(year, month - 1, 0).getDay();
  //다음 날짜
  const ThisLasyDay = new Date(year, month, 0).getDay();
  const ThisLasyDate = new Date(year, month, 0).getDate();

  //이전 날짜 만들기
  let PVLD = [];
  if (PVLastDay !== 6) {
    for (let i = 0; i < PVLastDay + 1; i++) {
      PVLD.unshift(PVLastDate - i);
    }
  }
  //다음 날짜 만들기
  let TLD = [];
  for (let i = 1; i < 7 - ThisLasyDay; i++) {
    if (i === 0) {
      return TLD;
    }
    TLD.push(i);
  }

  //현재날짜
  let TD = [];

  TD = [...Array(ThisLasyDate + 1).keys()].slice(1);

  return PVLD.concat(TD, TLD);
};

export const goToday = () => {
  return new Date().getDate();
};
