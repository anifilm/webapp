var defaultPerson = {
  name: {
    first: '성원',
    last: '오',
  },
  favActivity: '테니스',
};

function logActivity(p = defaultPerson) {
  console.log(`${p.name.first}은(는) ${p.favActivity}를 좋아합니다.`);
}

logActivity();
