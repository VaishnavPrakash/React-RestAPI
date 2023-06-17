package com.example.wildlife.controller;

import java.util.List;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.wildlife.model.AnimalModel;
import com.example.wildlife.service.AnimalService;


@CrossOrigin(origins="http://localhost:3000")
@RestController
public class AnimalController {
	@Autowired
	
private AnimalService aservice;
		
	@GetMapping("/get")
	public List<AnimalModel> getAllAnimals() {
		return aservice.getAllAnimals();
	}
	
	@GetMapping("/get/{id}")
	public Optional<AnimalModel> getAnimalById(@PathVariable("id") int id) {
		return aservice.getAnimalById(id);
	} 
	
	@PostMapping("/add")
	public boolean postAnimals(@RequestBody AnimalModel b) {
		aservice.postAnimal(b);	
		return true;
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteAnimal(@PathVariable("id") int id) {
		aservice.deleteAnimal(id);
	}
	
	@PutMapping("/update/{id}")
	public AnimalModel updateAnimal( @PathVariable("id") int id,@RequestBody AnimalModel b) {
		return aservice.updateAnimal(id,b);
	}
	@GetMapping("/sort/{field}")
	public List<AnimalModel> sortvote(@PathVariable String field)
	{
		return aservice.sortData(field);
	}
	@GetMapping("/descsort/{field}")
	public List<AnimalModel> descsortvote(@PathVariable String field)
	{
		return aservice.descsortData(field);
	}
	
	@GetMapping("/pagination/{offset}/{pagesize}")
	public List<AnimalModel> page(@PathVariable int offset,@PathVariable int pagesize)
	{
		return aservice.pagination(offset, pagesize);
	}

}
