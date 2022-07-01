import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ApiUrl from '../../../ApiUrl';

export const traerInfo = createSlice({
    name: 'ListTableRepitenciaPorMateria',
    initialState: {
        array_List_Materias_Repitencia: [],
    },

    reducers: {
        setListMateriasRepitencia: (state, action) => {

            let data = action.payload
            let arrayMaterias = [];
            let arrayIdMaterias = [];
            state.array_List_Materias_Repitencia = []

            data.forEach((idMateria, index) => {
                if (idMateria.tot_reprobados != 0) {
                    if (arrayIdMaterias.indexOf(idMateria.idmateria) == -1) {
                        arrayIdMaterias.push(idMateria.idmateria);
                        arrayMaterias.push({
                            id_materia: idMateria.idmateria,
                            materia: idMateria.materia,
                            nivel: idMateria.nivel,
                        });

                    }
                }
            });
            state.array_List_Materias_Repitencia = arrayMaterias

        },
    }
})

export const traerInfoRepitenciaPorMateriasAsync = (id_Malla, id_Periodo) => (dispatch) => {
    axios.get(ApiUrl.Api + '/api/educacion/tasa_repitencia/por_materia/tabla_materias/' + id_Malla + "/" + id_Periodo, {
        headers: {
            Authorization: "Bearer " + ApiUrl.userToken,
        },
    })
        .then(res => {
            dispatch(setListMateriasRepitencia(res.data.data))
        })
}


export const { setListMateriasRepitencia } = traerInfo.actions;
export const selectArrayListMateriasRepitencia = (state) => state.ListTableRepitenciaPorMateria.array_List_Materias_Repitencia;

export default traerInfo.reducer;