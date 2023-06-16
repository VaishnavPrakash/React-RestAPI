import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow, Card,IconButton,MenuItem,Select,Typography, TextField, Grid} from '@mui/material';
import AnimalService from "./AnimalService";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Navbar from "./Navbar";
import axios from 'axios';

const AllAnimals = () => {
  
  const navigate = useNavigate();
  const [page, setPage] = useState('');
  const [offset, setOffset] = useState('');
  const [sort, setSort] = useState('');
  const [loading, setLoading] = useState(true);
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
    fetchAnimal();
  }, []);

  const fetchAnimal = async () => {
    setLoading(true);
    try {
      const response = await AnimalService.getAllAnimals();
      setAnimalState(response.data);
      console.log(response.data.animalname);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const handleEditAnimal = (e, id) => {
    e.preventDefault();
    navigate(`/updateanimal/${id}`);
    console.log(id);
  };

  const handleDeleteAnimal = (e, id) => {
    e.preventDefault();
    AnimalService.deleteById(id).then((response) => {
      console.log("hello allanimals");
      console.log(response);
      if (animalState) {
        setAnimalState((prevAnimal) => {
          return prevAnimal.filter((animal) => {
            return animal.id !== id;
          });
        });
      }
    });
  };

  useEffect(() => {
    handleClick();
  }, [page,offset]);

  const handleClick = () => {
    try{
        
        if(page!==''&&offset!=='')
        {
          axios.get(`http://localhost:8080/pagination/${page}/${offset}`).then((res) => {
          setAnimalState(res.data);
        }).catch()
        {
            
        }
            }
            else{
                fetchAnimal ();
            }
        }
        catch(error){
            console.log(error);
        }
      };

      //Sort

      useEffect(()=>
      {
        handleSort();
      },[sort])

      const handleSort=()=>
      {
        try{
          if(sort!=='')
          {
          axios.get(`http://localhost:8080/sort/${sort}`).then((res)=>
          {
            setAnimalState(res.data);
          }).catch(error=>
            {
              console.log(error);
            })
          }
          else{
            fetchAnimal();
          }
        }
        catch(error){
            console.log(error);
        }
      }

  return (
    <>
      <Navbar/>
      <Grid container spacing={3} sx={{marginTop:"60px",marginLeft:"30px"}}>
        <Grid item direction="row">
        <Typography sx={{fontSize:"20px",fontFamily:"serif"}}>Page</Typography>
        <TextField variant="outlined" size="small" sx={{width:"40px",fontSize:"40px"}}
            value={page}
            onChange={(e)=>{setPage(e.target.value)}}/>
        </Grid>
        <Grid item xs={10} direction="row">
        <Typography sx={{fontSize:"20px",fontFamily:"serif"}}>OffSet</Typography>
        <TextField variant="outlined" size="small" sx={{width:"40px"}}
         value={offset}
         onChange={(e)=>{setOffset(e.target.value)}}/>
        </Grid>
        <Grid>
        <Typography sx={{fontSize:"20px",fontFamily:"serif",marginTop:'20px'}}>Sort by</Typography>
        <Select size="small" sx={{width:"120px"}} 
          onChange={(e)=>setSort(e.target.value)} 
          value={sort}
        >
          <MenuItem value={'animalname'}>Name</MenuItem>
          <MenuItem value={'animalcount'}>Count</MenuItem>
          <MenuItem value={''}>Default</MenuItem>
        </Select>
        </Grid>
      </Grid> 
      
      <Card >
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{'&:last-child td, &:last-child th': { border: 2,bgcolor:'Black',color:'white' }}}>
              <TableCell align="center">Id</TableCell>
              <TableCell align="center">Animal Type</TableCell>
              <TableCell align="center">Animal Name</TableCell>
              <TableCell align="center">Animal Height</TableCell>
              <TableCell align="center">Sanctuary Name</TableCell>
              <TableCell align="center">Sanctuary Location</TableCell>
              <TableCell align="center">Animal Count</TableCell>
              <TableCell align="center">Habitat</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead >
          {!loading && (
            <TableBody sx={{'&:last-child td, &:last-child th': { border: 0 },color:'Black',bgcolor:'DarkGrey'}}>
              {animalState.map((b) => (
                <TableRow key={b.id}>
                  <TableCell component="th" scope="row" align="center">{b.id}</TableCell>
                  <TableCell align="center">{b.animaltype}</TableCell>
                  <TableCell align="center">{b.animalname}</TableCell>
                  <TableCell align="center">{b.animalheight}</TableCell>
                  <TableCell align="center">{b.sanctuaryname}</TableCell>
                  <TableCell align="center">{b.sanctuarylocation}</TableCell>
                  <TableCell align="center">{b.animalcount}</TableCell>
                  <TableCell align="center">{b.habitat}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={(e) => handleEditAnimal(e, b.id)}>
                      <EditIcon/>
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton onClick={(e) => handleDeleteAnimal(e, b.id)}>
                      <DeleteIcon/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      </Card>
      </>
  );
};

export default AllAnimals;
