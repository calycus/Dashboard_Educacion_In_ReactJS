import React from 'react'
import { styled } from '@mui/material/styles';
import { selectColumnGraduadosPorGenero } from '../../store/HighchartStore/DashboardRetencion/HighchartStoreRetencion'
import { CircularProgress, circularProgressClasses, Typography, Box, LinearProgress, linearProgressClasses, Stack } from '@mui/material'

//dependencia
import { useSelector } from 'react-redux'
import './CardIndiceDeRetencionPorMalla.css'

export default function CardIndiceDeRetencionPorMalla() {
    const preData = useSelector(selectColumnGraduadosPorGenero);
    
    const BorderLinearTotInscritos = styled(LinearProgress)(({ theme }) => ({
        height: 30,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#21BA45' : '#21BA45',
        },
    }));
    const BorderLinearTotConservados = styled(LinearProgress)(({ theme }) => ({
        height: 30,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#26a69a' : '#26a69a',
        },
    }));
    const BorderLinearTotGraduados = styled(LinearProgress)(({ theme }) => ({
        height: 30,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: theme.palette.mode === 'light' ? '#00bcd4' : '#00bcd4',
        },
    }));

    let totEstudiantesRetenidos = parseFloat(preData.totalDeEstudiantesRetenidos, 2)
    let totalDeEstudiantesGradudados = parseFloat(preData.totalDeEstudiantesGradudados,2)

    return (
        <div className='cardIndiceDeRetencionPorMalla'>
            <Box position="relative" display="inline-flex" className='BoxContentsCircularProgress'>
                <CircularProgress thickness={4} style={{color:"#00bcd4"}} variant="determinate" value={preData.promedioGeneral} size={125} />
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
                    <Typography style={{color:"#00bcd4", fontSize: "2rem"}}>
                        {preData.promedioGeneral}%
                    </Typography>
                </Box>
            </Box>
            <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
                <Box position="relative" display="inline-block">
                    <BorderLinearTotInscritos variant="buffer" value={100} />
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
                        <div className='BorderLinearTextContents'>
                            {preData.totalDeEstudiantesInscritos}
                        </div>
                    </Box>
                </Box>

                <Box position="relative" display="inline-block">
                    <BorderLinearTotConservados variant="determinate" value={totEstudiantesRetenidos} />
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
                        <div className='BorderLinearTextContents'>
                            {totEstudiantesRetenidos}%
                        </div>
                    </Box>
                </Box>

                <Box position="relative" display="inline-block">
                    <BorderLinearTotGraduados variant="determinate" value={totalDeEstudiantesGradudados} />
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
                        <div className='BorderLinearTextContents'>
                            {totalDeEstudiantesGradudados}%
                        </div>
                    </Box>
                </Box>


            </Stack>
        </div>
    );

}