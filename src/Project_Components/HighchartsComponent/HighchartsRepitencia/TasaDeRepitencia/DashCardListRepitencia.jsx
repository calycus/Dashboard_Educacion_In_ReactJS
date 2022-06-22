import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

import { selectNameEscuela } from '../../../../store/MallaStore/EleccionMallaStore';
import { selectArrayMateriasSelectPeriodo } from '../../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaGeneral';
import '../../../../css/ListStyle.css'
import { useState } from 'react';
import { ConstructionOutlined } from '@mui/icons-material';

/* const TableColumns = [
    { name: 'materia', label: 'Materia' },
    { name: 'nivel', label: 'Nivel' },
    { name: 'cantidad_perdidas', label: 'Reprobados' },
    { name: 'porcentaje_incidencia', label: '% INCIDENCIA' },
]; */

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
    const [chexData, sendChexData] = useState({ select: [] })
    const [contador, setContador] = useState(0)

    const handleSelects = (data) => {
        let newData = data;
        const { select } = chexData;

        select.push(newData);
        sendChexData({ ...chexData, select });
        console.log("hola")
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
                        /* <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell ><Checkbox color="success" disabled={isDisabled()} onClick={() => handleSelects(row)} onChange={handleChexControl} /></TableCell>
                            <TableCell >{row.materia}</TableCell>
                            <TableCell align="center" >{row.nivel}</TableCell>
                            <TableCell align="center" >{row.cantidad_perdidas}</TableCell>
                            <TableCell align="center" >{row.porcentaje_incidencia}</TableCell>
                        </TableRow> */
                        <Fila key={row.id} row={row} handleSelects={handleSelects} handleChexControl={handleChexControl} contador={contador} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

const Fila = ({ row, handleSelects, handleChexControl, contador }) => {
    const [checked, setChecked] = useState(false)

    const isDisabled = () => {
        if (!checked && contador == 2) {
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
                <Checkbox color="success" checked={checked} disabled={isDisabled(checked)} onClick={() => handleSelects(row)} onChange={(e) => {
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
