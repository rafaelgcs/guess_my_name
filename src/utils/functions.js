import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

const addDaysInDate = (date, days) => {
  date.setDate(date.getDate() + days);
  return date;
};

const getFormatedDate = (date, withHours) => {
  const days = date.getUTCDate();
  const month = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();
  const hour = date.getHours();
  const min = date.getMinutes();

  let str = `${days < 10 ? `0${days}` : days}/${month < 10 ? `0${month}` : month}/${year}`;

  if (withHours) {
    str += ` - ${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}`;
  }

  return str;
};

const getNameInitials = (str) => {
  const strArray = str.split(' ');
  let initials = '';

  if (strArray.length > 1) {
    initials = `${strArray[0][0]}${strArray[strArray.length - 1][0]}`;
  } else {
    initials = `${str[0]}${str[1]}`;
  }

  return initials;
};

const toCript = (str) => {
  if (str != null) {
    const buff = Buffer.from(str, 'utf-8');
    return buff.toString('base64');
  }
  return null;
};

const fromCript = (str) => {
  if (str != null) {
    const buff = Buffer.from(str, 'base64');
    return buff.toString('utf-8');
  }
  return null;
};

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
const getRandomArbitrary = (min, max) => Math.random() * (max - min) + min;

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Returns a random image from picsum.photos between width and height
 */
const getRandomImage = (width = 800, height = 200) => {
  const url = `https://picsum.photos/${width}/${height}`;
  // let url = `https://picsum.photos/id/${getRandomInt(
  //   0,
  //   1084
  // )}/${width}/${height}`;

  return url;
};

const generateRandomUsername = () => {
  const randomName = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey

  const arr = randomName.split('_');

  const str = `${toUperFirstChar(arr[0])}${toUperFirstChar(arr[1])}${toUperFirstChar(arr[2])}`;

  return str;
};

const toUperFirstChar = (str) => `${str[0].toUpperCase()}${str.substr(1, str.length)}`;

export {
  addDaysInDate,
  getFormatedDate,
  getNameInitials,
  fromCript,
  toCript,
  getRandomArbitrary,
  getRandomInt,
  getRandomImage,
  generateRandomUsername,
  toUperFirstChar
};
