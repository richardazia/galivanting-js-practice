"use strict";

const days = ["Sunday", 
  "Monday", 
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday"
];

const today = new Date();
const localDate = today.toLocaleDateString();
const dowValue = today.getDay();
const dowName = days[dowValue];
const reportDate = () => {
  console.log(`Today is ${dowName} ${localDate}`);
};

reportDate();
