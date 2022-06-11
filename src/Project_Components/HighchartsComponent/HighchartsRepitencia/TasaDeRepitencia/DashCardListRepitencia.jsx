import React from 'react';
import { selectArrayMateriasRepitencia } from '../../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaGeneral';
import { useSelector } from 'react-redux';
import MUIDataTable from "mui-datatables";
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
    const nameEscuela = useSelector(selectNameEscuela);
    ArrayMaterias = useSelector(selectArrayMateriasRepitencia);
    /* const ArrayMaterias = [
        { id: 337, materia: 'PROGRAMACION I', nivel: 1, cantidad_perdidas: 82, porcentaje_incidencia: '10.07' },
        { id: 336, materia: 'INVESTIGACION FORMATIVA FORMATIVA FORMATIVA', nivel: 1, cantidad_perdidas: 79, porcentaje_incidencia: '9.71' },
        { id: 5, materia: 'ELECTROTECNIA', nivel: 1, cantidad_perdidas: 65, porcentaje_incidencia: '7.99' },
        { id: 338, materia: 'SOCIOLOGIA FORMATIVA FORMATIVA FORMATIVA', nivel: 1, cantidad_perdidas: 61, porcentaje_incidencia: '7.49' },
        { id: 753, materia: 'FILOSOFIA FORMATIVA FORMATIVA FORMATIVA', nivel: 1, cantidad_perdidas: 61, porcentaje_incidencia: '7.49' },
        { id: 335, materia: 'MATEMATICAS BASICAS II', nivel: 1, cantidad_perdidas: 57, porcentaje_incidencia: '7.00' }
    ] */


    if (ArrayMaterias.length == 0) {
        return
    } else {
        return (
            <MUIDataTable
                title={nameEscuela}
                data={ArrayMaterias[0]}
                columns={TableColumns}
                options={TableOptions}
            />
        );
    }
}