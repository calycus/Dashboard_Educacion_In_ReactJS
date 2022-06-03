import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { selectLineDependienteGeneral } from '../../../store/DashGeneralStore/HighchartStore/HighchartStoreGeneral'


//dependencia
import { useSelector } from 'react-redux'

export default function LineVariableDependiente() {
    const prelineDependiente = useSelector(selectLineDependienteGeneral);
    let newData = {
        chart: {
            renderTo: "container",
            type: "line",
        },
        credits: {
            enabled: false,
        },
        title: {
            text: "",
        },
        colors: ["#63b463", "#d05851"],
        yAxis: {
            title: {
                text: "Incidencia General (%)", // nombre del eje de Y
            },
            plotLines: [
                {
                    color: "#808080",
                },
            ],
        },
        legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
            borderWidth: 1,
        },
        plotOptions: {
            series: {
                states: {
                    hover: {
                        enabled: true,
                    },
                },
            },
        },
        tooltip: {
            positioner: function () {
                return {
                    x: this.chart.plotLeft,
                    y: this.chart.plotTop,
                };
            },
            useHTML: true,
            formatter: function () {
                let body = this.points.reduce(
                    (body, p) =>
                        body +
                        `<span style="color:${p.series.color}">\u25CF ${p.series.name}: </span><small><strong>${p.y}</strong></small><br/>`,
                    ""
                );
                return body;
            },
            shared: true,
            valueDecimals: 2,
            shadow: false,
            borderWidth: 1,
            borderColor: "#63b463",
        },
        xAxis: {
            categories: [],
            crosshair: {
                snap: false,
            },
        },
        series: [
            {
                // configuración de las series
                name: "Tasa de Retencion",
                data: [],
            },
            {
                name: "Tasa de Deserción",
                data: [],
            },
        ],
    };

    newData.xAxis.categories = prelineDependiente.categories
    newData.series = prelineDependiente.series

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={newData}
        />
    )

}