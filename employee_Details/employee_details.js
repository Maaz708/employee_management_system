const employees = [
    {id: 1, name: 'John Doe', age: 30, department:'IT', salary: 50000, specialization: 'javascript'},
    {id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'python'},
    {id: 3, name: 'Bob johnson', age: 35, department:'Finance', salary: 60000, specialization: 'javascript'},
    {id: 4, name: 'Mohd Maaz', age: 23, department: 'IT', salary: 100000, specialization:'python'},
   {id: 5, name:'Arbas Smith', age: 22, department: 'HR', salary: 55000, specialization: 'javascript'},

];
function displayEmployees() { 
      const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
      document.getElementById('employeeDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries= employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
    
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department ==='HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: -${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML = hrEmployeesDisplay;

}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeeDetails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;

    }
    else
    {
        document.getElementById('employeeDetails').innerHTML = 'no employee has been found with this ID';
    }
}
function findbySpecialization(specialization) 
{
    const jsEmployee = employees.find(employee => employee.specialization === specialization);
    if (jsEmployee) {
        document.getElementById('employeeDetails').innerHTML = `<p>${jsEmployee.id}: ${jsEmployee.name} - ${jsEmployee.department}: $${jsEmployee.salary}: ${jsEmployee.specialization}</p>`;

    }
    else {
        document.getElementById('employeeDetails').innerHTML = 'no employee has been found with this specialization';
    }
}