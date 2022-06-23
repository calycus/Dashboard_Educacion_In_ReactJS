import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';

import { selectNameEscuela } from '../../../../store/MallaStore/EleccionMallaStore';
import { selectArrayMateriasSelectPeriodo } from '../../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaGeneral';
import { setArraySelectMaterias } from '../../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaSpaiderWeb';

import '../../../../css/ListStyle.css'
import { ConstructionOutlined } from '@mui/icons-material';


/* let viewRow = [];

const TableOptions = {
    filter: false,
    print: false,
    download: false,
    viewColumns: false,
    rowsPerPageOptions: [],
    rowsPerPage: 6,
    selectableRowsHeader: false,
    customToolbarSelect: () => (
        <div></div>
    ),
    textLabels: {
        selectedRows: {
            text: "fila(s) Selecciona(s)",
            deleteAria: "Delete Selected Rows",
        },
    },
    onRowSelectionChange: (currentRowsSelected, rowsSelected) => {
        if (rowsSelected.length > 2) {
            console.log(rowsSelected)
            console.log(currentRowsSelected)

            rowsSelected.pop()
            //currentRowsSelected.splice(0,2)
        }
    },
}; */

let viewRowsTable = [];
let nameEscuela = "";
let index = null;
const dataList = [
    {
        id: 337,
        materia: "PROGRAMACION I",
        nivel: 1,
        cantidad_perdidas: 82,
        porcentaje_incidencia: "10.07"
    },
    {
        id: 336,
        materia: "INVESTIGACION FORMATIVA FORMATIVA FORMATIVA",
        nivel: 1,
        cantidad_perdidas: 79,
        porcentaje_incidencia: "9.71"
    },
    {
        id: 5,
        materia: "ELECTROTECNIA",
        nivel: 1,
        cantidad_perdidas: 65,
        porcentaje_incidencia: "7.99"
    },
    {
        id: 338,
        materia: "SOCIOLOGIA FORMATIVA FORMATIVA FORMATIVA",
        nivel: 1,
        cantidad_perdidas: 61,
        porcentaje_incidencia: "7.49"
    },
    {
        id: 753,
        materia: "FILOSOFIA FORMATIVA FORMATIVA FORMATIVA",
        nivel: 1,
        cantidad_perdidas: 61,
        porcentaje_incidencia: "7.49"
    },
    {
        id: 335,
        materia: "MATEMATICAS BASICAS II",
        nivel: 1,
        cantidad_perdidas: 57,
        porcentaje_incidencia: "7.00"
    }
];



export default function DataTable() {
    viewRowsTable = useSelector(selectArrayMateriasSelectPeriodo)
    nameEscuela = useSelector(selectNameEscuela);

    const dispatch = useDispatch();
    const [chexData, sendChexData] = useState([])
    const [contador, setContador] = useState(0)

    const handleSelects = (data, checkedControl) => {
        let newArray = [];
        if (!checkedControl) {
            newArray = chexData.filter((item) => item.id !== data.id);
            sendChexData(newArray);

            dispatch(setArraySelectMaterias(newArray))
            return
        }
        chexData.push(data);
        sendChexData(chexData);
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
                    {dataList.map((row, index) => (
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
        if (!checked && contador == 4) {
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
