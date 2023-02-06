'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
const request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.com/v3.1/name/nepal');
request.send();

request.addEventListener('load', function () {
  console.log(this.responseText);
});
