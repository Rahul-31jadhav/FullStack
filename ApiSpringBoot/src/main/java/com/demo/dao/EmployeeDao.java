package com.demo.dao;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.model.Employee;

@Repository
public interface EmployeeDao extends JpaRepository<Employee, Integer> {

	List<Employee> findAll();

	Employee findByEid(int eid);

	Employee findByEidAndEname(int eid, String ename);

	List<Employee> findByEidOrEname(int eid, String ename);

	Employee save(Employee e);

	int deleteByEid(int eid);

}
