import { createSlice } from "@reduxjs/toolkit";

export const traerInfo = createSlice({
    name: 'HighchartRepitenciaSpaiderWeb',
    initialState: {
        array_Materias_Seleccionadas: [],
    },

    reducers: {        
        setArraySelectMaterias: (state, action) => {
            console.log("estamos en el store",action.payload)
            state.array_Materias_Seleccionadas = []
            state.array_Materias_Seleccionadas = action.payload
        }
    }
})


export const { setArraySelectMaterias } = traerInfo.actions;

export const selectArrayMateriasSpiderWeb = (state) => state.HighchartRepitencia.array_Materias_Seleccionadas;

export default traerInfo.reducer;