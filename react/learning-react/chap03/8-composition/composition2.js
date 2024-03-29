const createClockTime = (date) => ({ date });

const appendAMPM = ({ date }) => ({
  date,
  ampm: date.getHours() >= 12 ? 'PM' : 'AM',
});

const civilianHours = (clockTime) => {
  const hours = clockTime.date.getHours();
  return {
    ...clockTime,
    hours: hours > 12 ? hours - 12 : hours,
  };
};

const removeDate = (clockTime) => {
  let newTime = { ...clockTime };
  delete newTime.date;
  return newTime;
};

 // 앞의 모든 함수를 합성하지만 그렇게 좋은 방법은 아니다.

const oneFunction = (date) =>
  removeDate(civilianHours(appendAMPM(createClockTime(date))));

console.log(oneFunction(new Date()));
// { ampm: 'PM', hours: 2 }
