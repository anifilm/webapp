const axios = require('axios');
const chreeio = require('cheerio');
const vm = require('vm');

async function main() {
  const resp = await axios.get('http://yjiq150.github.io/coronaboard-crawling-sample/dom-with-script',);

  const $ = chreeio.load(resp.data);
  const extractedCode = $('script').first().html();

  const context = {};
  vm.createContext(context);
  vm.runInContext(extractedCode, context);

  console.log(context.dataExample.content);
};

main();
