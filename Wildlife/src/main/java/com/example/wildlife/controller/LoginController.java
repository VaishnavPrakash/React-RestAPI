package com.example.wildlife.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.wildlife.model.LoginModel;
import com.example.wildlife.service.LoginService;

@RestController
@CrossOrigin
public class LoginController {
	@Autowired
	
	private LoginService lser;
	
	@GetMapping("/validate/{email}/{password}")
	public String Validate(@PathVariable String email , @PathVariable String password)
	{
		 return lser.validator(email, password);
	}
	
	@PostMapping("/adduser")
	public boolean add(@RequestBody LoginModel l) 
	{
		lser.Post(l);
		return true;
	}
	
}
