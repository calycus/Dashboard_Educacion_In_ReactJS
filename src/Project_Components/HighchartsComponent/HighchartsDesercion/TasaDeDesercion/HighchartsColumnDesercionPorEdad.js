import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { selectColumnDesercionPorEdad } from '../../../../store/HighchartStore/DashboardDesercion/TasaDeDesercion/HighchartDesercionGenerosEdadEmbarazo'


//dependencia
import { useSelector } from 'react-redux'

export default function ColumnDesercionPorEdad() {
    const preColumnDesercionPorEdad = useSelector(selectColumnDesercionPorEdad);
    let newData = {
        chart: {
            type: "column",
        },
        title: {
            text: "",
        },
        credits: { enabled: false },
        accessibility: {
            announceNewData: {
                enabled: true,
            },
        },
        xAxis: {
            type: "category",
        },
        yAxis: {
            title: {
                text: "",
            },
        },
        legend: {
            enabled: false,
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: "{point.y} Estudiantes",
                },
            },
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px"></span><br>',
            pointFormat:
                "<b>{point.name}</b> <br/>" +
                '<span style="color:{point.color}">Estudiantes Desertores</span>: {point.y} <br/>',
        },

        series: [
            {
                name: "Desercion Por Rango De Edad",
                colorByPoint: true,
                data: [],
            },
        ],
    };

    newData.series = preColumnDesercionPorEdad.series

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={newData}
        />
    )

}