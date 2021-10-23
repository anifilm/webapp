const Nightmare = require('nightmare');
const vo = require('vo');

const nightmare = Nightmare({
  show: true
});

const BASE_URL = 'https://grafolio.naver.com/category/painting';
const GRAPOLIO_URL = `${BASE_URL}#category_popular_creator`;

function* run() {
  yield nightmare.goto(GRAPOLIO_URL);
  let prevHeight,
    currHeight = 0;
  while (prevHeight !== currHeight) {
    prevHeight = currHeight;
    currHeight = yield nightmare.evaluate(() => document.body.scrollHeight);
    yield nightmare.scrollTo(currHeight, 0).wait(3000);
  }
  const a = yield nightmare.evaluate(() =>
    Array.from(document.querySelectorAll('a.thumb')).map(
      (e) => `https://grafolio.naver.com${e.getAttribute('href')}`
    )
  );
  console.log(a);
  yield nightmare.end();
}

vo(run)(() => console.log('스크래핑이 완료되었습니다.'));
