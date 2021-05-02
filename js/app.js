'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let Seattle = {
    name: 'Seattle',
    minCust: 23,
    maxCust: 65,
    avgCookies: 6.3,
    avgCustPerHour: [],
    numOfCustPerHour: function () {
        for (let index = 0; index < hours.length; index++) {
            let inAnHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            this.avgCustPerHour.push(inAnHour);

        }
    },
    avgCookiesPerHour: [],
    totalCookies: 0,
    cookiesPerCust: function () {
        for (let i = 0; i < hours.length; i++) {
            let inAnHour = Math.ceil(this.avgCustPerHour[i] * this.avgCookies);
            this.avgCookiesPerHour.push(inAnHour);
            this.totalCookies += inAnHour;
        }
    },
    render: function () {
        let divEl = document.getElementById('profiles');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h3El = document.createElement('h3');
        h3El.textContent = this.name;
        articleEl.appendChild(h3El);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} : ${this.avgCookiesPerHour[i]} cookies`;
            ulEl.appendChild(liEl)
        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total : ${this.totalCookies} cookies`;
        ulEl.appendChild(liEl)
    },
}
Seattle.numOfCustPerHour();
Seattle.cookiesPerCust();
Seattle.render();

let Tokyo = {
    name: 'Tokyo',
    minCust: 3,
    maxCust: 24,
    avgCookies: 1.2,
    avgCustPerHour: [],
    numOfCustPerHour: function () {
        for (let index = 0; index < hours.length; index++) {
            let inAnHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            this.avgCustPerHour.push(inAnHour);

        }
    },
    avgCookiesPerHour: [],
    totalCookies: 0,
    cookiesPerCust: function () {
        for (let i = 0; i < hours.length; i++) {
            let inAnHour = Math.ceil(this.avgCustPerHour[i] * this.avgCookies);
            this.avgCookiesPerHour.push(inAnHour);
            this.totalCookies += inAnHour;
        }
    },
    render: function () {
        let divEl = document.getElementById('profiles');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h3El = document.createElement('h3');
        h3El.textContent = this.name;
        articleEl.appendChild(h3El);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} : ${this.avgCookiesPerHour[i]} cookies`;
            ulEl.appendChild(liEl)
        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total : ${this.totalCookies} cookies`;
        ulEl.appendChild(liEl)
    },
}
Tokyo.numOfCustPerHour();
Tokyo.cookiesPerCust();
Tokyo.render();

let Dubai = {
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    avgCookies: 3.7,
    avgCustPerHour: [],
    numOfCustPerHour: function () {
        for (let index = 0; index < hours.length; index++) {
            let inAnHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            this.avgCustPerHour.push(inAnHour);

        }
    },
    avgCookiesPerHour: [],
    totalCookies: 0,
    cookiesPerCust: function () {
        for (let i = 0; i < hours.length; i++) {
            let inAnHour = Math.ceil(this.avgCustPerHour[i] * this.avgCookies);
            this.avgCookiesPerHour.push(inAnHour);
            this.totalCookies += inAnHour;
        }
    },
    render: function () {
        let divEl = document.getElementById('profiles');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h3El = document.createElement('h3');
        h3El.textContent = this.name;
        articleEl.appendChild(h3El);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} : ${this.avgCookiesPerHour[i]} cookies`;
            ulEl.appendChild(liEl)
        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total : ${this.totalCookies} cookies`;
        ulEl.appendChild(liEl)
    },
}
Dubai.numOfCustPerHour();
Dubai.cookiesPerCust();
Dubai.render();

let Paris = {
    name: 'Paris',
    minCust: 20,
    maxCust: 38,
    avgCookies: 2.3,
    avgCustPerHour: [],
    numOfCustPerHour: function () {
        for (let index = 0; index < hours.length; index++) {
            let inAnHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            this.avgCustPerHour.push(inAnHour);

        }
    },
    avgCookiesPerHour: [],
    totalCookies: 0,
    cookiesPerCust: function () {
        for (let i = 0; i < hours.length; i++) {
            let inAnHour = Math.ceil(this.avgCustPerHour[i] * this.avgCookies);
            this.avgCookiesPerHour.push(inAnHour);
            this.totalCookies += inAnHour;
        }
    },
    render: function () {
        let divEl = document.getElementById('profiles');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h3El = document.createElement('h3');
        h3El.textContent = this.name;
        articleEl.appendChild(h3El);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} : ${this.avgCookiesPerHour[i]} cookies`;
            ulEl.appendChild(liEl)
        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total : ${this.totalCookies} cookies`;
        ulEl.appendChild(liEl)
    },
}
Paris.numOfCustPerHour();
Paris.cookiesPerCust();
Paris.render();

let Lima = {
    name: 'Lima',
    minCust: 2,
    maxCust: 16,
    avgCookies: 4.6,
    avgCustPerHour: [],
    numOfCustPerHour: function () {
        for (let index = 0; index < hours.length; index++) {
            let inAnHour = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
            this.avgCustPerHour.push(inAnHour);

        }
    },
    avgCookiesPerHour: [],
    totalCookies: 0,
    cookiesPerCust: function () {
        for (let i = 0; i < hours.length; i++) {
            let inAnHour = Math.ceil(this.avgCustPerHour[i] * this.avgCookies);
            this.avgCookiesPerHour.push(inAnHour);
            this.totalCookies += inAnHour;
        }
    },
    render: function () {
        let divEl = document.getElementById('profiles');
        let articleEl = document.createElement('article');
        divEl.appendChild(articleEl);
        let h3El = document.createElement('h3');
        h3El.textContent = this.name;
        articleEl.appendChild(h3El);
        let ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);
        for (let i = 0; i < hours.length; i++) {
            let liEl = document.createElement('li');
            liEl.textContent = `${hours[i]} : ${this.avgCookiesPerHour[i]} cookies`;
            ulEl.appendChild(liEl)
        }
        let liEl = document.createElement('li');
        liEl.textContent = `Total : ${this.totalCookies} cookies`;
        ulEl.appendChild(liEl)
    },
}
Lima.numOfCustPerHour();
Lima.cookiesPerCust();
Lima.render();