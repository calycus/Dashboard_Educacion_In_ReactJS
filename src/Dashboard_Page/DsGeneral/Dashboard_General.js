import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

//componentes
import DashCardGeneral from '../../Project_Components/ComponentsGeneral/DashCardGeneralComponent';
import Select from '../../Project_Components/SelectComponent';

//store
import {
    selectIdEscuela, selectIdMalla, selectIdFacultad
} from '../../store/MallaStore/EleccionMallaStore';
import { selectArrayMallas, traerMallasPorIdEscuelaAsync } from '../../store/MallaStore/Mallas';
import {traerInfoGeneralAsync} from '../../store/HighchartStore/DashboardGeneral/HighchartStoreGeneral'
import {traerInfoFenomenosAsync} from '../../store/HighchartStore/DashboardGeneral/HighchartFenomenos'

//dependencias CSS
import './Dashboard_General.css'

export default function OutlinedCard() {
    const id_escuela = useSelector(selectIdEscuela);
    const id_malla = useSelector(selectIdMalla);
    const id_facultad = useSelector(selectIdFacultad)
    const mallas = useSelector(selectArrayMallas);
    const dispatch = useDispatch();
    
    React.useEffect(() => {
        dispatch(traerMallasPorIdEscuelaAsync(id_escuela))
        dispatch(traerInfoGeneralAsync(id_malla))
        dispatch(traerInfoFenomenosAsync(id_facultad))
    }, []);

    return (
        <Box sx={{ minWidth: 275 }}>
            <div className='cardGridSelectGeneral'>
                <Card variant="outlined" className='selectContainer'>{Select.CardSelectMalla(mallas)}</Card>
            </div>
            <div className='cardGridUpGeneral'>
                <Card variant="outlined">{DashCardGeneral.DashCardVD}</Card>
                <Card variant="outlined">{DashCardGeneral.DashCardVI}</Card>
            </div>
            <div className='cardGridDownGeneral'>
                <Card variant="outlined">{DashCardGeneral.DashCardTRE}</Card>
                <Card variant="outlined">{DashCardGeneral.DashCardTDE}</Card>
                <Card variant="outlined">{DashCardGeneral.DashCardTRT}</Card>
            </div>
        </Box >
    );
}
