import React,{useState} from 'react'
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import {Avatar,Button,TextField,Box,Grid,Typography,Card} from '@mui/material';
import AnimalService from './AnimalService';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const AddAnimals = () => {
      
      const navigate=useNavigate();

      const initialState = {
        animaltype: "",
        animalname: "",
        animalheight: 0,
        sanctuaryname: "",
        sanctuarylocation: "",
        animalcount: 0,
        habitat: "",
      };
    
      const [animal, setAnimal] = useState(initialState);
    
      const handleSubmitForm = (e) => {
        e.preventDefault();
        AnimalService.addAnimal(animal).catch((error) => console.log(error));
        window.alert("Added Successfully");
        navigate('/allanimals');
      };
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAnimal({ ...animal, [name]: value });
      };



  return (
    <>
    <Navbar/>
    <Grid sx={{backgroundImage: 'url(https://wallpapercave.com/wp/wp4435473.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',}}>
        <Grid container component="main" sx={{ height: ''}} elevation={24} >
            <Card sx={{
              my: 13,
              mx: 30,
              padding: "40px",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: '4F709C',
              opacity: '0.7',
              borderRadius:"20px"
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <DynamicFormIcon />
            </Avatar>
            <Typography  style={{fontFamily:"fantasy",fontSize:"30px"}}>
              Add Animal
            </Typography>
            <Box component="form"  Validate onSubmit={handleSubmitForm} sx={{ mt: 2}}>
              <TextField
                margin="normal"
                fullWidth
                required
                label="Animal Type"
                name="animaltype"
                id="animaltype"
                onChange={handleInputChange}
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                required
                label="Animal Name"
                name="animalname"
                id="animalname"
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                fullWidth
                required
                label="Animal Height"
                name="animalheight"
                id="animalheight"
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                fullWidth
                required
                label="Sanctuary Name"
                name="sanctuaryname"
                id="sanctuaryname"
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                fullWidth
                required
                label="Santuary Location"
                name="sanctuarylocation"
                id="sanctuarylocation"
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                fullWidth
                required
                label="Animal Count"
                name="animalcount"
                id="animalcount"
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                fullWidth
                required
                label="Habitat"
                name="habitat"
                id="habitat"
                onChange={handleInputChange}
              />
              <center>
              <Button
                type="submit"
                variant="contained"
                color="success"
                alignItems="center"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Species  
              </Button>
              </center>
            </Box>
            </Card>
        </Grid>
    </Grid>
    </>
  );
}

export default AddAnimals;