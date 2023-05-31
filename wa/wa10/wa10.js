// Problem 1
const employees = [
    {
      firstName: 'Sam',
      department: 'Tech',
      designation: 'Manager',
      salary: 40000,
      raiseEligible: true
    },
    {
      firstName: 'Mary',
      department: 'Finance',
      designation: 'Trainee',
      salary: 18500,
      raiseEligible: true
    },
    {
      firstName: 'Bill',
      department: 'HR',
      designation: 'Executive',
      salary: 21200,
      raiseEligible: false
    }
  ];
  
  console.log(employees);
  console.log("Problem 1 completed");
  
  // Problem 2
  const company = {
    companyName: 'Tech Stars',
    website: 'www.techstars.site',
    employees: employees
  };
  
  console.log(company);
  console.log("Problem 2 completed");
  
  // Problem 3
  const newEmployee = {
    firstName: 'Anna',
    department: 'Tech',
    designation: 'Executive',
    salary: 25600,
    raiseEligible: false
  };
  
  company.employees.push(newEmployee);
  
  console.log(company);
  console.log("Problem 3 completed");
  
  // Problem 4
  let totalSalary = 0;
  for (const employee of company.employees) {
    totalSalary += employee.salary;
  }
  
  console.log('Total Salary:', totalSalary);
  console.log("Problem 4 completed");
  
  // Problem 5
  function giveRaise(company) {
    for (const employee of company.employees) {
      if (employee.raiseEligible) {
        employee.salary *= 1.1;
        employee.raiseEligible = false;
      }
    }
  }
  
  giveRaise(company);
  console.log(company);
  console.log("Problem 5 completed");
  
  // Problem 6
  const workingFromHome = ['Anna', 'Sam'];
  
  for (const employee of company.employees) {
    employee.wfh = workingFromHome.includes(employee.firstName);
  }
  
  console.log(company);
  console.log("Problem 6 completed");
  