'use strict'

var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    var countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    resp.forEach(function (item) {
        var liEl = document.createElement('h3');
        liEl.innerHTML = item.name + '<ul><li>' + 'Capital city: ' + item.capital + '</li><li>' + 'Region: ' + item.region + '</li><li>' + 'Native name: ' + item.nativeName + '</li><li>' + 'Population: ' + item.population + '</li></ul>';
        countriesList.appendChild(liEl);
    });
}