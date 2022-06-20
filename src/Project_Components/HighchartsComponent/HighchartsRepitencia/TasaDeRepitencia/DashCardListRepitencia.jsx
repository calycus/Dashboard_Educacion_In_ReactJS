import React from 'react';
import { useSelector } from 'react-redux';
import MUIDataTable from "mui-datatables";

import { selectNameEscuela } from '../../../../store/MallaStore/EleccionMallaStore';
import { selectArrayMateriasSelectPeriodo } from '../../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaGeneral';
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

let viewRowsTable = [];
let nameEscuela = "";


export default function DataTable() {
    viewRowsTable = useSelector(selectArrayMateriasSelectPeriodo)
    nameEscuela = useSelector(selectNameEscuela);
    
    if(viewRowsTable.length != 0){
        return (
            < MUIDataTable
                title={nameEscuela}
                data={viewRowsTable}
                columns={TableColumns}
                options={TableOptions}
            />
        )
    }
    
}
