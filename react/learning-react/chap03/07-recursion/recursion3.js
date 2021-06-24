const dan = {
  type: 'person',
  data: {
    gender: 'male',
    info: {
      id: 22,
      fullname: {
        first: 'Dan',
        last: 'Deacon',
      },
    },
  },
};

const deepPick = (field, object = {}) => {
  const [first, ...remaining] = field.split('.');
  return remaining.length
    ? deepPick(remaining.join('.'), object[first])
    : object[first];
};

console.log(deepPick('type', dan)); // person
console.log(deepPick('data.info.fullname.first', dan)); // Dan
