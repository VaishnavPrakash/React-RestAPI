package com.example.wildlife.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.wildlife.model.LoginModel;
import com.example.wildlife.repository.LoginRepo;

@Service
public class LoginService {
	@Autowired
	private LoginRepo lrepo;
	
	public String validator(String email,String password)
	{
		
		LoginModel u=lrepo.findByEmail(email);
		if(u==null)
		{
			return "false";
		}
		else
		{
			if(u.getPassword().equals(password))
			{
				return "true";
			}
			else
			{
				return "false";
			}
		}
		
		
	}
	
	public LoginModel Post(LoginModel a) 
	{
		return lrepo.save(a);
	}
	
	
}
