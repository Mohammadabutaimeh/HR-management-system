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

let employeesArray=[];

function Employee(empName,empDepartment,empLevel,empImage){
    this.employeeFullName = empName;
    this.employeeDepartment = empDepartment;
    this.employeeLevel = empLevel;
    this.employeeImage = empImage;
    this.employeeSalary = 
    employeesArray.push(this);
}


let ghazi = new Employee("Ghazi Samer","Administration","Senior","https://th.bing.com/th/id/OIP.e1KNYwnuhNwNj7_-98yTRwHaF7?w=261&h=209&c=7&r=0&o=5&pid=1.7")
let lana = new Employee("Lana Ali","Finance","Senior","https://th.bing.com/th/id/OIP.jlpYd9M0n0-CA_OiVIoTAQHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7")
let tamara = new Employee("Tamara Ayoub","Marketing","Senior","https://th.bing.com/th/id/OIP.jlpYd9M0n0-CA_OiVIoTAQHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7")
let safi = new Employee("Safi Walid","Administration","Mid-Senior","https://th.bing.com/th/id/OIP.e1KNYwnuhNwNj7_-98yTRwHaF7?w=261&h=209&c=7&r=0&o=5&pid=1.7")
let omar = new Employee("Omar Zaid","Development","Senior","https://th.bing.com/th/id/OIP.e1KNYwnuhNwNj7_-98yTRwHaF7?w=261&h=209&c=7&r=0&o=5&pid=1.7")
let rana = new Employee("Rana Saleh","Development","Junior","https://th.bing.com/th/id/OIP.jlpYd9M0n0-CA_OiVIoTAQHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7")
let hadi = new Employee("Hadi Ahmad","Finance","Mid-Senior","https://th.bing.com/th/id/OIP.e1KNYwnuhNwNj7_-98yTRwHaF7?w=261&h=209&c=7&r=0&o=5&pid=1.7")



let intialemployeeID= idFunction(1000, 1000);
for (let index = 0; index < employeesArray.length; index++) {
    employeesArray[index].employeeId=intialemployeeID ;
    intialemployeeID=employeesArray[index].employeeId+1
}

for (let index = 0; index < employeesArray.length; index++) {
    switch (employeesArray[index].employeeLevel) {
        case 'Senior':
            employeesArray[index].employeeSalary=salaryFunction(1500, 2000);
            employeesArray[index].employeeSalaryTax=(employeesArray[index].employeeSalary)*.075;
            employeesArray[index].employeeNetSalary=(employeesArray[index].employeeSalary)-(employeesArray[index].employeeSalaryTax);
            break;
        case 'Mid-Senior':
            employeesArray[index].employeeSalary=salaryFunction(1000, 1500);
            employeesArray[index].employeeSalaryTax=(employeesArray[index].employeeSalary)*.075;
            employeesArray[index].employeeNetSalary=(employeesArray[index].employeeSalary)-(employeesArray[index].employeeSalaryTax);
            break;
        case 'Junior':
            employeesArray[index].employeeSalary=salaryFunction(500, 1000);
            employeesArray[index].employeeSalaryTax=(employeesArray[index].employeeSalary)*.075;
            employeesArray[index].employeeNetSalary=(employeesArray[index].employeeSalary)-(employeesArray[index].employeeSalaryTax);
            break;
        default:
           
            break;
    }
  
}

console.log(employeesArray[5].employeeNetSalary);


Employee.prototype.renderEmployees=function(){
    document.write(
        `Employee ID : ${this.employeeId}<br>Employee Name : ${this.employeeFullName}<br>Employee Department : ${this.employeeDepartment}<br>Employee Level : ${this.employeeLevel}<br>Employee Image : <a href="${this.employeeImage}" >${this.employeeImage}</a><br>Employee Net Salary : ${this.employeeNetSalary}<br><br> `
        )  
}



for (let index = 0; index < employeesArray.length; index++) {
    employeesArray[index].renderEmployees();
    
}

