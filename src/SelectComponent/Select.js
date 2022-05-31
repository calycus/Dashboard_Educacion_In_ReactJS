import React from 'react';
//dependencias he importacion para el select
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SearchIcon from '@mui/icons-material/Search';

import { useSelector, useDispatch } from 'react-redux';
//store
import { selectIdEscuela } from '../store/EleccionMallaStore';
import { selectArrayMallas } from '../store/MallaStore/Mallas';
import { Button, IconButton } from '@mui/material';

//dependencias CSS
import '../css/Select.css';
import { useTheme } from '@mui/material/styles';



let nameMalla = [];
let idEscuela = null;
let theme = null;

function UseSelectAll() {
    const id_escuela = useSelector(selectIdEscuela);
    const mallas = useSelector(selectArrayMallas);
    return {
        idEscuela: id_escuela,
    }
}
function NameSelect(data){
    
    let mallaAux = UseSelectAll();
    theme = useTheme()

    data.map((es) => {
        if (es.id == mallaAux.idEscuela) {
            nameMalla = es.nombre
        }
    })
}
function SendData(idMalla, idPeriodo){

}

function CardSelectMalla(props) {
    NameSelect(props);
    return (
        <React.Fragment>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">{nameMalla}</InputLabel>
                <Select labelId="demo-select-small" id="demo-select-small" label="Age">
                    {props.map((escuela, index) => <MenuItem key={index} value={escuela.id}>{
                        escuela.nombre
                    }</MenuItem>)}
                </Select>
            </FormControl>
                <IconButton aria-label="search" size='large'>
                    <SearchIcon sx={{ fontSize: 30, color: theme.palette.primary.main }}/>
                </IconButton>
        </React.Fragment>
    )
};

function CardSelectMallaPeriodos(props) {
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