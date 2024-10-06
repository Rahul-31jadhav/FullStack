import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../service/EmployeeService';

const UpdateEmployee = () => {
    const [employee, setEmployee] = useState({
        eid: "",
        ename: "",
        ecompany: "",
        edesignation: "",
        esalary: ""
    });

    const { id } = useParams(); // Get ID from URL
    const navigate = useNavigate();

    // Fetch employee by ID when the component mounts
    useEffect(() => {
        EmployeeService.getEmployeeById(id)
            .then((response) => {
                setEmployee(response.data); // Set the form fields with the fetched data
            })
            .catch((error) => {
                console.log("Error fetching employee data:", error.message);
            });
    }, [id]);

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    };

    const updateEmployee = (e) => {
        e.preventDefault();
        EmployeeService.updateEmployee(employee, id)
            .then((response) => {
                console.log("Employee updated successfully", response);
                navigate("/");
            })
            .catch((error) => {
                console.log("Error updating employee:", error.message);
            });
    };

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            eid: "",
            ename: "",
            ecompany: "",
            edesignation: "",
            esalary: ""
        });
    };

    return (
        <div className='max-w-xl bg-slate-800 my-20 rounded shadow'>
            <div className='text-4xl tracking-wider font-bold text-center py-4 px-8'>
                <p>Update Employee 👨‍💻</p>
            </div>

            <div className='mx-10 my-2'>
                <input
                    type='text'
                    name="ename"
                    value={employee.ename}
                    onChange={(e) => handleChange(e)}
                    className="w-full py-2 my-4 text-slate-800"
                    placeholder='Name'
                />

                <input
                    type='text'
                    name="ecompany"
                    value={employee.ecompany}
                    onChange={(e) => handleChange(e)}
                    className="w-full py-2 my-4 text-slate-800"
                    placeholder='Company'
                />

                <input
                    type='text'
                    name="edesignation"
                    value={employee.edesignation}
                    onChange={(e) => handleChange(e)}
                    className="w-full py-2 my-4 text-slate-800"
                    placeholder='Designation'
                />

                <input
                    type='number'
                    name="esalary"
                    value={employee.esalary}
                    onChange={(e) => handleChange(e)}
                    className="w-full py-2 my-4 text-slate-800"
                    placeholder='Salary'
                />
            </div>

            <div className='flex my-4 space-x-4 px-20'>
                <button
                    onClick={updateEmployee}
                    className='bg-green-500 hover:bg-green-800 py-2 px-6 rounded'> Update </button>

                <button
                    onClick={reset}
                    className='bg-blue-500 hover:bg-blue-800 py-2 px-6 rounded'> Clear </button>

                <button
                    onClick={() => navigate("/")}
                    className='bg-red-500 hover:bg-red-800 py-2 px-6 rounded'> Cancel </button>
            </div>
        </div>
    );
};

export default UpdateEmployee;
