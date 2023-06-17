package com.example.wildlife.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.wildlife.model.AnimalModel;

@Repository
public interface AnimalRepo extends JpaRepository<AnimalModel, Integer> {

}
