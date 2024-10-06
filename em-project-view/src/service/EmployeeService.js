import axios from 'axios';

// Update base URL to point to your backend correctly
const BASE_URL = "http://localhost:1010";

class EmployeeService {
    // Save employee using the correct POST endpoint from your Spring Boot backend
    saveEmployee(employee) {
        return axios.post(`${BASE_URL}/save`, employee);
    }

    // Fetch all employees using GET from "/"
    getEmployee() {
        return axios.get(BASE_URL + "/");
    }

    // Fetch employee by ID using the correct endpoint structure
    getEmployeeById(id) {
        return axios.get(`${BASE_URL}/req1/${id}`);
    }

    // Delete employee by ID using the delete endpoint
    deleteEmployeeById(id) {
        return axios.delete(`${BASE_URL}/delete/${id}`);
    }

    // Update employee using the correct PUT endpoint
    updateEmployee(employee, id) {
        return axios.put(`${BASE_URL}/update`, employee); // Backend doesn't seem to use ID in the PUT request
    }
}

export default new EmployeeService();
