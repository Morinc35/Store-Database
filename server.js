const mysql = require('mysql2');
const inquirer = require('inquirer')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'store_db'
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.');
  });
  

 const questions = [  {
   type: 'list',
  name: 'choices',
   message: 'Choose and option',
   choices: [
   'view departments',
   'view roles',
   'view employees',
   'Add a Department',
   'Add a Role',
   'Add a Employee',
   'Update a Role',
 ],
                   
 }, ];
  
 function prompt() {
    inquirer.prompt(questions).then((answers) => {
      const choice = answers.choices;
  
      switch (choice) {
        case 'View departments':
          viewDepartments();
          break;
        case 'View roles':
          viewRoles();
          break;
        case 'View employees':
          viewEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update a role':
          updateRole();
          break;
        default:
          console.log('Invalid choice.');
      }
    });
  }
  //function for viewing the departments table by descending id numbers
  function viewDepartments() {
    connection.query('SELECT * FROM department ORDER BY id DESC', function (err, results) {
      if (err) {
        console.error(err);
      } else {
        console.table(results);
      }
      prompt(); 
    });
  }
  //function for viewing the roles table by descending id numbers
  function viewRoles() {
    connection.query('SELECT * FROM roles ORDER BY id DESC', function (err, results) {
        if (err) {
          console.error(err);
        } else {
          console.table(results);
        }
        prompt(); 
      });
    }
  
  //function for viewing the employees table by descending id numbers
  function viewEmployees() {
    connection.query('SELECT * FROM employees ORDER BY id DESC', function (err, results) {
        if (err) {
          console.error(err);
        } else {
          console.table(results);
        }
        prompt(); 
      });
    }
  
  
  function addDepartment() {
    
  }
  
  function addRole() {
   
  }
  
  function addEmployee() {
    
  }
  
  function updateRole() {
    
  }
  
  // Call the prompt function to start the interaction
  prompt();