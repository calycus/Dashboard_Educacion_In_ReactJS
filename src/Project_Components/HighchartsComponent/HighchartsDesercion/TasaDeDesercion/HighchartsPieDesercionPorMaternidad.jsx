import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { selectPieDesercionPorMaternidad } from '../../../../store/HighchartStore/DashboardDesercion/TasaDeDesercion/HighchartDesercionGenerosEdadEmbarazo'


//dependencia
import { useSelector } from 'react-redux'

export default function PieDesercionPorMaternidad() {
    const prePieDesercionPorMaternidad = useSelector(selectPieDesercionPorMaternidad);
    let newData = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: "pie",
        },
        title: {
            text: "",
        },
        credits: { enabled: false },
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat:
                '<span style="color:{point.color}">Incidencia</span>: <b>{point.percentage:.1f}%</b> <br/>' +
                '<span style="color:{point.color}">Embarazadas {point.name}</span>: {point.y} <br/>',
        },
        accessibility: {
            point: {
                valueSuffix: "%",
            },
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: "pointer",
                dataLabels: {
                    enabled: false,
                },
                showInLegend: true,
            },
        },
        series: [
            {
                name: "Desercion Por Maternidad",
                colorByPoint: true,
                data: [],
            },
        ],
    };

    newData.series = prePieDesercionPorMaternidad.series

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={newData}
        />
    )

}