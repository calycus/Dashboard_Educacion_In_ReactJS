import React, { useState, useEffect } from 'react';
//dependencias he importacion para el select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton, OutlinedInput, Chip, Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';


//store
import { selectNameEscuela, selectIdEscuela, selectIdMalla, setLocalIdMalla, setLocalNameEscuela } from '../store/MallaStore/EleccionMallaStore';
import { selectArrayMallas } from '../store/MallaStore/Mallas';
import { selectArrayPeriodos, traerPeriodosPorIdMallaAsync } from '../store/PeriodosStore/Periodos';
///DsGeneral
import { traerInfoGeneralAsync } from '../store/HighchartStore/DashboardGeneral/HighchartStoreGeneral'

///Retencion
import { traerInfoRetencionAsync } from '../store/HighchartStore/DashboardRetencion/HighchartStoreRetencion'

///Repitencia
import { traerInfoRepitenciaAsync } from '../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaGeneral';
import { traerInfoRepitenciaColumnTopAsync } from '../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaColumnTopMaterias';
////Repitencia => Repitencia Por Materia
////Repitencia => MetaData
import { traerInfoRPPieFactorEconomicoAsync } from '../store/HighchartStore/DashboardRepitencia/MetaData/HighchartRepitenciaFactorEconomico';
import { traerInfoRPColumnFactorEdnicoAsync } from '../store/HighchartStore/DashboardRepitencia/MetaData/HighchartRepitenciaFactorEdnico';
import { traerInfoRPColumnFactorGeograficoAsync } from '../store/HighchartStore/DashboardRepitencia/MetaData/HighchartRepitenciaFactorGeograficdo';

///Desercion
import { traerInfoLineDesertoresAsync } from '../store/HighchartStore/DashboardDesercion/TasaDeDesercion/HighchartDesercionGeneral'
import { traerInfoesercionGenerosEdadEmbarazoAsync } from '../store/HighchartStore/DashboardDesercion/TasaDeDesercion/HighchartDesercionGenerosEdadEmbarazo'
////Desercion => Prediccion
////Desercion => MetaData
import { traerInfoDSPieFactorEconomicoAsync } from '../store/HighchartStore/DashboardDesercion/MetaData/HighchartDesercionFactorEconomico';
import { traerInfoDSColumnFactorEdnicoAsync } from '../store/HighchartStore/DashboardDesercion/MetaData/HighchartDesercionFactorEdnico';
import { traerInfoDSColumnFactorGeograficoAsync } from '../store/HighchartStore/DashboardDesercion/MetaData/HighchartDesercionFactorGeograficdo';


//dependencias CSS
import '../css/Select.css'
import { useTheme } from '@mui/material/styles';


//constantes globales
let nameMalla = "";
let newIdMalla = null;
let idsPeriodos = "";
let theme = null;
let mallaAux = [];
let ArrayPeriodos = [];

//funcion encargada de traer las los datos del store
function UseSelectAll() {
    const id_escuela = useSelector(selectIdEscuela);
    const id_malla = useSelector(selectIdMalla);
    const mallas = useSelector(selectArrayMallas);
    return {
        idEscuela: id_escuela,
        idMalla: id_malla
    }
}


