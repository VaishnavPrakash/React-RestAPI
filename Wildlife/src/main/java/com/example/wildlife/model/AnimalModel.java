package com.example.wildlife.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Animals")
public class AnimalModel {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String animaltype;
	private String animalname;
	private int animalheight;
	private String sanctuaryname;
	private String sanctuarylocation;
	private int animalcount;
	private String habitat;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getAnimaltype() {
		return animaltype;
	}
	public void setAnimaltype(String animaltype) {
		this.animaltype = animaltype;
	}
	public String getAnimalname() {
		return animalname;
	}
	public void setAnimalname(String animalname) {
		this.animalname = animalname;
	}
	public int getAnimalheight() {
		return animalheight;
	}
	public void setAnimalheight(int animalheight) {
		this.animalheight = animalheight;
	}
	public String getSanctuaryname() {
		return sanctuaryname;
	}
	public void setSanctuaryname(String sanctuaryname) {
		this.sanctuaryname = sanctuaryname;
	}
	public String getSanctuarylocation() {
		return sanctuarylocation;
	}
	public void setSanctuarylocation(String sanctuarylocation) {
		this.sanctuarylocation = sanctuarylocation;
	}
	public int getAnimalcount() {
		return animalcount;
	}
	public void setAnimalcount(int animalcount) {
		this.animalcount = animalcount;
	}
	public String getHabitat() {
		return habitat;
	}
	public void setHabitat(String habitat) {
		this.habitat = habitat;
	}
	
	public AnimalModel() {}
	
	public AnimalModel(int id, String animaltype, String animalname, int animalheight, String sanctuaryname,
			String sanctuarylocation, int animalcount, String habitat) {
		super();
		this.id = id;
		this.animaltype = animaltype;
		this.animalname = animalname;
		this.animalheight = animalheight;
		this.sanctuaryname = sanctuaryname;
		this.sanctuarylocation = sanctuarylocation;
		this.animalcount = animalcount;
		this.habitat = habitat;
	}
}
