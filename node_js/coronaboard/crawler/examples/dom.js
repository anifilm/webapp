const axios = require('axios');
const cheerio = require('cheerio');

async function main() {
  const res = await axios.get('https://yjiq150.github.io/coronaboard-crawling-sample/dom');
  const $ = cheerio.load(res.data);
  const elements = $('.slide p');
  elements.each((idx, elem) => {
    console.log($(elem).text());
  });
}

main();
