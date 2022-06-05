import * as React from 'react';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

//componentes
import DashCardTasaDeRepitencia from '../../../Project_Components/ComponentsTasaRepitencia/DashCardTsRepitenciaComponent';
import Select from '../../../Project_Components/SelectComponent';

//store
import {
    selectIdEscuela, selectIdMalla
} from '../../../store/MallaStore/EleccionMallaStore';
import { selectArrayMallas, traerMallasPorIdEscuelaAsync } from '../../../store/MallaStore/Mallas';

//dependencias CSS
import './Dashboard_Repitencia.css'

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
            <div className='cardGridSelectRepitencia'>
                <Card variant="outlined" className='selectContainer'>{Select.CardSelectMalla(mallas)}</Card>
            </div>
            <div className='cardGridUpRepitencia'>
                <Card variant="outlined">{DashCardTasaDeRepitencia.DashCardListRepitencia}</Card>
                <Card variant="outlined">{DashCardTasaDeRepitencia.DashCardSpaiderWeb}</Card>
            </div>
            <div className='cardGridDownRepitencia'>
                <Card variant="outlined">{DashCardTasaDeRepitencia.DashCardColumnComparativo}</Card>
            </div>
        </Box >
    );
}
