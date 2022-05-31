import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, Button } from '@mui/material';
import DashCardGeneral from '../Dasboard_General/DashCardGeneral';
import Select from '../SelectComponent/Select';
import { useSelector, useDispatch } from 'react-redux';

//store
import {
    selectIdEscuela,
} from '../store/EleccionMallaStore';
import { selectArrayMallas, traerMallasPorIdEscuelaAsync } from '../store/MallaStore/Mallas';

//dependencias CSS
import '../css/Dashboard_General.css';

export default function OutlinedCard(children) {
    const id_escuela = useSelector(selectIdEscuela);
    const mallas = useSelector(selectArrayMallas);
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(traerMallasPorIdEscuelaAsync(id_escuela))
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
