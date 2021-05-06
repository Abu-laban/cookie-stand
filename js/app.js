'use strict';

let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

let Locations = [];
function Location(locationName, minCust, maxCust, avgCookies) {
    this.locationName = locationName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.avgCustPerHour = [];
    this.avgCookiesPerHour = [],
        this.totalCookies = 0;
    Locations.push(this);
}
Location.prototype.numOfCustPerHour = function () {
    for (let index = 0; index < hours.length; index++) {
        let inAnHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
        this.avgCustPerHour.push(inAnHour);

    }
}

Location.prototype.cookiesPerCust = function () {
    for (let i = 0; i < hours.length; i++) {
        let inAnHour = Math.ceil(this.avgCustPerHour[i] * this.avgCookies);
        this.avgCookiesPerHour.push(inAnHour);
        this.totalCookies += inAnHour;
    }
}
Location.prototype.render = function () {
    let tableRow = document.createElement('tr');
    tableElement.appendChild(tableRow);
    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = this.locationName;
    for (let i = 0; i < hours.length; i++) {
        let tdEl = document.createElement('td');
        tableRow.appendChild(tdEl);
        tdEl.textContent = `${this.avgCookiesPerHour[i]}cookies`;
    }
    let tdEl = document.createElement('td');
    tableRow.appendChild(tdEl);
    tdEl.textContent = `${this.totalCookies}cookies`;

}
    let divElement = document.getElementById('profiles');

    let articleElement = document.createElement('article');
    divElement.appendChild(articleElement);

    let tableElement = document.createElement('table');
    articleElement.appendChild(tableElement);

function makeHeaderRow() {
    let tableRow = document.createElement('tr');
    tableElement.appendChild(tableRow);

    let tableHeader = document.createElement('th');
    tableRow.appendChild(tableHeader);
    tableHeader.textContent = null;

    for (let index = 0; index < hours.length; index++) {
        let thEl = document.createElement('th');
        tableRow.appendChild(thEl);
        thEl.textContent = hours[index];
    }

    let thElement = document.createElement('th');
    thElement.textContent = 'Daily Location Total';
    tableRow.appendChild(thElement);
}

function makeFooterRow() {
    var tableFoot = document.createElement('tfoot');
    tableElement.appendChild(tableFoot);
    let tableRow = document.createElement('tr');
    tableFoot.appendChild(tableRow);
    let tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = 'Totals';
    let Total = 0;
    for (let i = 0; i < hours.length; i++) {
        let hourlyTotal = 0;
        for (let j = 0; j < Locations.length; j++) {
            hourlyTotal = hourlyTotal + Locations[j].avgCookiesPerHour[i];
            Total += Locations[j].avgCookiesPerHour[i];
        }
        let tdElement = document.createElement('td');
        tableRow.appendChild(tdElement);
        tdElement.textContent = `${hourlyTotal}cookies`;
    }
    let tdElement = document.createElement('td');
    tableRow.appendChild(tdElement);
    tdElement.textContent = `${Total}cookies`;
}

makeHeaderRow();
let Seattle = new Location('Seattle', 23, 65, 6.3);
Seattle.numOfCustPerHour();
Seattle.cookiesPerCust();
Seattle.render();
let Tokyo = new Location('Tokyo', 3, 24, 1.2);
Tokyo.numOfCustPerHour();
Tokyo.cookiesPerCust();
Tokyo.render();
let Dubai = new Location('Dubai', 11, 38, 3.7);
Dubai.numOfCustPerHour();
Dubai.cookiesPerCust();
Dubai.render();
let Paris = new Location('Paris', 20, 38, 2.3);
Paris.numOfCustPerHour();
Paris.cookiesPerCust();
Paris.render();
let Lima = new Location('Lima', 2, 16, 4.6);
Lima.numOfCustPerHour();
Lima.cookiesPerCust();
Lima.render();
makeFooterRow();

let newLocationForm = document.getElementById('newLocationForm');
newLocationForm.addEventListener('submit', addLocation);
function addLocation(event){
    event.preventDefault();

  let locationName = event.target.locationName.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let avgCookies = parseFloat(event.target.avgCookies.value);

  let newLocation = new Location(locationName, minCust, maxCust, avgCookies);
  
  tableElement.deleteTFoot();

  newLocation.numOfCustPerHour();
  newLocation.cookiesPerCust();
  newLocation.render();
  
  makeFooterRow();
}
