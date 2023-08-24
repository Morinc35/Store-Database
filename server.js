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
   message: 'Choose an option',
   choices: [
   'View department',
   'View roles',
   'View employees',
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
        case 'View department':
          viewDepartments();
          break;
        case 'View roles':
          viewRoles();
          break;
        case 'View employees':
          viewEmployees();
          break;
        case 'Add a Department':
          addDepartment();
          break;
        case 'Add a Role':
          addRole();
          break;
        case 'Add an Employee':
          addEmployee();
          break;
        case 'Update a Role':
          updateRole();
          break;
        default:
          console.log('Invalid choice.');
      }
    });
  }
  //function for viewing the departments table by descending id numbers
  function viewDepartments() {
    connection.query('SELECT * FROM department ORDER BY id;', function (err, results) {
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
    connection.query('SELECT * FROM role ORDER BY id', function (err, results) {
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
    connection.query('SELECT * FROM employee ORDER BY id', function (err, results) {
        if (err) {
          console.error(err);
        } else {
          console.table(results);
        }
        prompt(); 
      });
    }
  
  
  function addDepartment() {
    inquirer
    .prompt ([ {
      type: 'input',
      message: 'What is the name of the new Department',
      name: "name"

    },

  ])
  .then((answers) => {
    connection.query(
      'INSERT INTO department (name) VALUES (?)', 
      [answers.name], // Passing an array of values for parameter binding
      function (err, results) {
        if (err) {
          console.log(err);
        } else {
          console.log('New Department Added!');
        }
      }
    )
    prompt();
});
}
  
  
  function addRole() {
   
  }
  
  function addEmployee() {
    
  }
  
  function updateRole() {
    
  }

  // Call the prompt function to start the interaction
  prompt();