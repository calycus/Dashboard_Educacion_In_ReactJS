import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Typography, InputBase, IconButton, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import Highcharts from "highcharts";
import HcMore from "highcharts/highcharts-more";
import MUIDataTable from "mui-datatables";

//Dependencias
import { selectArrayListMateriasRepitencia } from '../../../../store/HighchartStore/DashboardRepitencia/RepitenciaPorMateria/ListTableStoreRepitenciaPorMateria';
import '../../../../css/ListTableStyle.css'


HcMore(Highcharts);

let viewRowsTable = [];

/* const TableColumns = [
    { name: 'materia', label: 'Materia' },
    { name: 'nivel', label: 'Nivel' }
];
const TableOptions = {
    filter: false,
    print: false,
    download: false,
    viewColumns: false,
    pagination: false,
    selectableRowsHeader: false,
    customToolbarSelect: () => (
        <div>
        </div>
    ),
    textLabels: {
        selectedRows: {
            text: "fila(s) Selecciona(s)",
            deleteAria: "Delete Selected Rows",
        },
    },
    onRowSelectionChange: (currentRowsSelected, allRowsSelected, rowsSelected) => {
        //console.log(allRowsSelected)
        let index = 0
        if (allRowsSelected.length > 0) {
            allRowsSelected.pop()
        }
        index = currentRowsSelected[0].index
        console.log(viewRowsTable[index])
    }
}; */

export default function SubjectDataTable() {
    viewRowsTable = useSelector(selectArrayListMateriasRepitencia)

    const [chexData, sendChexData] = useState([])
    const [contador, setContador] = useState(0)

    const [RowsTable, setRows] = useState([])
    const [Search, setSearch] = useState(false)

    const handleSelects = (data, checkedControl) => {
        console.log(checkedControl)
        console.log(chexData)
        sendChexData(data);

        /* if (!checkedControl) {
            newArray = chexData.filter((item) => item.id !== data.id);
            sendChexData(newArray);
            if (newArray.length >= 1) {
                cont = newArray.length
            }
            return
        }
        chexData.push(data);
        sendChexData(chexData);

        if (chexData.length >= 1) {
            cont = chexData.length
        } */
    }

    const handleChexControl = (checked) => {
        if (checked) {

            setContador(contador + 1)
        } else {

            setContador(contador - 1)
        }
    }

    const requestSearch = (searchedVal) => {
        if (searchedVal.length == 0) {
            setSearch(false)
            return
        }
        const filteredRows = viewRowsTable.filter((row) => {
            return row.materia.toLowerCase().includes(searchedVal.toLowerCase());
        });
        setRows(filteredRows)
        setSearch(true)
    };

    return (
        <TableContainer component={Paper}>
            <Box sx={{ display: 'flex', alignItems: "flex-end" }}>
                <Typography
                    className='TableTitleRepitenciaPorMateria'
                    component="div"
                >
                    TABLA DE MATERIAS CON REPITENCIA
                </Typography>
                <TextField
                    sx={{ display: 'flex', width: 400 }}
                    id="standard-basic"
                    label="Search"
                    variant="standard"
                    onChange={(e) => requestSearch(e.target.value)} />
            </Box>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead style={{ display: "flex" }}>
                    <TableRow
                        style={{ width: '100%', display: 'grid', gridTemplateColumns: '3rem auto 5rem 7rem 9rem' }}>
                        <TableCell style={{ content: " " }}></TableCell>
                        <TableCell className='rowTableMateria'>Materia</TableCell>
                        <TableCell className='rowTable' >Nivel</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody style={{ display: 'flex', flexDirection: 'column', overflow: 'auto', maxHeight: '350px' }}>
                    {!Search ?
                        viewRowsTable.map((row, index) => (
                            <Fila
                                key={index}
                                row={row}
                                handleSelects={handleSelects}
                                handleChexControl={handleChexControl}
                                contador={contador} />
                        ))
                        : RowsTable.map((row, index) => (
                            <Fila
                                key={index}
                                row={row}
                                handleSelects={handleSelects}
                                handleChexControl={handleChexControl}
                                contador={contador} />
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )

    /* return (
        < MUIDataTable
            title="TABLA DE MATERIAS CON REPITENCIA"
            data={viewRowsTable}
            columns={TableColumns}
            options={TableOptions}
            onChange={(e) => console.log(e.target.value)}
        />
    ) */
}

const Fila = ({ row, handleSelects, handleChexControl, contador }) => {
    const [checked, setChecked] = useState(false)

    const isDisabled = () => {
        if (!checked && contador == 1) {
            return true
        } else {
            return false
        }
    }

    return (
        <TableRow
            style={{ display: 'grid', gridTemplateColumns: '3rem auto 5rem 7rem 8rem', alignItems: 'center' }}
        >
            <TableCell className='rowTable' style={{ textAlign: 'center' }}>
                <Checkbox
                    color="success"
                    checked={checked}
                    disabled={isDisabled(checked)}
                    onClick={() => handleSelects(row, !checked)}
                    onChange={(e) => {
                        handleChexControl(e.target.checked)
                        setChecked(e.target.checked)
                    }} />
            </TableCell>
            <TableCell className='rowTableMateria' >{row.materia}</TableCell>
            <TableCell className='rowTable' >{row.nivel}</TableCell>
        </TableRow>
    )
}