//Funcion encargada de asignar un estilo nuevo a las opciones seleccionadas en el multi select
function getStyles(id, PeriodosDeInteres, theme) {
    return {
        fontWeight:
            PeriodosDeInteres.indexOf(id) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}


//funciones que devuelven los diferentes selects usados en el dashboard
function CardSelectMalla(props) {
    

    mallaAux = UseSelectAll();
    theme = useTheme();
    nameMalla = useSelector(selectNameEscuela);
    ArrayPeriodos = useSelector(selectArrayPeriodos);
    
    const DataMallas = props;
    const dispatch = useDispatch();
    const sampleLocation = useLocation();
    const [PeriodosDeInteres, setPeriodosDeInteres] = useState([]);
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 2;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };


    //Constantes de tipo evento encargadas de supervisar lo que pasa con los diferentes selects
    const SelectMalla = (event) => {
        newIdMalla = event.target.value;
        let array = [];
        let sendData = {
            newIdMalla: newIdMalla,
            dataMalla: DataMallas
        }
        dispatch(setLocalIdMalla(newIdMalla));
        dispatch(setLocalNameEscuela(sendData));

        dispatch(traerPeriodosPorIdMallaAsync(newIdMalla))
        setPeriodosDeInteres(array)
        SelectPeriodos();
    };
    const SelectMultiPeriodos = (event) => {
        let array = event.target.value

        if (array.length > 4) {
            return
        } else {
            let ids = "";
            setPeriodosDeInteres(array);

            array.map((item, index) => {
                if (index > 0) {
                    ids += ",";
                }
                ids += item.id.toString();
            });

            idsPeriodos = ids;
        }
    };

    //constante que devuelve un select con los periodes de interes
    function SelectPeriodos() {
        let SelectReturn = null;
        if (sampleLocation.pathname == "/tasa_repitencia") {
            SelectReturn = (
                <FormControl sx={{ m: 1, minWidth: 500, maxWidth: 700 }} size="small">
                    <InputLabel id="demo-multiple-chip-label">Seleccionar Periodos</InputLabel>
                    <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={PeriodosDeInteres}
                        onChange={SelectMultiPeriodos}
                        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((value) => (
                                    <Chip key={value.id} label={value.abreviatura} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {ArrayPeriodos.map((periodos) => (
                            <MenuItem
                                key={periodos.id}
                                value={periodos}
                                style={getStyles(periodos.abreviatura, PeriodosDeInteres, theme)}
                            >
                                {periodos.abreviatura}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )
        } else if (sampleLocation.pathname == "/tasa_retencion") {
            /* SelectReturn = (
                <FormControl sx={{ m: 1, minWidth: 200, maxWidth: 400 }} size="small">
                    <InputLabel id="demo-select-small">Seleccionar Periodo</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        defaultValue={mallaAux.idMalla}
                        label="id"
                        onChange={handleChange}
                    >
                        {props.map((malla, index) => <MenuItem key={malla.id} value={malla.id}>{
                            malla.nombre
                        }</MenuItem>)}
                    </Select>
                </FormControl>
            ) */
        }

        return SelectReturn
    }


    return (
        <React.Fragment>
            <FormControl sx={{ m: 1 }} size="small">
                <InputLabel id="demo-select-small">Seleccionar Malla</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    defaultValue={mallaAux.idMalla}
                    label="id"
                    onChange={SelectMalla}
                >
                    {props.map((malla, index) => <MenuItem key={malla.id} value={malla.id}>{
                        malla.nombre
                    }</MenuItem>)}
                </Select>
            </FormControl>
            {SelectPeriodos()}
            <IconButton aria-label="search" size='large' onClick={() => {
                {
                    if (sampleLocation.pathname == "/general") {
                        dispatch(traerInfoGeneralAsync(mallaAux.idMalla))

                    } else if (sampleLocation.pathname == "/tasa_retencion") {
                        dispatch(traerInfoRetencionAsync(mallaAux.idMalla))

                    } else if (sampleLocation.pathname == "/tasa_repitencia") {
                        if (PeriodosDeInteres.length == 0) {
                            return
                        } else {
                            dispatch(traerInfoRepitenciaAsync(mallaAux.idMalla, idsPeriodos))
                            dispatch(traerInfoRepitenciaColumnTopAsync(mallaAux.idMalla))
                        }

                    } else if (sampleLocation.pathname == "/tasa_repitencia_metadata") {
                        dispatch(traerInfoRPPieFactorEconomicoAsync(mallaAux.idMalla))
                        dispatch(traerInfoRPColumnFactorEdnicoAsync(mallaAux.idMalla))
                        dispatch(traerInfoRPColumnFactorGeograficoAsync(mallaAux.idMalla))

                    } else if (sampleLocation.pathname == "/tasa_desercion") {
                        dispatch(traerInfoLineDesertoresAsync(mallaAux.idMalla))
                        dispatch(traerInfoesercionGenerosEdadEmbarazoAsync(mallaAux.idMalla))

                    } else if (sampleLocation.pathname == "/tasa_desercion_metadata") {
                        dispatch(traerInfoDSPieFactorEconomicoAsync(mallaAux.idMalla))
                        dispatch(traerInfoDSColumnFactorEdnicoAsync(mallaAux.idMalla))
                        dispatch(traerInfoDSColumnFactorGeograficoAsync(mallaAux.idMalla))

                    }
                }
            }}>
                <SearchIcon sx={{ fontSize: 30, color: theme.palette.primary.main }} />
            </IconButton>
        </React.Fragment>
    )
};

export default {
    CardSelectMalla,
}