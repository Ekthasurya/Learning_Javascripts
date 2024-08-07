function employeeInformation(employees) {
    const { name: secondEmployeeName, department: secondEmployeeDepartment } = employees[1];
    return { secondEmployeeName, secondEmployeeDepartment };
}

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(employeeInformation(employees)); 


function averageSalary(employees1) {
    let totalSalary = 0;
    for (const { salary } of employees1) {
        totalSalary += salary;
    }
    return totalSalary / employees1.length;
}


const employees1 = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(averageSalary(employees1));


function thirdEmployeeInfo(employees2) {
    const { name: thirdEmployeeName, age: thirdEmployeeAge, salary: thirdEmployeeSalary } = employees2[2];
    const bonus = thirdEmployeeSalary * 0.10;
    return `Employee: ${thirdEmployeeName}, Age: ${thirdEmployeeAge}, Salary: ${thirdEmployeeSalary}, Bonus: ${bonus}`;
}

const employees2 = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(thirdEmployeeInfo(employees2)); 





