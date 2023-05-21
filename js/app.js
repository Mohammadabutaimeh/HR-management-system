'use strict';

let salaryFunction= function salaryFunction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}
let idFunction= function idFunction(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
}



let employees =[
 {
    employeeID :0,
    employeeFullName : 'Ghazi Samer',
    employeeDepartment : 'Administration',
    employeeLevel : 'Senior',
    employeeImage : 'https://th.bing.com/th/id/OIP.e1KNYwnuhNwNj7_-98yTRwHaF7?w=261&h=209&c=7&r=0&o=5&pid=1.7',
    employeeSalary :0,
    employeeSalaryTax:0,
    employeeNetSalary:0,

},

{
    employeeID : 0,
    employeeFullName : 'Lana Ali',
    employeeDepartment : 'Finance',
    employeeLevel : 'Senior',
    employeeImage : 'https://th.bing.com/th/id/OIP.jlpYd9M0n0-CA_OiVIoTAQHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7',
    employeeSalary :0,
    employeeSalaryTax:0,
    employeeNetSalary:0,
},
 {
    employeeID : 0,
    employeeFullName : 'Tamara Ayoub',
    employeeDepartment : 'Marketing',
    employeeLevel : 'Senior',
    employeeImage : 'https://th.bing.com/th/id/OIP.jlpYd9M0n0-CA_OiVIoTAQHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7',
    employeeSalary :0,
    employeeSalaryTax:0,
    employeeNetSalary:0,
},
 {
    employeeID : 0,
    employeeFullName : 'Safi Walid',
    employeeDepartment : 'Administration',
    employeeLevel : 'Mid-Senior',
    employeeImage : 'https://th.bing.com/th/id/OIP.e1KNYwnuhNwNj7_-98yTRwHaF7?w=261&h=209&c=7&r=0&o=5&pid=1.7',
    employeeSalary :0,
    employeeSalaryTax:0,
    employeeNetSalary:0,
},
 {
    employeeID : 0,
    employeeFullName : 'Omar Zaid',
    employeeDepartment : 'Development',
    employeeLevel : 'Senior',
    employeeImage : 'https://th.bing.com/th/id/OIP.e1KNYwnuhNwNj7_-98yTRwHaF7?w=261&h=209&c=7&r=0&o=5&pid=1.7',
    employeeSalary :0,
    employeeSalaryTax:0,
    employeeNetSalary:0,
},
{
    employeeID : 0,
    employeeFullName : 'Rana Saleh',
    employeeDepartment : 'Development',
    employeeLevel : 'Junior',
    employeeImage : 'https://th.bing.com/th/id/OIP.jlpYd9M0n0-CA_OiVIoTAQHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7',
    employeeSalary :0,
    employeeSalaryTax:0,
    employeeNetSalary:0,
    
},
{
    employeeID : 0,
    employeeFullName : 'Hadi Ahmad',
    employeeDepartment : 'Finance',
    employeeLevel : 'Mid-Senior',
    employeeImage : 'https://th.bing.com/th/id/OIP.e1KNYwnuhNwNj7_-98yTRwHaF7?w=261&h=209&c=7&r=0&o=5&pid=1.7',
    employeeSalary :0,
    employeeSalaryTax:0,
    employeeNetSalary:0
}

]

for (let index = 0; index < employees.length; index++) {
    switch (employees[index].employeeLevel) {
        case 'Senior':
            employees[index].employeeSalary=salaryFunction(1500, 2000);
            employees[index].employeeSalaryTax=(employees[index].employeeSalary)*.075;
            employees[index].employeeNetSalary=(employees[index].employeeSalary)-(employees[index].employeeSalaryTax);
            break;
        case 'Mid-Senior':
            employees[index].employeeSalary=salaryFunction(1000, 1500);
            employees[index].employeeSalaryTax=(employees[index].employeeSalary)*.075;
            employees[index].employeeNetSalary=(employees[index].employeeSalary)-(employees[index].employeeSalaryTax);
            break;
        default:
            employees[index].employeeSalary=salaryFunction(500, 1000);
            employees[index].employeeSalaryTax=(employees[index].employeeSalary)*.075;
            employees[index].employeeNetSalary=(employees[index].employeeSalary)-(employees[index].employeeSalaryTax);
            break;
    }
  
}


let intialemployeeID= idFunction(1000, 1000);
for (let index = 0; index < employees.length; index++) {
    employees[index].employeeID=intialemployeeID ;
    intialemployeeID=employees[index].employeeID+1

}



console.log(employees[6].employeeSalary);
console.log(employees[6].employeeSalaryTax);
console.log(employees[6].employeeNetSalary);

const infoList = document.getElementById("info")

for (let i = 0; i < employees.length; i++) {
  
    infoList.insertAdjacentHTML("beforeend",`
    <li>Employee ID: ${employees[i].employeeID}</li>
    <li>Employee Name: ${employees[i].employeeFullName}</li>
    <li>Employee Department: ${employees[i].employeeDepartment}</li>
    <li>Employee Level: ${employees[i].employeeLevel}</li>
    <li> Employee Image: <a href="${employees[i].employeeImage}">${employees[i].employeeImage}</a></li>
    <li>Employee Salary: ${employees[i].employeeNetSalary}</li>
    <br>`)

   /*infoList.insertAdjacentHTML("beforeend",`
    <li>Employee Name: ${employees[i].employeeFullName}</li>
    <li>Employee Salary: ${employees[i].employeeNetSalary}</li>
    <br>`)*/

}

