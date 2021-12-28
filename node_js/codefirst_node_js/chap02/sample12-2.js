// bind 함수 사용

const people = {
  name: 'goldong',
  say: function () {
    console.log(this);
  },
};

people.say();

const sayPeople = people.say.bind(people);
sayPeople();