import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const EmployeeList = () => {
    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await EmployeeService.getEmployee();
                setEmployees(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployeeById(id)
            .then((response) => {
                console.log("Employee deleted successfully", response);
                setEmployees(employees.filter((employee) => employee.eid !== id));
            })
            .catch((error) => {
                console.error("Error deleting employee:", error.message);
            });
    };

    const navigate = useNavigate();

    return (
        <div className='container mx-auto my-8'>
            <div className='flex justify-end'>
                <button
                    onClick={() => navigate("/addEmployee")}
                    className='bg-blue-500 bg-opacity-80 text-white hover:bg-opacity-100 font-semibold px-6 py-2 rounded shadow-md transition-all duration-200'>
                    Add Employee👨‍💼
                </button>
            </div>
            <div className='overflow-x-auto mt-6'>
                <table className='min-w-full bg-gray-800 bg-opacity-60 text-white rounded-lg shadow-md'>
                    <thead>
                    <tr className='bg-gray-700 bg-opacity-80 text-left text-xs uppercase font-semibold'>
    <th className='px-6 py-3 text-blue-500'> Employee Name</th>
    <th className='px-6 py-3 text-blue-500'>Company Name</th>
    <th className='px-6 py-3 text-blue-500'>Designation</th>
    <th className='px-6 py-3 text-blue-500'>Salary</th>
    <th className='px-6 py-3 text-blue-500'>Action</th>
</tr>

                    </thead>
                    {!loading && (
                        <tbody>
                            {employees.map((employee) => (
                                <tr className='border-b border-gray-700 hover:bg-gray-600 hover:bg-opacity-70 transition-colors' key={employee.eid}>
                                    <td className='px-6 py-4 whitespace-nowrap'>{employee.ename}</td>
                                    <td className='px-6 py-4 whitespace-nowrap'>{employee.ecompany}</td>
                                    <td className='px-6 py-4 whitespace-nowrap'>{employee.edesignation}</td>
                                    <td className='px-6 py-4 whitespace-nowrap'>{employee.esalary}</td>
                                    <td className='px-6 py-4 whitespace-nowrap flex space-x-4'>
                                        <button 
                                            className='text-green-500 hover:text-green-700 transition-colors'
                                            onClick={() => navigate(`/editEmployee/${employee.eid}`)}>
                                            Edit 📝
                                        </button>
                                        <button 
                                            className='text-red-500 hover:text-red-700 transition-colors'
                                            onClick={() => deleteEmployee(employee.eid)}>
                                            Delete 🛃
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default EmployeeList;
