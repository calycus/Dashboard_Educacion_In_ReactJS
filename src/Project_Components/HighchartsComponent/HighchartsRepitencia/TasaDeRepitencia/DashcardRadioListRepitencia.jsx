
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Radio, RadioGroup, FormControlLabel } from '@mui/material';

import {
    selectArrayMateriasRepitencia,
    selectArrayAbreviaturasPeriodoRepitencia,
    setArrayMateriasSelectPeriodo
} from '../../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaGeneral';


export default function CardTable() {
    
    let ArrayMaterias = [];
    let ArrayAbrebiaturasMaterias = [];
    let viewRowsTable = [];

    const dispatch = useDispatch();
    ArrayMaterias = useSelector(selectArrayMateriasRepitencia);
    ArrayAbrebiaturasMaterias = useSelector(selectArrayAbreviaturasPeriodoRepitencia);

    function SubjectsToShow(id_periodo) {
        // Me llega el id_periodo de la propiedad value="abreviatura.id"
        // Se necesita obtener el index del id_periodo correspondiente al key value de ArrayMaterias
        let indexArray = null;
        // Se recorre el valorSelectorPeriodos con el foreach para encontrar su index donde corresponda a nuestro id periodo de interes
        ArrayAbrebiaturasMaterias.map((element, index) => {
            if (id_periodo == element.id) {
                indexArray = index;
            }
        });

        // Se vacia la variables de rows que tiene setteada la tabla para cargar los datos nuevos
        viewRowsTable = [];
        // Al tener el indexArray correcto podemos obtener de ArrayMaterias[indexArray]
        // los datos de materias que nos interesa mostrar en la tabla con viewRowsTable
        ArrayMaterias[indexArray].map(datosPeriodo => {
            viewRowsTable.push(datosPeriodo);
        });

        dispatch(setArrayMateriasSelectPeriodo(viewRowsTable))

    }

    if (ArrayMaterias.length != 0 && ArrayAbrebiaturasMaterias.length != 0) {
        return (
            <div>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    defaultValue={0}
                    onChange={e => SubjectsToShow(e.target.value)}
                >
                    {ArrayAbrebiaturasMaterias.map(abreviatura =>
                        <FormControlLabel key={abreviatura.id} value={abreviatura.id} control={<Radio />} label={abreviatura.abreviatura} />
                    )}
                </RadioGroup>
            </div>
        );
    } else {
        return
    }
}