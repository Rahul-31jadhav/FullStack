package com.demo.service;

import java.util.List;

import com.demo.model.Employee;

public interface EmployeeService {

	List<Employee> findAll();

	Employee findByEid(int eid);

	Employee findByEidAndEname(int eid, String ename);

	List<Employee> findByEidOrEname(int eid, String ename);

	Employee save(Employee e);
	
	int deleteByEid (int eid);

}
