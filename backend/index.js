import { getHtml, getRightMoveProperty } from './lib/scraper';

const rightMove =
  'https://www.rightmove.co.uk/property-for-sale/find.html?locationIdentifier=REGION%5E93554&minBedrooms=2&maxPrice=375000&radius=3.0&propertyTypes=flat&primaryDisplayPropertyType=flats&includeSSTC=false&mustHave=newHome&dontShow=retirement&furnishTypes=&keywords=';

async function startScrape() {
  getRightMoveProperty(await getHtml(rightMove));
}

startScrape();
