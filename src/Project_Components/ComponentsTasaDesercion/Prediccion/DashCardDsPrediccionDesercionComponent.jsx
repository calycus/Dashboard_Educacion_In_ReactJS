import React from "react";
import { CardHeader, CardContent } from '@mui/material';
import { IconButton } from "@mui/material";
import { Announcement, AspectRatio, ImportExport } from '@mui/icons-material';
import { Divider } from '@mui/material';

//componentes
import DashCardListEstudiantesDesercion from '../../HighchartsComponent/HighchartsDesercion/Prediccion/DashCardListEstudiantesDesercion'
import CardInfoDataEstudiante from './CardInfoEstudiantesEnRiesgo'
import './DashCardDsPrediccionDesercionComponent.css'

const CardInfoEstudiante = () => {
    return (
        <React.Fragment>
                <CardInfoDataEstudiante/>
        </React.Fragment>
    )
}

const DashCardColumnTendenciaDelEstuainte = () => {
    return (
        <React.Fragment>
            <CardHeader
                title="TENDENCIA DEL ESTUDIANTE"
            />
            <Divider />
            <CardContent>
            </CardContent>
        </React.Fragment>
    )
}

const CardTableListEstudianteEnRiesgo = () => {
    return (
        <React.Fragment>
            <CardContent>
                <DashCardListEstudiantesDesercion/>
            </CardContent>
        </React.Fragment>
    )
}

const DashCardLineTrayectoriaEstudiantil = () => {
    return (
        <React.Fragment>
            <CardHeader
                title="TRAYECTORIA ACADÉMICA"
            />
            <Divider />
            <CardContent>
            </CardContent>
        </React.Fragment>
    )
}

const CardTableListMateriasEstudiante = () => {
    return (
        <React.Fragment>
            <CardContent>
            </CardContent>
        </React.Fragment>
    )
}

export default {
    CardInfoEstudiante,
    DashCardColumnTendenciaDelEstuainte,
    CardTableListEstudianteEnRiesgo,
    DashCardLineTrayectoriaEstudiantil,
    CardTableListMateriasEstudiante
}