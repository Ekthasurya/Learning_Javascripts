function highestPaid(employees) {
    const highest = employees.reduce((max, employee) => 
        employee.salary > max.salary ? employee : max, employees[0]);

    return highest;
}

const employees = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(highestPaid(employees)); 


function destructuringToSwap(employees1) {
    if (employees1.length < 2) return employees1; 
    [employees1[0], employees1[employees1.length - 1]] = [employees1[employees1.length - 1], employees1[0]];

    return employees;
}

const employees1 = [
  { name: "John Doe", age: 30, department: "HR", salary: 50000 },
  { name: "Jane Smith", age: 28, department: "Finance", salary: 60000 },
  { name: "Alex Johnson", age: 35, department: "IT", salary: 70000 },
];

console.log(destructuringToSwap(employees1)); 

