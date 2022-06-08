import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

//dependencias he importacion para el select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//dependencias CSS
import './css/DsGeneral/Dashboard_General.css';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '10px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);


const cardSelect = (
    <React.Fragment>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Age</InputLabel>
            <Select labelId="demo-select-small" id="demo-select-small" label="Age">
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    </React.Fragment>
);

const card = (
    <React.Fragment>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
                be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

export default function OutlinedCard() {
    return (
        <Box sx={{ minWidth: 275 }}>
            <h2>PRUEBA DE RUTA DASHBOAR 2</h2>
            
            <div className='cardGridSelect'>
                <Card variant="outlined">{cardSelect}</Card>
            </div>
            <div className='cardGridUp'>
                <Card variant="outlined">{card}</Card>
                <Card variant="outlined">{card}</Card>
            </div>

            <div className='cardGridDown'>
                <Card variant="outlined">{card}</Card>
                <Card variant="outlined">{card}</Card>
                <Card variant="outlined">{card}</Card>
            </div>
        </Box >
    );
}
