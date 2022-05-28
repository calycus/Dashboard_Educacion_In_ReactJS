import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, Button } from '@mui/material';
import DashCard from '../Dasboard_General/DashCardGeneral';
import { useSelector, useDispatch } from 'react-redux';

//dependencias CSS
import '../css/Dashboard_General.css';
import { selectArrayMallas, traerMallasPorIdEscuelaAsync } from '../store/MallaStore/Mallas';

export default function OutlinedCard(children) {
    const mallas = useSelector(selectArrayMallas);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(traerMallasPorIdEscuelaAsync("3"))
    }, []);

    return (
        <Box sx={{ minWidth: 275 }}>
            {/* <div><Button variant="contained" onClick={() => dispatch(traerMallasPorIdEscuelaAsync("3"))}>PRUEBA</Button></div>
             */}
            <div>
                <ul>
                    {mallas.map((escuela, index) => <li key={index}>{escuela.nombre}</li>)}
                </ul>
            </div>
            <div className='cardGridSelect'>
                <Card variant="outlined">{DashCard.CardSelect}</Card>
            </div>
            <div className='cardGridUp'>
                <Card variant="outlined">{DashCard.DashCardVD}</Card>
                <Card variant="outlined">{DashCard.DashCardVI}</Card>
            </div>

            <div className='cardGridDown'>
                <Card variant="outlined">{DashCard.DashCardTRE}</Card>
                <Card variant="outlined">{DashCard.DashCardTDE}</Card>
                <Card variant="outlined">{DashCard.DashCardTRT}</Card>
            </div>
        </Box >
    );
}
