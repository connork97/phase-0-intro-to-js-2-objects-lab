// Write your solution in this file!
const employee = {
    name: "Connor",
    streetAddress: "123 Home Street"
}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    let newEmployee = {...employee};
    newEmployee.streetAddress = "11 Broadway";
    return newEmployee;
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee.streetAddress = "12 Broadway";
    return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
    const newEmployee = { ...employee };
    delete newEmployee.name;
    return newEmployee;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee.name;
    return employee;
}