import * as React from 'react';
import Box from '@mui/material/Box';
import { Card, CardContent } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

//componentes
import DashCardTasaDeRepitenciaPorMateria from '../../../Project_Components/ComponentsTasaRepitencia/RepitenciaPorMateria/DashCardTsRepitenciaPorMateriaComponent';
import Select from '../../../Project_Components/SelectComponent';
//store
import {
    selectIdEscuela, selectIdMalla
} from '../../../store/MallaStore/EleccionMallaStore';
import { selectArrayMallas, traerMallasPorIdEscuelaAsync } from '../../../store/MallaStore/Mallas';
import { traerPeriodosPorIdMallaAsync } from '../../../store/PeriodosStore/Periodos';

//dependencias CSS
import './Dashboard_Repitencia_Por_Materia.css'

export default function PageTasaDeRepitencia() {
    const id_escuela = useSelector(selectIdEscuela);
    const id_malla = useSelector(selectIdMalla);
    const mallas = useSelector(selectArrayMallas);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(traerMallasPorIdEscuelaAsync(id_escuela))
        dispatch(traerPeriodosPorIdMallaAsync(id_malla))
    }, []);

    return (

        <Box sx={{ minWidth: 275 }}>
            <div className='cardGridSelectRepitenciaPorMateria'>
                <Card>
                    <CardContent className='selectContainer'>
                        {Select.CardSelectMalla(mallas)}
                    </CardContent>
                </Card>
            </div>
            <div className='cardGridUpRepitenciaPorMateria'>
                <Card>
                    <CardContent>
                        {DashCardTasaDeRepitenciaPorMateria.DashCardListRepitenciaPorMateria()}
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        {DashCardTasaDeRepitenciaPorMateria.DashCardSpaiderWebPorMateria()}
                    </CardContent>
                </Card>
            </div>
            <div className='cardGridDownRepitenciaPorMateria'>
                <Card>
                    <CardContent>
                        {DashCardTasaDeRepitenciaPorMateria.DashCardColumnComparativoPorMateria()}
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        {DashCardTasaDeRepitenciaPorMateria.DashCardColumnComparativoPorMateria()}
                    </CardContent>
                </Card>
            </div>
        </Box >
    );
}
