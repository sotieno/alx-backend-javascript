// Write an interface named Student that accepts the following elements:
// firstName(string), lastName(string), age(number), and location(string)
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const studentOne: Student = {
    firstName: 'Grace',
    lastName: 'Keller',
    age: 36,
    location: 'Nairobi',
}

const studentTwo: Student = {
    firstName: 'Valentine',
    lastName: 'Bosibori',
    age: 35,
    location: 'Houston',
}

// Create an array named studentsList containing the two student objects
const studentsList: Student[] = [studentOne, studentTwo];

// Create table element using createElement method and assign it to variable table
let table = document.createElement('table');

// Create table body (tbody) element using createElement method and assign it to variable tableBody
let tableBody = document.createElement('tbody');

// Apply styles to table (width = 100%, background colour = #2596be )
table.style.width = '100%';
table.style.background = '#2596be'

// Iterate over each student object in studentsList array
studentsList.forEach(student => {
    let row = document.createElement('tr'); // Create new table row ('tr')
    let nameCol = document.createElement('td'); // Create table data ('td') element for student name
    let locationCol = document.createElement('td'); // Create table data ('td') element for student location

    // Each row should contain the first name of the student and the location
    nameCol.textContent = student.firstName;
    locationCol.textContent = student.location;

    // Centre text
    nameCol.style.textAlign = 'center';
    locationCol.style.textAlign = 'center';

    // Hex color #000
    nameCol.style.color = '#000';
    locationCol.style.color = '#000';

    // Dotted border
    nameCol.style.border = '1px dotted black';
    locationCol.style.border = '1px dotted black';

    //
    nameCol.style.height = '300px';
    locationCol.style.height = '300px';

    row.appendChild(nameCol); // append the cell to the row
    row.appendChild(locationCol); // append the cell to the row
    tableBody.appendChild(row); // append the row to the table body
});
table.appendChild(tableBody); // append the table body to the table
document.body.appendChild(table); // append the table to the body
