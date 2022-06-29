import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Typography } from '@mui/material';
import Highcharts from "highcharts";
import HcMore from "highcharts/highcharts-more";

//Dependencias
import { selectNameEscuela } from '../../../../store/MallaStore/EleccionMallaStore';
import { selectArrayAbreviaturasPeriodoRepitencia, selectArrayIndicesRepitencia } from '../../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaGeneral';
import {
    selectArrayMateriasRepitencia, selectArrayMateriasSelectPeriodo,
    selectArrayPeriodosDeInteres
} from '../../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaGeneral';
import HighchartSpaiderWebRepitencia from './HighchartSpaiderWebRepitencia';
import HighchartDialogSpaiderWebPeriodSubjects from './HighchartDialogSpaiderWebPeriodSubjects';

import HighchartDialogColumn from './HighchartDialogColumn'
import '../../../../css/ListTableStyle.css'


HcMore(Highcharts);

let viewRowsTable = [];
let ArrayMaterias = [];
let arrayDePeriodosSeleccionados = [];
let nameEscuela = "";
let AbreviaturasPeriodoRepitencia = []
let ArrayDeIndicesDeRepitencia = []
let newOpcionGraphicRenderSelected = HighchartSpaiderWebRepitencia
let newOpcionGraphicRenderSelectedPeriodSubjects = HighchartDialogSpaiderWebPeriodSubjects
let newOpcionGraphicDialogColumn = HighchartDialogColumn

export default function DataTable() {
    viewRowsTable = useSelector(selectArrayMateriasSelectPeriodo)
    arrayDePeriodosSeleccionados = useSelector(selectArrayPeriodosDeInteres)
    nameEscuela = useSelector(selectNameEscuela);
    ArrayMaterias = useSelector(selectArrayMateriasRepitencia);
    AbreviaturasPeriodoRepitencia = useSelector(selectArrayAbreviaturasPeriodoRepitencia)
    ArrayDeIndicesDeRepitencia = useSelector(selectArrayIndicesRepitencia)

    const [chexData, sendChexData] = useState([])
    const [contador, setContador] = useState(0)
    
    const dispatch = useDispatch();

    const handleSelects = (data, checkedControl) => {
        let newArray = [];

        if (!checkedControl) {
            newArray = chexData.filter((item) => item.id !== data.id);
            sendChexData(newArray);
            renderSelected(newArray)
            if (newArray.length > 2) {
                renderSelectedPeriodSubjects(dispatch,newArray)
            }
            return
        }
        chexData.push(data);
        sendChexData(chexData);
        renderSelected(chexData)

        if (chexData.length > 2) {
            renderSelectedPeriodSubjects(dispatch,chexData)
        }
    }

    const handleChexControl = (checked) => {
        if (checked) {

            setContador(contador + 1)
        } else {

            setContador(contador - 1)
        }
    }

    return (
        <TableContainer component={Paper}>
            <Typography
                className='TableTitle'
                component="div"
            >
                {nameEscuela}
            </Typography>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell ></TableCell>
                        <TableCell >Materia</TableCell>
                        <TableCell align="center" >Nivel</TableCell>
                        <TableCell align="center" >Reprobados</TableCell>
                        <TableCell align="center" >% INCIDENCIA</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {viewRowsTable.map((row, index) => (
                        <Fila
                            key={row.id}
                            row={row}
                            handleSelects={handleSelects}
                            handleChexControl={handleChexControl}
                            contador={contador} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

const Fila = ({ row, handleSelects, handleChexControl, contador }) => {
    const [checked, setChecked] = useState(false)

    const isDisabled = () => {
        if (!checked && contador == 6) {
            return true
        } else {
            return false
        }
    }

    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell >
                <Checkbox color="success" checked={checked} disabled={isDisabled(checked)} onClick={() => handleSelects(row, !checked)} onChange={(e) => {
                    handleChexControl(e.target.checked)
                    setChecked(e.target.checked)
                }} />
            </TableCell>
            <TableCell >{row.materia}</TableCell>
            <TableCell align="center" >{row.nivel}</TableCell>
            <TableCell align="center" >{row.cantidad_perdidas}</TableCell>
            <TableCell align="center" >{row.porcentaje_incidencia}</TableCell>
        </TableRow>
    )
}

const renderSelected = (data) => {
    newOpcionGraphicRenderSelected.xAxis.categories = []
    newOpcionGraphicRenderSelected.series[0].data = []
    data.map(selected => {
        newOpcionGraphicRenderSelected.xAxis.categories.push(selected.materia);
        newOpcionGraphicRenderSelected.series[0].data.push({
            name: selected.materia,
            label: selected.materia,
            y: parseFloat(selected.porcentaje_incidencia),
        });
    })

    Highcharts.chart('SpaiderWebMateriasSelected', newOpcionGraphicRenderSelected)
}

const renderSelectedPeriodSubjects = (dispatch, data) => {
    newOpcionGraphicRenderSelectedPeriodSubjects.xAxis.categories = []
    newOpcionGraphicRenderSelectedPeriodSubjects.series = []

    newOpcionGraphicDialogColumn.xAxis.categories = []
    newOpcionGraphicDialogColumn.series[0].data = []


    let materias_keys = Object.keys(ArrayMaterias);
    let arrayMateriasParaMostrar = [];

    //  recorremos las materias seleccionadas

    materias_keys.map((periodo, index) => {
        arrayMateriasParaMostrar.push({
            name: abreviaturaNombrePeriodo(index),
            data: [],
            pointPlacement: "on",
        });

        setTimeout(() => {
            data.map((elementoMateria) => {
                let elemento = ArrayMaterias[periodo].find(
                    (el) => el.id == elementoMateria.id
                );
                newOpcionGraphicRenderSelectedPeriodSubjects.xAxis.categories.push(
                    elementoMateria.materia
                );
                if (elemento != null) {
                    arrayMateriasParaMostrar[index].data.push({
                        name: elemento.materia,
                        y: parseFloat(elemento.porcentaje_incidencia),
                    });
                } else {
                    arrayMateriasParaMostrar[index].data.push({
                        name: elementoMateria.materia,
                        y: 0,
                    });
                }
            });
        }, 500)
    });
    newOpcionGraphicRenderSelectedPeriodSubjects.series =
        arrayMateriasParaMostrar;

    AbreviaturasPeriodoRepitencia.map((elemento) => {
        newOpcionGraphicDialogColumn.xAxis.categories.push(elemento.abreviatura)
    })
    newOpcionGraphicDialogColumn.series[0].data = ArrayDeIndicesDeRepitencia

    /* dispatch((newOpcionGraphicRenderSelectedPeriodSubjects))
    dispatch((newOpcionGraphicDialogColumn)) */
}

const abreviaturaNombrePeriodo = (indexPeriodo) => {
    let arrayValorSelectPeriodosOrdenadoJSON = JSON.stringify(arrayDePeriodosSeleccionados)
    let arrayValorSelectPeriodosOrdenado = JSON.parse(arrayValorSelectPeriodosOrdenadoJSON)
    arrayValorSelectPeriodosOrdenado.sort(
        function (a, b) {
            return a.id - b.id;
        }
    );

    return arrayValorSelectPeriodosOrdenado[indexPeriodo].abreviatura;

}

const renderHighchartGraphic = () => {
    setTimeout(() => {
        Highcharts.chart('DialogColumnPeriodSubjects', newOpcionGraphicDialogColumn)
        Highcharts.chart('SpaiderWebPeriodSubjects', newOpcionGraphicRenderSelectedPeriodSubjects)
    }, 200)
}
export { renderHighchartGraphic }