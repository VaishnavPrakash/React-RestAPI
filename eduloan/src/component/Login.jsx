import {React,useState} from 'react';
import {Avatar,Button,TextField,Link,Box,Grid,Typography,Card} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export default function Login() {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    
    try {
      const response = await axios.get(
        `http://127.0.0.1:8080/validate/${email}/${password}`
      );
      
      if (response.data === true) {
        console.log('Successfully logged in');
        navigate('/allanimals');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error(error);
    }
  };

  function clickHandle(){
    navigate("/signup")
  }

  return (
    <Grid sx={{backgroundImage: 'url(https://a-z-animals.com/media/2021/10/tiger.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
      <Grid container component="main" sx={{ height: '100vh'}}   elevation={24}>
          <Card
            sx={{
              my: 20,
              mx: 25,
              padding: "25px",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: '4F709C',
              opacity: '0.8',
              borderRadius:"25px"
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography  style={{fontFamily:"fantasy",fontSize:"30px"}}>
              Sign in
            </Typography>
            <Box component="form"   Validate onSubmit={handleSubmit} sx={{ mt: 2}}>
              <TextField
                margin="normal"
                required
                fullWidth
                label="Email Address"
                name="email"
                autoFocus
                onChange={handleEmailChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                onChange={handlePasswordChange}
              />
                <center>
              <Button
                type="submit"
                variant="contained"
                color="success"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              </center>
              <br/>
              <Typography>Don't have an account?
              <Link onClick={clickHandle} variant="body3">
                  Sign Up
              </Link>
              </Typography>
              
            </Box>
          </Card>
        </Grid>
      </Grid>
  );
}
