import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ApiUrl from './ApiUrl';

export const traerFacultades = createSlice({
    name: 'arrayFacultades',
    initialState: {
        value: [],
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
        }
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
            const newArray = res.data.map(el => {
                return {
                    ...el, fac_expandida: false
                }
            })
            dispatch(setFacultades(newArray));
            //console.log("console del store =>", res.data);
        })

}


export const { setFacultades, toggleExpanded } = traerFacultades.actions;
export const selectArrayFacultades = (state) => state.arrayFacultades.value;
export default traerFacultades.reducer;