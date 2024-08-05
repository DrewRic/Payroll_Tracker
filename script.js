// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');


// Collect employee data
const employees = [];
const collectEmployees = function() {

// employees.push(person);
let addAnother = true;
while (addAnother) {
  let firstName = prompt("Please add first name");
  let lastName = prompt("Please add last name");
  let salary = prompt("Please add salary name");
    if(isNaN(salary)) {
      salary = 0;  //Something you could also do here is a prompt to give them a chance to add an actual salary
    }
  const person = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary),
    };

  employees.push(person);

addAnother = confirm("Do you want to add another employee?");  
};

return employees;
};

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  let addedSalary = 0
  for (let i = 0; i < employeesArray.length; i++) {
    addedSalary += employeesArray[i].salary
  };

  const averageSalary = addedSalary / employeesArray.length;
  const current = employeesArray.length;
  console.log(`The average employee salary between our ${current} employees is
   ${averageSalary.toLocaleString("en-US", {style: "currency", currency: "USD"})}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  const index = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[index];
  console.log(`Congrats you are the winner ${randomEmployee.firstName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);