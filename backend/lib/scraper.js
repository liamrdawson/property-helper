import axios from 'axios';
import cheerio from 'cheerio';

export async function getHtml(url) {
  const { data: html } = await axios.get(url);
  return html;
}

export async function getRightMoveProperties(minBeds = 2, maxPrice = 375000) {
  const html = await getHtml(
    `https://www.rightmove.co.uk/property-for-sale/find.html?locationIdentifier=REGION%5E93554&minBedrooms=${minBeds}&maxPrice=${maxPrice}&radius=3.0&propertyTypes=flat&primaryDisplayPropertyType=flats&includeSSTC=false&mustHave=newHome&dontShow=retirement&furnishTypes=&keywords=`
  );
  const $ = cheerio.load(html);
  const propertyPrice = $(`.propertyCard-priceValue`).text();
  const propertyLocation = $(
    `.propertyCard-address, address.propertyCard-title`
  ).text();
  const locationList = propertyLocation
    .split('  ')
    .filter(index => index !== '')
    .filter(index => index !== '\n');
  const priceList = propertyPrice
    .split(' ')
    .filter(place => place !== '')
    .map(price => price);
  let count = 0;
  const propertyData = locationList.map(property => {
    const propData = {
      location: property,
      price: priceList[count],
    };
    count += 1;
    return propData;
  });
  console.log(propertyData);
  return propertyData;
}
