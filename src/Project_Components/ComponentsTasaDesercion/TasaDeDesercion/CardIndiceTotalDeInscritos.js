import React from 'react'
import { styled } from '@mui/material/styles';
import { selectCardTotInscritosTotDesertores } from '../../../store/HighchartStore/DashboardDesercion/TasaDeDesercion/HighchartDesercionGeneral'
import { CircularProgress, Paper, Typography, Box, LinearProgress, linearProgressClasses, Stack, Divider } from '@mui/material'

//dependencia
import { useSelector } from 'react-redux'
import './CardIndiceTotalDeInscritos.css'

export default function CardIndiceTotalDeInscritos() {
    const preData = useSelector(selectCardTotInscritosTotDesertores);

    let porcentajeInscritos = 0;
    let porcentajeDesertores = 0;

    porcentajeInscritos = parseFloat(((preData.TotNoDesertores * 100) / preData.TotEstudiantes).toFixed(1));
    porcentajeDesertores = parseFloat(((preData.TotDesertores * 100) / preData.TotEstudiantes).toFixed(1));

    return (
        <div className='cardIndiceDeDesercioncionPorMalla'>
            <div style={{ paddingRight: '0.5rem' }}>
                <Box position="relative" display="inline-flex" className='BoxContentsCircularProgressDesercion'>
                    <CircularProgress thickness={4} style={{ color: "#8bc34a" }} variant="determinate" value={porcentajeInscritos} size={125} />
                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography style={{ color: "#8bc34a", fontSize: "1.8rem" }}>
                            {porcentajeInscritos}%
                        </Typography>
                    </Box>
                </Box>
                <div className='DivPaperContents'>
                    <Paper key={2} elevation={2} className='PaperDesercion'>
                        <div style={{ minHeight: '1.8rem', backgroundColor: 'rgb(0 0 0 / 10%)' }}>
                            {preData.TotNoDesertores}
                        </div>
                        <Divider />
                        <div style={{ minHeight: '2rem', backgroundColor: 'rgb(0 0 0 / 20%)' }}>No Desertores</div>
                    </Paper>
                </div>
            </div>
            <div style={{ paddingRight: '0.5rem' }}>
                <Box position="relative" display="inline-flex" className='BoxContentsCircularProgressDesercion'>
                    <CircularProgress thickness={4} style={{ color: "#f44336 " }} variant="determinate" value={porcentajeDesertores} size={125} />
                    <Box
                        top={0}
                        left={0}
                        bottom={0}
                        right={0}
                        position="absolute"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Typography style={{ color: "#f44336 ", fontSize: "1.8rem" }}>
                            {porcentajeDesertores}%
                        </Typography>
                    </Box>
                </Box>
                <div className='DivPaperContents'>
                    <Paper key={2} elevation={2} className='PaperDesercion'>
                        <div style={{ minHeight: '1.8rem', backgroundColor: 'rgb(0 0 0 / 10%)' }}>
                            {preData.TotDesertores}
                        </div>
                        <Divider />
                        <div style={{ minHeight: '2rem', backgroundColor: 'rgb(0 0 0 / 20%)' }}>No Desertores</div>
                    </Paper>
                </div>
            </div>
        </div>
    );
}