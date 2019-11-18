import { getHtml } from './lib/scraper';

async function startScrape() {
  console.log(await getHtml());
}

startScrape();
