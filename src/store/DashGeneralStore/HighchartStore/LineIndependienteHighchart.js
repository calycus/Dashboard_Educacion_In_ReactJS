import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ApiUrl from '../../ApiUrl';

export const traerInfo = createSlice({
    name: 'LineIndependienteGeneral',
    initialState: {
        value: {
            categories: [],

            series: [
                {
                    // configuración de las series
                    name: "Tasa de Repitencia",
                    data: [],
                }
            ],
        },
    },

    reducers: {
        setInfo: (state, action) => {
            let data = action.payload
            state.value.categories = [];
            state.value.series[0].data = [];
            data.array_periodos_de_interes.forEach(element => {
                state.value.categories.push(
                    element.nombre
                );
            });
            data.array_indices_desercion_to_response.forEach(element => {
                state.value.series[0].data.push(
                    {
                        y: parseFloat(element)
                    }
                );
            });

        },
    }
})

export const traerInfoAsync = (id_Malla) => (dispatch) => {
    axios.get(ApiUrl.Api + '/api/educacion/dash_general/indices/' + id_Malla, {
        headers: {
            Authorization: "Bearer " + ApiUrl.userToken,
        },
    })
        .then(res => {
            console.log(res.data.data)
            dispatch(setInfo(res.data.data))
        })
}


export const { setInfo } = traerInfo.actions;
export const selectLineIndependienteGeneral = (state) => state.LineIndependienteGeneral.value;
export default traerInfo.reducer;