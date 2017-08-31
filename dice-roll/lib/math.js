'use strict';

const randomInt = (top) => {

  if(!top || top < 6) top = 6;
  return Math.floor((Math.random() * +top) + 1)
}

module.exports = { randomInt };