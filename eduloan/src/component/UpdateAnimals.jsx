import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import {Avatar,Button,TextField,Box,Grid,Typography,Card} from '@mui/material';
import AnimalService from './AnimalService';
import Navbar from "./Navbar";

const UpdateAnimals = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animalState, setAnimalState] = useState({
    animaltype: "",
        animalname: "",
        animalheight: 0,
        sanctuaryname: "",
        sanctuarylocation: "",
        animalcount: 0,
        habitat: "",
  });

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await AnimalService.getAnimalById(id);
        setAnimalState(response.data);
        // console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAnimal();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnimalState({ ...animalState, [name]: value });
  };

  const handleUpdateAnimal = (e) => {
    e.preventDefault();
    AnimalService.updateAnimal(id, animalState)
      .then((response) => {
        // console.log(response);
        navigate("/allanimals");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("updated");
    window.alert("Updated Successfully");
  };

  return (
    <>
      <Navbar/>
      <Grid sx={{backgroundImage: 'url(https://wallpapercave.com/wp/wp4435473.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
        <Grid container component="main" sx={{ height: ''}} elevation={24}>
            <Card sx={{
              my: 13,
              mx: 30,
              padding: "40px",
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              bgcolor: '4F709C',
              opacity: '0.7',
              borderRadius:"25px"
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'black' }}>
              <DynamicFeedIcon/> 
            </Avatar>
            <Typography  style={{fontFamily:"fantasy",fontSize:"30px"}}>
              Update Animal - {animalState.animalname}
            </Typography>
            <Box component="form"  Validate onSubmit={handleUpdateAnimal} sx={{ mt: 2}}>
              <TextField
                margin="normal"
                fullWidth
                label="Animal Type"
                name="animaltype"
                id="animaltype"
                placeholder={animalState.animaltype}
                value={animalState.animaltype}
                onChange={handleInputChange}
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                label="Animal Name"
                name="animalname"
                id="animalname"
                placeholder={animalState.animalname}
                value={animalState.animalname}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Animal Height"
                name="animalheight"
                id="animalheight"
                placeholder={animalState.animalheight}
                value={animalState.animalheight}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Santuary Name"
                name="sanctuaryname"
                id="sanctuaryname"
                placeholder={animalState.sanctuaryname}
                value={animalState.sanctuaryname}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Santuary Location"
                name="sanctuarylocation"
                id="sanctuarylocation"
                placeholder={animalState.sanctuarylocation}
                value={animalState.sanctuarylocation}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Animal Count"
                name="animalcount"
                id="animalcount"
                placeholder={animalState.animalcount}
                value={animalState.animalcount}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Habitat"
                name="habitat"
                id="habitat"
                placeholder={animalState.habitat}
                value={animalState.habitat}
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
                Update Species
              </Button>
              </center>
            </Box>
            </Card>
        </Grid>
    </Grid>
    </>
  );
};

export default UpdateAnimals;
