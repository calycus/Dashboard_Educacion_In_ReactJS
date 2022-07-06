import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ApiUrl from '../../../ApiUrl';

export const traerInfo = createSlice({
    name: 'HighchartStoreInfoPrediccionDesercion',
    initialState: {
        array_Info_Estudiantes_En_Riesgo: [],
    },

    reducers: {

        setInfoEstudianteEnRiesgo: (state, action) => {
            state.array_Info_Estudiantes_En_Riesgo = []
            state.array_Info_Estudiantes_En_Riesgo = action.payload
            console.log(state.array_Info_Estudiantes_En_Riesgo)
        },

        setInfoTrayectoriaEstudiantes: (state, action) => {
            state.array_List_Data_Estudiantes_En_Riesgo = []
            state.array_List_Data_Estudiantes_En_Riesgo = action.payload
        },

        setListInscripcionesPerdidas: (state, action) => {
            state.array_List_Data_Estudiantes_En_Riesgo = []
            state.array_List_Data_Estudiantes_En_Riesgo = action.payload
        },


    }
})

export const traerInfoEstudiantesDesertoresAsync = (id_Malla, id_Estudiante) => (dispatch) => {

    axios.get(ApiUrl.Api + '/api/educacion/tasa_desertores/prediccion/data_estudiantes_potenciales_desertores/' +
        id_Estudiante +
        '/' +
        id_Malla,
        {
            headers: {
                Authorization: "Bearer " + ApiUrl.userToken,
            },
        })
        .then(res => {
            dispatch(setInfoEstudianteEnRiesgo(res.data))
        })
}

export const traerInfoTrayectoriaEstudiantesAsync = (id_Malla, id_Estudiante) => (dispatch) => {

    axios.get(ApiUrl.Api + '/api/educacion/tasa_desertores/prediccion/inscripciones_perdidas_potenciales_desertores/' + id_Estudiante, {
        headers: {
            Authorization: "Bearer " + ApiUrl.userToken,
        },
    })
        .then(res => {
            dispatch(setInfoTrayectoriaEstudiantes(res.data.data))
        })
}

export const traerListaInscripcionesPerdidasAsync = (id_Malla, id_Estudiante) => (dispatch) => {

    axios.get(ApiUrl.Api + '/api/educacion/tasa_desertores/prediccion/met_regresion_lineal/listado_potenciales_desertores/' + id_Malla, {
        headers: {
            Authorization: "Bearer " + ApiUrl.userToken,
        },
    })
        .then(res => {
            dispatch(setListInscripcionesPerdidas(res.data.data))
        })
}

export const { setInfoEstudianteEnRiesgo, setInfoTrayectoriaEstudiantes, setListInscripcionesPerdidas } = traerInfo.actions;
export const selectArrayDataEstudiantesEnRiesgo = (state) => state.HighchartStoreInfoPrediccionDesercion.array_Info_Estudiantes_En_Riesgo;

export default traerInfo.reducer;