import * as React from 'react';
import Box from '@mui/material/Box';
import {Card, CardHeader, CardActions, CardContent } from '@mui/material';
import DashCard from '../Dasboard_General/DashCardGeneral';

//dependencias CSS
import '../css/Dashboard_General.css';



export default function OutlinedCard() {
    return (
        <Box sx={{ minWidth: 275 }}>
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
