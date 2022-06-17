import React from 'react';
import { useSelector } from 'react-redux';
import MUIDataTable from "mui-datatables";
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';

import { selectArrayMateriasRepitencia } from '../../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaGeneral';
import { selectArrayAbreviaturasPeriodoRepitencia } from '../../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaGeneral';
import { selectNameEscuela } from '../../../../store/MallaStore/EleccionMallaStore';

import '../../../../css/ListStyle.css'

const TableColumns = [
    { name: 'materia', label: 'Materia' },
    { name: 'nivel', label: 'Nivel' },
    { name: 'cantidad_perdidas', label: 'Reprobados' },
    { name: 'porcentaje_incidencia', label: '% INCIDENCIA' },
];

const TableOptions = {
    filter: false,
    print: false,
    download: false,
    viewColumns: false,
    rowsPerPageOptions: [],
    rowsPerPage: 6,
    customToolbarSelect: () => (
        <div>

        </div>
    ),
    textLabels: {
        selectedRows: {
            text: "fila(s) Selecciona(s)",
            deleteAria: "Delete Selected Rows",
        },
    }
};

export default function DataTable() {
    let ArrayMaterias = null;
    let ArrayAbrebiaturasMaterias = null;
    const nameEscuela = useSelector(selectNameEscuela);
    ArrayMaterias = useSelector(selectArrayMateriasRepitencia);
    ArrayAbrebiaturasMaterias = useSelector(selectArrayAbreviaturasPeriodoRepitencia);

    console.log(ArrayMaterias)
    if (ArrayMaterias.length == 0) {
        return
    } else {
        return (
            <div>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                >   
                {/* {ArrayAbrebiaturasMaterias.map(abreviatura => {
                    <FormControlLabel value={abreviatura.id} control={<Radio />} label={abreviatura.abreviatura} />
                })} */}
                </RadioGroup>
                {/*  <MUIDataTable
                    title={nameEscuela}
                    data={ArrayMaterias[0]}
                    columns={TableColumns}
                    options={TableOptions}
                /> */}
            </div>
        );
    }
}