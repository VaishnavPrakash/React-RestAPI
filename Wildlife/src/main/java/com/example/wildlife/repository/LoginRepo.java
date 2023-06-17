package com.example.wildlife.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.wildlife.model.LoginModel;

@Repository
public interface LoginRepo extends JpaRepository<LoginModel, Integer> {
	LoginModel findByEmail(String email);

}
