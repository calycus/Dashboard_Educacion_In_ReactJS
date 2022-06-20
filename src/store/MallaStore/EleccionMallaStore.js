import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ApiUrl from '../ApiUrl';

export const traerFacultades = createSlice({
    name: 'arrayFacultades',
    initialState: {
        value: [],
        id_escuela: parseInt(localStorage.getItem('id_escuela'), 10) || null,
        id_malla: parseInt(localStorage.getItem('id_malla'), 10) || null,
        id_facultad: parseInt(localStorage.getItem('id_facultad'), 10) || null,
        name_facultad: localStorage.getItem('name_facultad') || "",
        name_escuela: localStorage.getItem('name_escuela') || ""
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

        setLocalIdFacultad: (state, action) => {
            state.id_facultad = action.payload;
            localStorage.setItem('id_facultad', action.payload)
        },

        setLocalIdEscuela: (state, action) => {
            state.id_escuela = action.payload;
            localStorage.setItem('id_escuela', action.payload)
        },

        setLocalIdMalla: (state, action) => {
            //console.log("quieres cambiar la malla local = ",state.id_malla, " por ", action.payload )
            state.id_malla = action.payload;
            localStorage.setItem('id_malla', action.payload)
            //console.log("id cambiado a " , state.id_malla);
        },

        /* setLocalNameFacultad: (state, action) => {
            state.name_facultad = action.payload;
            localStorage.setItem('id_escuela', action.payload)
        },*/

        setLocalNameEscuela: (state, action) => {
            let newData = action.payload;
            
            newData.dataMalla.forEach(nameMalla => {
                if (newData.newIdMalla == nameMalla.id) {
                    state.name_escuela = nameMalla.nombre;
                    localStorage.setItem('name_escuela', nameMalla.nombre)
                }
            })
            console.log(state.name_escuela)
            /* state.name_escuela = action.payload;
            localStorage.setItem('name_escuela', action.payload) */
        },
    }
})

export const traerFacultadesAsync = () => (dispatch) => {
    axios.get(ApiUrl.Api + '/api/general/facultades', {
        headers: {
            //Authorization: "Bearer " + this.userToken,
            Authorization: "Bearer " + ApiUrl.userToken
        },
    })
        .then(res => {
            const newArrayFacultades = res.data;
            dispatch(setFacultades(newArrayFacultades));
        })

}


export const { setFacultades, toggleExpanded,
    setLocalIdFacultad, setLocalIdEscuela,
    setLocalIdMalla, setLocalNameEscuela } = traerFacultades.actions;

export const selectArrayFacultades = (state) => state.arrayFacultades.value;
export const selectIdEscuela = (state) => state.arrayFacultades.id_escuela;
export const selectIdMalla = (state) => state.arrayFacultades.id_malla;
export const selectIdFacultad = (state) => state.arrayFacultades.id_facultad;
export const selectNameEscuela = (state) => state.arrayFacultades.name_escuela;

export default traerFacultades.reducer;