export const sum = (a, b) => {
  return a + b;
};

export const person = (name, age) => {
  return {
    name,
    age,
  };
};

export const toggle = (a) => {
  return !a;
};

export const range = (start, end) => {
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
