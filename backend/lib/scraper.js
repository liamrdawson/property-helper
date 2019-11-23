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
    `.propertyCard-address, address.propertyCard-address`
  ).text();
  // const priceList = propertyPrice
  //   .split(' ')
  //   .filter(place => place !== '')
  //   .map(price => price);
  console.log(propertyLocation);
  // console.log(priceList);
  return propertyLocation;
  // return priceList;
}
