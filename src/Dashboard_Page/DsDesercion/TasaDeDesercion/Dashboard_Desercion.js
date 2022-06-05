import * as React from 'react';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

//componentes
import DashCardTasaDeDesercion from '../../../Project_Components/ComponentsTasaDesercion/DashCardTsDesercionComponent';
import Select from '../../../Project_Components/SelectComponent';

//store
import {
    selectIdEscuela, selectIdMalla
} from '../../../store/MallaStore/EleccionMallaStore';
import { selectArrayMallas, traerMallasPorIdEscuelaAsync } from '../../../store/MallaStore/Mallas';

//dependencias CSS
import './Dashboard_Desercion.css'

export default function PageTasaDeRetencion() {
    const id_escuela = useSelector(selectIdEscuela);
    const id_malla = useSelector(selectIdMalla);
    const mallas = useSelector(selectArrayMallas);
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        dispatch(traerMallasPorIdEscuelaAsync(id_escuela))
    }, []);

    return (
        <Box sx={{ minWidth: 275 }}>
            <div className='cardGridSelectDesercion'>
                <Card variant="outlined" className='selectContainer'>{Select.CardSelectMalla(mallas)}</Card>
            </div>
            <div className='cardGridUpDesercion'>
                <Card variant="outlined">{DashCardTasaDeDesercion.DashCardLineDesercion}</Card>
                <Card variant="outlined">{DashCardTasaDeDesercion.DashCardCircularProgressDesercion}</Card>
            </div>
            <div className='cardGridDownDesercion'>
                <Card variant="outlined">{DashCardTasaDeDesercion.DashCardDesercionPorMaternidad}</Card>
                <Card variant="outlined">{DashCardTasaDeDesercion.DashCardDesercionPorRangoDeEdad}</Card>
                <Card variant="outlined">{DashCardTasaDeDesercion.DashCardDesercionPorGenero}</Card>
            </div>
        </Box >
    );
}
