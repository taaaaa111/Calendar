const date = new Date ();
console.log(date);


// const Monthdays = document.querySelector('.daysnumber');

const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aguste",
    "September",
    "October",
    "November",
    "December",
];

document.querySelector('.date h1').innerHTML = months [date.getMonth()];
document.querySelector('.date p').innerHTML = date.toDateString();


let days ="";

for(let i=1; i <=31; i++){
    days += `<div>${i}</div>`;
    document.querySelector('.daysnumber').innerHTML = days;

}

let lastDay = "";

for(let i=1; i <=31; i++){
    days += `<div>${i}</div>`;
    document.querySelector('.daysnumber').innerHTML = days;

}

