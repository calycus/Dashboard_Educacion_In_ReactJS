import React, { useState, useEffect } from 'react';
//dependencias he importacion para el select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';
import { Button, IconButton, OutlinedInput } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

//store
import { selectIdEscuela, selectIdMalla, setLocalIdMalla } from '../store/MallaStore/EleccionMallaStore';
import { selectArrayMallas } from '../store/MallaStore/Mallas';
import {traerInfoGeneralAsync} from '../store/DashGeneralStore/HighchartStore/HighchartStoreGeneral'

//dependencias CSS
import '../css/Select.css'
import { useTheme } from '@mui/material/styles';


//constantes globales
let nameMalla = [];
let newIdMalla = null;
let theme = null;
let mallaAux = [];

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

//funcion encargada de recorrer los datos traidos del store para extraer una varible en especifico 
function NameSelect(data) {

    mallaAux = UseSelectAll();
    theme = useTheme()

    data.map((es) => {
        if (es.id == mallaAux.idEscuela) {
            nameMalla = es.nombre
        }
    })
}

//funciones que devuelven los diferentes selects usados en el dashboard
function CardSelectMalla(props) {
    NameSelect(props);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        newIdMalla = event.target.value;
        dispatch(setLocalIdMalla(newIdMalla));

    };
    return (
        <React.Fragment>
            <FormControl sx={{ m: 1, minWidth: 200, maxWidth: 400 }} size="small">
                <InputLabel id="demo-select-small">Seleccionar Malla</InputLabel>
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
            <IconButton aria-label="search" size='large' onClick={() => dispatch(traerInfoGeneralAsync(mallaAux.idMalla))}>
                <SearchIcon sx={{ fontSize: 30, color: theme.palette.primary.main }} />
            </IconButton>
        </React.Fragment>
    )
};

/* function CardSelectMallaPeriodos(props) {
    return (
        <React.Fragment>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-multiple-chip-label">Seleccionar Malla</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={newIdEscuela}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                >
                    {props.map((escuela, index) => <MenuItem key={index} value={escuela.id}>{
                        escuela.nombre
                    }</MenuItem>)}
                </Select>
            </FormControl>
        </React.Fragment>
    )
}; */

function CardSelectMallaPeriodo(props) {
    return (
        <React.Fragment>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">Age</InputLabel>
                <Select labelId="demo-select-small" id="demo-select-small" label="Age">
                    {/* {props.map((escuela, index) => <MenuItem key={index} value={escuela.id}>{
                        escuela.nombre
                    }</MenuItem>)} */}
                </Select>
            </FormControl>
        </React.Fragment>
    )
};


export default {
    CardSelectMalla,
}