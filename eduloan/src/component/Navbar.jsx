import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Button} from '@mui/material';
import { ThemeProvider ,createTheme} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Navbar() {
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
      });

    const navigate=useNavigate();
    function handleClick1(){
      navigate("/allanimals")
    }

    function handleClick2(){
      navigate("/addanimals")
    }

  return (
    <>
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <Typography variant='h6' component="div" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            WILDLIFE MANAGEMENT
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button sx={{ color: '#fff' }} onClick={handleClick1}>
                View-Data
              </Button>
              <Button sx={{ color: '#fff' }} onClick={handleClick2}>
                Add-Data
              </Button>
              <Link to='/login'><Button sx={{ color: '#fff' }}>
                Logout
              </Button></Link>
          </Box>
        </Toolbar>
      </AppBar> 
    </Box>
    </ThemeProvider>
    </>
  );
}


export default Navbar;
