import React from 'react';
import { selectArrayMateriasRepitencia } from '../../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaGeneral';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import MUIDataTable from "mui-datatables";
import { Icon, Tooltip } from '@mui/material';
import '../../../../css/ListStyle.css'

const TableColumns = [
    { name: 'materia', label: 'Materia' },
    { name: 'nivel', label: 'Nivel', width: 200 },
    { name: 'cantidad_perdidas', label: 'Reprobados' },
    { name: 'porcentaje_incidencia', label: '% INCIDENCIA' },
    /* { field: 'materia', headerName: 'Materia', width: 200, }, */
    /* { field: 'nivel', headerName: 'Nivel', type: 'number', width: 50, }, */
    /* { field: 'cantidad_perdidas', headerName: 'Reprobados', width: 75, }, */
    /* { field: 'porcentaje_incidencia', headerName: '% INCIDENCIA', width: 100, } */
];
const TableOptions = {
    filter: false,
    print: false,
    download: false,
    viewColumns: false,
    rowsPerPageOptions: [],
    rowsPerPage: 6,
    onRowsDelete: false,
    clear:false,
    customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
        <div>
          <Tooltip title={"Delete"} cursor='pointer' className="mr-6">
          {/* <Icon onClick={()=>DeleteRow(selectedRows)}  color="error">delete</Icon> */}
          </Tooltip>
          
          
        </div>
        
        ),
};

export default function DataTable() {
    //const ArrayMaterias = useSelector(selectArrayMateriasRepitencia);
    const ArrayMaterias = [
        { id: 337, materia: 'PROGRAMACION I', nivel: 1, cantidad_perdidas: 82, porcentaje_incidencia: '10.07' },
        { id: 336, materia: 'INVESTIGACION FORMATIVA FORMATIVA FORMATIVA', nivel: 1, cantidad_perdidas: 79, porcentaje_incidencia: '9.71' },
        { id: 5, materia: 'ELECTROTECNIA', nivel: 1, cantidad_perdidas: 65, porcentaje_incidencia: '7.99' },
        { id: 338, materia: 'SOCIOLOGIA FORMATIVA FORMATIVA FORMATIVA', nivel: 1, cantidad_perdidas: 61, porcentaje_incidencia: '7.49' },
        { id: 753, materia: 'FILOSOFIA FORMATIVA FORMATIVA FORMATIVA', nivel: 1, cantidad_perdidas: 61, porcentaje_incidencia: '7.49' },
        { id: 335, materia: 'MATEMATICAS BASICAS II', nivel: 1, cantidad_perdidas: 57, porcentaje_incidencia: '7.00' }
    ]


    if (ArrayMaterias.length == 0) {
        return
    } else {
        return (
            <MUIDataTable
                title={'Covid Data'}
                data={ArrayMaterias}
                columns={TableColumns}
                options={TableOptions}

            />
            /* <DataGrid
                rows={ArrayMaterias}
                columns={TableColumns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                autoHeight={true}
                disableColumnMenu={true}

            /> */
        );
    }
}