-- Drop the database if it exists
DROP DATABASE IF exists store_db;

-- Create the database
CREATE DATABASE store_db;

-- Use the newly created database
USE store_db;

-- Create the departments table
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  name VARCHAR(255) NOT NULL
);

-- Create the roles table
CREATE TABLE role (
  id INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(255) NOT NULL,
  salary INT NOT NULL, 
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES department(id)
);

-- Create the employees table
CREATE TABLE employee (
  id INT NOT NULL  AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
);