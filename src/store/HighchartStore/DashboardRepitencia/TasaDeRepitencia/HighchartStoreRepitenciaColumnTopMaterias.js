import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import ApiUrl from '../../../ApiUrl';
import Highcharts from "highcharts";

export const traerInfo = createSlice({
    name: 'HighchartRepitenciaColumnTop',
    initialState: {
        array_Top_Materias_Mayor_Incidencia: [],
        antepenultimo_Periodo: "",
        penultimo_Periodo: "",
        arrayColumnasGraficoComparativo: [],
        series: [{
            color: "#00aae4",
            pointPlacement: -0.2,
            linkedTo: "main",
            data: [],
        },
        {
            id: "main",
            dataSorting: {
                enabled: true,
                matchByName: true,
            },
            dataLabels: [
                {
                    enabled: true,
                    inside: true,
                    style: {
                        fontSize: "16px",
                    },
                },
            ],
            data: [],
        },],
    },

    reducers: {
        setTopMateriasMayorIncidencia: (state, action) => {
            //Limpiado de variables del Grafico conparativo
            state.series[0].data = [];
            state.series[1].data = [];

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
                    state.series[0].data.push(
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
                    state.series[1].data.push(
                        {
                            abreviatura: penultimoPeriodoAbreviatura,
                            name: elementoColumna.materia,
                            label: elementoColumna.materia,
                            y: parseFloat(elementoColumna.porcentaje_incidencia),
                        }
                    );
                }
            );

            Highcharts.chart('HighchartTopMaterias', {
                chart: {
                    type: "column",
                },
                credits: { enabled: false },
                title: {
                    text: "",
                    floating: true,
                    align: "left",
                },
                colors: ["#d14a2c"],
                tooltip: {
                    shared: true,
                    headerFormat:
                        '<span style="font-size: 15px">{point.point.name}</span><br/>' +
                        '<tr><td style="padding:0">Incidencias:</td></tr><br/> ',
                    pointFormat:
                        '<span style="color:{point.color}">\u25CF</span> <b>{point.abreviatura}: => </b><b>{point.y}%</b><br/>',

                },
                legend: {
                    enabled: false,
                    layout: "vertical",
                    align: "right",
                    verticalAlign: "middle",
                },
                plotOptions: {
                    series: {
                        grouping: false,
                        borderWidth: 0,
                    },
                },

                xAxis: {
                    type: "category",
                },
                yAxis: [
                    {
                        title: {
                            text: "%",
                        },
                        plotOptions: {
                            series: {
                                grouping: false,
                                borderWidth: 0,
                            },
                        },

                        tooltip: {
                            shared: true,
                            headerFormat:
                                '<span style="font-size: 15px">{point.point.name}</span><br/>',
                            pointFormat:
                                '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y} %</b><br/>',
                        },

                        showFirstLabel: false,
                    },
                ],
                series: state.series,
            })
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

export const selectTopMateriasSeries = (state) => state.HighchartRepitenciaColumnTop.series;


export default traerInfo.reducer;