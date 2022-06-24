import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ApiUrl from '../../../ApiUrl';

export const traerInfo = createSlice({
    name: 'HighchartRepitenciaColumnTop',
    initialState: {
        array_Top_Materias_Mayor_Incidencia: [],
        antepenultimo_Periodo: "",
        penultimo_Periodo: "",
        arrayColumnasGraficoComparativo: [],
        series_0: [],
        series_1: []
    },

    reducers: {
        setTopMateriasMayorIncidencia: (state, action) => {
            //Limpiado de variables del Grafico conparativo
            state.series_0 = [];
            state.series_1 = [];

            let data = action.payload;

            let antepenultimoPeriodo = data.antepenultimo_periodo;
            let antepenultimoPeriodoAbreviatura = data.antepenultimo_periodo.abreviatura;

            let penultimoPeriodo = data.penultimo_periodo;
            let penultimoPeriodoAbreviatura = data.penultimo_periodo.abreviatura;

            state.antepenultimo_Periodo = antepenultimoPeriodoAbreviatura;
            state.penultimo_Periodo = penultimoPeriodoAbreviatura;
            state.arrayColumnasGraficoComparativo = data.array_materias_mayor_incidencia;

            //el series[0] es el antepenultimo periodo
            state.arrayColumnasGraficoComparativo[antepenultimoPeriodo.id].forEach(
                (elementoColumna) => {
                    /* console.log(antepenultimoPeriodoAbreviatura); */
                    state.series_0.push(
                        {
                            abreviatura: antepenultimoPeriodoAbreviatura,
                            name: elementoColumna.materia,
                            label: elementoColumna.materia,
                            y: parseFloat(elementoColumna.porcentaje_incidencia),
                        }
                    );
                }
            );
            //el series[1] es el penultimo periodo
            state.arrayColumnasGraficoComparativo[penultimoPeriodo.id].forEach(
                (elementoColumna) => {
                    state.series_1.push(
                        {
                            abreviatura: penultimoPeriodoAbreviatura,
                            name: elementoColumna.materia,
                            label: elementoColumna.materia,
                            y: parseFloat(elementoColumna.porcentaje_incidencia),
                        }
                    );
                }
            );
        }
    }
})

export const traerInfoRepitenciaColumnTopAsync = (id_Malla) => (dispatch) => {
    axios.get(ApiUrl.Api + '/api/educacion/tasa_repitencia/principal/comparacion_periodos/' + id_Malla, {
        headers: {
            Authorization: "Bearer " + ApiUrl.userToken,
        },
    })
        .then(res => {
            dispatch(setTopMateriasMayorIncidencia(res.data.data))
        })
}


export const { setTopMateriasMayorIncidencia } = traerInfo.actions;

export const selectTopMateriasSeries_0 = (state) => state.HighchartRepitenciaColumnTop.series_0;
export const selectTopMateriasSeries_1 = (state) => state.HighchartRepitenciaColumnTop.series_1;

export default traerInfo.reducer;