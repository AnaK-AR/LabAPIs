import React from 'react';

const EmployeesItem = ({ employee, onDelete, onEdit }) => {
  
  return (
    <div className="employee-item">
      <div className="employee-info">
        <h3>{employee.Name}</h3>
        <p><strong>Name:</strong> {employee.name || 'No especificada'}</p>
        <p><strong>Email:</strong> {employee.email || 'No especificada'}</p>
        <p><strong>ATC:</strong> {employee.atc || 'No especificada'}</p>
        <p><strong>Level:</strong> {employee.level || 'No especificada'}</p>
        <p><strong>Role:</strong> {employee.role || 'No especificada'}</p>
        <p><strong>Project:</strong> {employee.project || 'No especificada'}</p>
        <p><strong>Status:</strong> {employee.status || 'No especificada'}</p>
      </div>
      <div className="employees-actions">
        <button onClick={onEdit} className="edit-btn">Edit</button>
        <button onClick={onDelete} className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default EmployeesItem;

