import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ApiUrl from './ApiUrl';

export const traerFacultades = createSlice({
    name: 'arrayFacultades',
    initialState: {
        value: [],
        id_escuela: parseInt(localStorage.getItem('id_escuela'), 10) || null,
        id_malla: parseInt(localStorage.getItem('id_malla'), 10) || null,
        id_facultad: parseInt(localStorage.getItem('id_facultad'), 10) || null,
        name_facultad: localStorage.getItem('name_facultad')  || "" ,
        name_escuela: localStorage.getItem('name_escuela')  || "" 
    },

    reducers: {
        setFacultades: (state, action) => {
            state.value = action.payload;
        },

        toggleExpanded: (state, action) => {
            const index = action.payload;

            if (state.value.length > index && index >= 0 && state.value.length > 0) {
                //state.value[index].fac_expandida = !state.value[index].fac_expandida
                state.value.forEach((element, i) => {
                    if (i == index) {
                        state.value[index].fac_expandida = !state.value[index].fac_expandida
                    } else {
                        state.value[i].fac_expandida = false;
                    }
                })
            }
        },

        setLocalIdEscuela: (state, action) => {
            state.id_escuela = action.payload;
            localStorage.setItem('id_escuela', action.payload)
        },

        setLocalIdMalla: (state, action) => {
            state.id_malla = action.payload;
            localStorage.setItem('id_malla', action.payload)
        },

        setLocalIdFacultad: (state, action) => {
            state.id_facultad = action.payload;
            localStorage.setItem('id_facultad', action.payload)
        },

        /* setLocalNameFacultad: (state, action) => {
            state.name_facultad = action.payload;
            localStorage.setItem('id_escuela', action.payload)
        },

        setLocalIdEscuela: (state, action) => {
            state.name_escuela = action.payload;
            localStorage.setItem('id_escuela', action.payload)
        }, */
    }
})

export const traerFacultadesAsync = () => (dispatch) => {
    axios.get(ApiUrl.Api + '/api/general/facultades', {
        headers: {
            //Authorization: "Bearer " + this.userToken,
            Authorization: "Bearer " + "6fa09fb132a94120f385423a72b5a9d84930ed2d887b0beaf67d52f9f7cff603"
        },
    })
        .then(res => {
            const newArrayFacultades = res.data;
            /* const newArray = res.data.map(el => {
                return {
                    ...el, fac_expandida: false
                }
            }) */
            dispatch(setFacultades(newArrayFacultades));
            //console.log("console del store =>", res.data);
        })

}


export const { setFacultades, toggleExpanded, setLocalIdEscuela } = traerFacultades.actions;

export const selectArrayFacultades = (state) => state.arrayFacultades.value;
export const selectIdEscuela = (state) => state.arrayFacultades.id_escuela;
export const selectIdMalla = (state) => state.arrayFacultades.id_malla;
export const selectIdFacultad = (state) => state.arrayFacultades.id_facultad;

export default traerFacultades.reducer;