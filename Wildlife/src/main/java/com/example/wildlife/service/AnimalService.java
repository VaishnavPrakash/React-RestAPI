package com.example.wildlife.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.wildlife.model.AnimalModel;
import com.example.wildlife.repository.AnimalRepo;

@Service
public class AnimalService {
	@Autowired
	private AnimalRepo arepo;
	
	public List<AnimalModel> getAllAnimals(){
		return arepo.findAll();
	}
	
	public AnimalModel postAnimal(AnimalModel b) {
		return arepo.save(b);
	}
	
	public Optional<AnimalModel> getAnimalById(int id) {
		return arepo.findById(id);
	}
	
	public void deleteAnimal(int id) {
		arepo.deleteById(id);
	}
	

	public AnimalModel updateAnimal(int id,AnimalModel bi) {
		AnimalModel b = arepo.findById(id).get();
		return arepo.saveAndFlush(b);		
	}
	
	public List<AnimalModel> sortData(String field) {
		
		return arepo.findAll(Sort.by(Sort.Direction.ASC, field));
	}
	
	public List<AnimalModel> descsortData(String field) {
		return arepo.findAll(Sort.by(Sort.Direction.DESC, field));
	}
	
	public List<AnimalModel> pagination(int offset,int pagesize)
	{
		Page<AnimalModel> page=arepo.findAll(PageRequest.of(offset, pagesize));
		return page.getContent();
	}

}

