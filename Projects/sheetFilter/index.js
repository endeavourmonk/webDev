const XLSX = require("xlsx");
const _ = require("lodash");

// Load the two Excel files
let workbook1 = XLSX.readFile("2223.xlsx");
let workbook2 = XLSX.readFile("22.xlsx");

let worksheet1 = workbook1.Sheets[workbook1.SheetNames[0]];
let worksheet2 = workbook2.Sheets[workbook2.SheetNames[0]];

let data1 = XLSX.utils.sheet_to_json(worksheet1);
let data2 = XLSX.utils.sheet_to_json(worksheet2);

// Assuming 'name' is the column with student names
let names1 = data1.map((row) => row["name"]);
let names2 = data2.map((row) => row["name"]);

// Get the names that are in both files
let commonnames = _.intersection(names1, names2);

// Remove the common names from data1
let filteredData1 = data1.filter((row) => !commonnames.includes(row["name"]));
// console.log(filteredData1);

// Write the result to a new Excel file
let newWorkbook = XLSX.utils.book_new();
let newWorksheet = XLSX.utils.json_to_sheet(filteredData1);
XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, "Sheet1");
XLSX.writeFile(newWorkbook, "2022-2023_filtered.xlsx");
