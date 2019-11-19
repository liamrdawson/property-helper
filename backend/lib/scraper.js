import axios from 'axios';
import cheerio from 'cheerio';

export async function getHtml(url) {
  const { data: html } = await axios.get(url);
  return html;
}

export async function getRightMoveProperty(html) {
  const $ = cheerio.load(html);
  const span = $(`.propertyCard-priceValue`).text();
  const modSpan = span
    .split(' ')
    .filter(place => place !== '')
    .map(price => price);
  console.log(modSpan);
  return span;
}
