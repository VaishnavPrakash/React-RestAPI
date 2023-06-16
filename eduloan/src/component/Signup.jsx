import React, { useState } from 'react';
import { Avatar, Button, TextField, Box, Grid, Typography, Card, Link } from '@mui/material';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConpassword] = useState('');

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };

  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConpasswordChange = (event) => {
    setConpassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      firstname,
      lastname,
      email,
      password,
      conpassword,
    };

    axios.post('http://localhost:8080/adduser', data)
      .then((res) => {
        if (res.data === true) {
          navigate('/login');
        } else {
          alert('Invalid input');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('An error occurred');
      });
  };

  const clickHandle1 = () => {
    navigate('/login');
  };

  return (
    <Grid sx={{ backgroundImage: 'url(https://a-z-animals.com/media/2021/10/tiger.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <Grid container component="main" sx={{ height: '100vh' }} elevation={24}>
        <Card sx={{my: 11,mx: 25,padding: '25px',display: 'flex',flexDirection: 'column',alignItems: 'center',
            bgcolor: '4F709C',opacity: '0.8',borderRadius: '20px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <AppRegistrationIcon />
          </Avatar>
          <Typography style={{ fontFamily: 'fantasy', fontSize: '30px' }}>
            Sign Up
          </Typography>
          <Box component="form" validate sx={{ mt: 2 }}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="First Name"
                  name="firstname"
                  value={firstname}
                  onChange={handleFirstnameChange}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="normal"
                  fullWidth
                  label="Last Name"
                  name="lastname"
                  value={lastname}
                  onChange={handleLastnameChange}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirm password"
                label="Confirm Password"
                type="password"
                value={conpassword}
                onChange={handleConpasswordChange}
              />
            </Grid>
            <center>
              <Button
                type="submit"
                variant="contained"
                color="success"
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2 }}
              >
                Create Account
              </Button>
            </center>
            <br />
            <Grid margin="Normal">
              Already have an account?
              <Link variant="body3" onClick={clickHandle1}>
                Login Here
              </Link>
            </Grid>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
