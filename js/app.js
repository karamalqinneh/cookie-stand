// let mountains = [
//     { name: "Monte Falco", height: 1658, place: "Parco Foreste Casentinesi" },
//     { name: "Monte Falterona", height: 1654, place: "Parco Foreste Casentinesi" },
//     { name: "Poggio Scali", height: 1520, place: "Parco Foreste Casentinesi" },
//     { name: "Pratomagno", height: 1592, place: "Parco Foreste Casentinesi" },
//     { name: "Monte Amiata", height: 1738, place: "Siena" }
//   ];

// function myCreateFunction() {
//     let table = document.getElementById("myTable");
//     let header = table.createTHead();
//     let row = header.insertRow(0);
//     let cell = row.insertCell(0);
//     cell.innerHTML = "<b>This is a table header</b>";
//   }



//   function generateTableHead(table, data) {
//     let thead = table.createTHead();
//     let row = thead.insertRow();
//     for (let key of data) {
//       let th = document.createElement("th");
//       let text = document.createTextNode(key);
//       th.appendChild(text);
//       row.appendChild(th);
//     }
//   }
  
//   function generateTable(table, data) {
//     for (let element of data) {
//       let row = table.insertRow();
//       for (key in element) {
//         let cell = row.insertCell();
//         let text = document.createTextNode(element[key]);
//         cell.appendChild(text);
//       }
//     }
//   }
  
//   let table = document.querySelector("table");
//   let data = Object.keys(mountains[0]);
//   generateTableHead(table, data);
//   generateTable(table, mountains);

// define the working hours
const workinghours = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];



// create a constructor for the shops 
class Shop {
    constructor(name, minCus, maxCus, avgPerCus) {
        this.name = name;
        this.minCus = minCus;
        this.maxCus = maxCus;
        this.avgPerCus = avgPerCus;
        this.cusPerHour = [];
        this.avgCookiePerHourArr = [];
    }
    fillCusPerHour() {
        for (let i = 0; i <= workinghours.length; i++) {
            this.cusPerHour.push(Math.floor(Math.random() * (this.maxCus - this.minCus) + this.minCus))
        }
    } s
    addSales() {
        for (let i = 0; i <  this.cusPerHour.length; i++) {
            this.avgCookiePerHourArr[i] = this.avgPerCus * this.cusPerHour[i];
        }
    }
    total() {
        let totalShopSales = 0;
        for (let i = 0; i <= this.avgCookiePerHourArr.length; i++) {
            totalShopSales += this.avgCookiePerHourArr[i];
        }
        return totalShopSales;
    }
}



// create the column headings t
function headingCreator() {
    let table = document.querySelector(".my-table");
    let header = table.createTHead();
    let row = header.insertRow();
    for (let i = 0; i < workinghours.length; i++) {
        let cell = row.insertCell(i);
        cell.innerHTML = `${workinghours[i]}`;
    }
}

window.addEventListener('load', headingCreator);


// create the instances 

let paris = new Shop("paris", 12, 40, 1.5);
let newYork = new Shop("newyork", 10, 23, 1.5);
let amesterdam = new Shop("Amesterdam", 5, 55, 6.6);
let texas = new Shop("texas", 12, 20, 9);
let london = new Shop("london", 12, 67, 1.95);

// fill the instances 

let shops = [paris , newYork , amesterdam , texas , london];

function instanceFiller(shops) {
    let filledData = [];
    console.log(shops[0])
    for (let i = 0; i < shops.length; i++){
        console.log(i)
       shops[i].fillCusPerHour()
       shops[i].addSales()
       filledData.push(shops[i].avgCookiePerHourArr)
    }
    return filledData;
}


// const data = instanceFiller(shops)

// console.log(data , 'dataa');


function staticDataFiller() {
}