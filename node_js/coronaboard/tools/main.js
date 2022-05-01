const SheetApiClientFactory = require('./sheet_api_client_factory');
const SheetDownloader = require('./sheet_downloader');

async function main() {
  try {
    const sheetApiClient = await SheetApiClientFactory.create();
    const downloader = new SheetDownloader(sheetApiClient);

    const spreadsheetId = '1wvrIdwoLlSyLlaeA-W18XEak21y4dcyHIqyG875UJ0o';

    const notice = await downloader.downloadToJson(
      spreadsheetId,
      'notice',
      'downloaded/notice.json',
    );

    console.log(notice);

    const countryInfo = await downloader.downloadToJson(
      spreadsheetId,
      'countryInfo',
      'downloaded/countryInfo.json',
    );

    console.log(countryInfo);
  } catch (e) {
    console.error(e);
  }
}

main();
