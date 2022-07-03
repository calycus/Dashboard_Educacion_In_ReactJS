import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Typography, TextField } from '@mui/material';
import Highcharts from "highcharts";
import HcMore from "highcharts/highcharts-more";

//Dependencias
import { selectArrayListMateriasRepitencia, setArrayIncidenciaDeMateriasPorDocente } from '../../../../store/HighchartStore/DashboardRepitencia/RepitenciaPorMateria/ListTableStoreRepitenciaPorMateria';
import { traerIncidenciaDeMateriaAtravezDeLosPeriodosRepitencia } from '../../../../store/HighchartStore/DashboardRepitencia/RepitenciaPorMateria/HighchartStoreRepitenciaPorMateria';
import { selectIdMalla } from '../../../../store/MallaStore/EleccionMallaStore';
import '../../../../css/ListTableStyle.css'


HcMore(Highcharts);

let viewRowsTable = [];
let idMalla = null

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
    idMalla = useSelector(selectIdMalla)

    const dispatch = useDispatch();
    const [RowsTable, setRows] = useState([])
    const [Search, setSearch] = useState(false)
    const [checked, setChecked] = useState(-1);

    const handleSelects = (data) => {
        dispatch(traerIncidenciaDeMateriaAtravezDeLosPeriodosRepitencia(idMalla, data.id_materia))
        dispatch(setArrayIncidenciaDeMateriasPorDocente(data.id_materia))
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

    const isDisabled = (data) => {
        setChecked(data);
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
                            <TableRow
                                style={{ display: 'grid', gridTemplateColumns: '3rem auto 5rem 7rem 8rem', alignItems: 'center' }}
                                key={index}
                            >
                                <TableCell className='rowTable' style={{ textAlign: 'center' }}>
                                    <Checkbox
                                        color="success"
                                        checked={checked == index}
                                        onChange={(e) => isDisabled(e.target.value)}
                                        onClick={() => handleSelects(row)}
                                        value={index}
                                    />
                                </TableCell>
                                <TableCell className='rowTableMateria' >{row.materia}</TableCell>
                                <TableCell className='rowTable' >{row.nivel}</TableCell>
                            </TableRow>
                        ))
                        : RowsTable.map((row, index) => (
                            <TableRow
                                style={{ display: 'grid', gridTemplateColumns: '3rem auto 5rem 7rem 8rem', alignItems: 'center' }}
                                key={index}
                            >
                                <TableCell className='rowTable' style={{ textAlign: 'center' }}>
                                    <Checkbox
                                        color="success"
                                        checked={checked == index}
                                        onChange={(e) => isDisabled(e.target.value)}
                                        onClick={() => handleSelects(row)}
                                        value={index}
                                    />
                                </TableCell>
                                <TableCell className='rowTableMateria' >{row.materia}</TableCell>
                                <TableCell className='rowTable' >{row.nivel}</TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

/* const Fila = ({ row, handleSelects, handleChange, index, selectedValue }) => {
    return (
        <TableRow
            style={{ display: 'grid', gridTemplateColumns: '3rem auto 5rem 7rem 8rem', alignItems: 'center' }}
        >
            <TableCell className='rowTable' style={{ textAlign: 'center' }}>
                <Checkbox
                    color="success"
                    checked={selectedValue == index}
                    onChange={(e) => handleChange(e.target.value)}
                    onClick={() => handleSelects(row)}
                    value={index}
                />
            </TableCell>
            <TableCell className='rowTableMateria' >{row.materia}</TableCell>
            <TableCell className='rowTable' >{row.nivel}</TableCell>
        </TableRow>
    )
} */

/* export default function SubjectDataTable() {
    viewRowsTable = useSelector(selectArrayListMateriasRepitencia)


    const [RowsTable, setRows] = useState([])
    const [Search, setSearch] = useState(false)
    const [selectedValue, setSelectedValue] = useState(-1);

    const handleChange = (data) => {
        setSelectedValue(data);
        console.log(data);
    };
    const handleSelects = (data) => {
        console.log(data)
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
                                index={index}
                                row={row}
                                handleSelects={handleSelects}
                                handleChange={handleChange}
                            />
                        ))
                        : RowsTable.map((row, index) => (
                            <Fila
                                key={index}
                                row={row}
                                selectedValue={selectedValue}
                                handleSelects={handleSelects}
                                handleChange={handleChange}
                            />
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const Fila = ({ row, handleSelects, handleChange, index, selectedValue }) => {
    return (
        <TableRow
            style={{ display: 'grid', gridTemplateColumns: '3rem auto 5rem 7rem 8rem', alignItems: 'center' }}
        >
            <TableCell className='rowTable' style={{ textAlign: 'center' }}>
                <Checkbox
                    color="success"
                    checked={selectedValue == index}
                    onChange={(e) => handleChange(e.target.value)}
                    onClick={() => handleSelects(row)}
                    value={index}
                />
            </TableCell>
            <TableCell className='rowTableMateria' >{row.materia}</TableCell>
            <TableCell className='rowTable' >{row.nivel}</TableCell>
        </TableRow>
    )
} */