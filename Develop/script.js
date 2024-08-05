// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
function collectEmployees() {
  const employees = [];
  let addEmployee = true;

  while (addEmployee) {
    const firstName = prompt("Enter employee's first name:");
    const lastName = prompt("Enter employee's last name:");
    let salary = prompt("Enter employee's salary:");

    // Validate if salary is a number, default to 0 if not
    salary = isNaN(parseInt(salary)) ? 0 : parseInt(salary);

    // Create an employee object and add it to the employees array
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });

    const continueAdding = confirm("Do you want to add another employee?");
    addEmployee = continueAdding;
  }

  return employees;
}

// Display the average salary
function displayAverageSalary(employees) {
  let totalSalary = 0;

  employees.forEach(employee => {
    totalSalary += employee.salary;
  });

  const averageSalary = totalSalary / employees.length;

  console.log(`Average Salary: $${averageSalary.toFixed(2)} for ${employees.length} employees`);
}

// Select a random employee
function getRandomEmployee(employees) {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];

  console.log("Random Employee:");
  console.log(`Name: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
  console.log(`Salary: $${randomEmployee.salary}`);
}

// Example usage
let employeeArray = collectEmployees();
console.log(employeeArray);
displayAverageSalary(employeeArray);
getRandomEmployee(employeeArray);


//REVISED


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