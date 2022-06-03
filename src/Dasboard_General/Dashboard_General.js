import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

//componentes
import DashCardGeneral from '../Project_Components/ComponentsGeneral/DashCardGeneralComponent';
import Select from '../Project_Components/SelectComponent';

//store
import {
    selectIdEscuela, selectIdMalla
} from '../store/MallaStore/EleccionMallaStore';
import { selectArrayMallas, traerMallasPorIdEscuelaAsync } from '../store/MallaStore/Mallas';
import {traerInfoAsync} from '../store/DashGeneralStore/HighchartStore/HighchartStoreGeneral'

//dependencias CSS
import '../css/Dashboard_General.css';

export default function OutlinedCard(children) {
    const id_escuela = useSelector(selectIdEscuela);
    const id_malla = useSelector(selectIdMalla);
    const mallas = useSelector(selectArrayMallas);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(traerMallasPorIdEscuelaAsync(id_escuela))
        dispatch(traerInfoAsync(id_malla))
    }, []);

    return (
        <Box sx={{ minWidth: 275 }}>
            <div className='cardGridSelect'>
                <Card variant="outlined">{Select.CardSelectMalla(mallas)}</Card>
            </div>
            <div className='cardGridUp'>
                <Card variant="outlined">{DashCardGeneral.DashCardVD}</Card>
                <Card variant="outlined">{DashCardGeneral.DashCardVI}</Card>
            </div>
            <div className='cardGridDown'>
                <Card variant="outlined">{DashCardGeneral.DashCardTRE}</Card>
                <Card variant="outlined">{DashCardGeneral.DashCardTDE}</Card>
                <Card variant="outlined">{DashCardGeneral.DashCardTRT}</Card>
            </div>
        </Box >
    );
}
