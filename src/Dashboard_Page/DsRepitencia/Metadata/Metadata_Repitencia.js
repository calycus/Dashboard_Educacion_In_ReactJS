import * as React from 'react';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

//componentes
import DashCardRPMetaDataComponent from '../../../Project_Components/ComponentsTasaRepitencia/MetaData/DashCardRPMetaDataComponent';
import Select from '../../../Project_Components/SelectComponent';

//store
import {
    selectIdEscuela, selectIdMalla
} from '../../../store/MallaStore/EleccionMallaStore';
import { selectArrayMallas, traerMallasPorIdEscuelaAsync } from '../../../store/MallaStore/Mallas';
import { traerInfoRPPieFactorEconomicoAsync } from '../../../store/HighchartStore/DashboardRepitencia/MetaData/HighchartRepitenciaFactorEconomico';
import { traerInfoRPColumnFactorEdnicoAsync } from '../../../store/HighchartStore/DashboardRepitencia/MetaData/HighchartRepitenciaFactorEdnico';
import { traerInfoRPColumnFactorGeograficoAsync } from '../../../store/HighchartStore/DashboardRepitencia/MetaData/HighchartRepitenciaFactorGeograficdo';


//dependencias CSS
import './Metadata_Repitencia.css'

export default function PageTasaDeDesercionMetaData() {
    const id_escuela = useSelector(selectIdEscuela);
    const id_malla = useSelector(selectIdMalla);
    const mallas = useSelector(selectArrayMallas);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(traerMallasPorIdEscuelaAsync(id_escuela))
        dispatch(traerInfoRPPieFactorEconomicoAsync(id_malla))
        dispatch(traerInfoRPColumnFactorEdnicoAsync(id_malla))
        dispatch(traerInfoRPColumnFactorGeograficoAsync(id_malla))
    }, []);

    return (
        <Box sx={{ minWidth: 275 }}>
            <div className='cardGridSelectRepitenciaMetaData'>
                <Card variant="outlined" className='selectContainer'>{Select.CardSelectMalla(mallas)}</Card>
            </div>
            <div className='cardGridUpRepitenciaMetaData'>
                <Card variant="outlined">{DashCardRPMetaDataComponent.DashCardPieFactorEconomico}</Card>
                <Card variant="outlined">{DashCardRPMetaDataComponent.DashCardColumnFactorEtnico}</Card>
            </div>
            <div className='cardGridDownRepitenciaMetaData'>
                <Card variant="outlined">{DashCardRPMetaDataComponent.DashCardColumnFactorGeografico}</Card>
            </div>
        </Box >
    );
}
