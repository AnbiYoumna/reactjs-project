import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper , Button } from '@mui/material';

export default function Login() {
    const paperstyle={padding:'50px 20px', width: 600,margin:"20px auto"}
    const[name,setName]=React.useState('')
    const[address,setAddress]=React.useState('')
    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,address}
        console.log(student)
    }
  return (
    <Container>
        <Paper elevation={3} style={paperstyle}>
        <h1 style={{textAlign: 'center'}}>
        <b>LOGIN</b>
      </h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1},
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center items horizontally
        justifyContent: 'center',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth
      value={name}
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Adress" variant="outlined" fullWidth 
      value={address}
      onChange={(e)=>setAddress(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleClick}>Login</Button>
      
    <h3 style={{ color: 'black', textAlign: 'center'}}>{name}&nbsp;{address}</h3> 
    </Box>
    
    </Paper>
    </Container>
  );
}
