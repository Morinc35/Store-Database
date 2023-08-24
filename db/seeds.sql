INSERT INTO department (id, name)
VALUES (1, 'Roastery'),
       (2, 'Kitchen'),
       (3, 'FOH');

INSERT INTO role (id, job_title, salary, department_id)
VALUES (1, 'Barista', 25000, 3),
       (2, 'Head_Roaster', 32000, 1),
       (3, 'Production_Roaster', 30000, 1),
       (4, 'Shift_Lead', 28000, 3),
       (5, 'Kitchen_Staff', 28000, 2);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'Cameron', 'Morin', 2, NULL),
       (2, 'Michael', 'Jones', 3, NULL),
       (3, 'Margaret', 'Atwood', 4, NULL),
       (4, 'Jones', 'Drew', 1, NULL);