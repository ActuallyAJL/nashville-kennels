const remoteURL = "http://localhost:8088";

export const getEmployeeById = (employeeId) => {
  return fetch(`${remoteURL}/employees/${employeeId}`).then((res) =>
    res.json()
  );
};

export const getAllEmployees = () => {
  return fetch(`${remoteURL}/employees`).then((res) => res.json());
};

export const deleteEmployee = (id) => {
  return fetch(`${remoteURL}/employees/${id}`, {
    method: "DELETE",
  }).then((result) => result.json());
};

export const addEmployee = (newEmployee) => {
  return fetch(`${remoteURL}/employees`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEmployee),
  }).then((response) => response.json());
};

export const updateEmployee = (editedEmployee) => {
  return fetch(`${remoteURL}/employees/${editedEmployee.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editedEmployee),
  }).then((data) => data.json());
};

// Add this method to the EmployeeManager
export const getRandomId = () => {
  return fetch(`${remoteURL}/employees`)
    .then((result) => result.json())
    .then((employees) => {
      const randomIndex = Math.floor(Math.random() * employees.length);
      const randomEmployee = employees[randomIndex];
      return randomEmployee.id;
    });
};
