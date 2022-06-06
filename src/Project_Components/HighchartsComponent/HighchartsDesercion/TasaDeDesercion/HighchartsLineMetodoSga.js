import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { selectLineTasaDeDesercionSGA } from '../../../../store/HighchartStore/DashboardDesercion/TasaDeDesercion/HighchartDesercionGeneral'


//dependencia
import { useSelector } from 'react-redux'

export default function LineDesercionSga() {
    const prelineDesercionSga = useSelector(selectLineTasaDeDesercionSGA);
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
        colors: ["#d05851"],
        yAxis: {
            title: {
                text: "Tasa de Repitencia (%)",
            },
            plotLines: [
                {
                    color: "#808080",
                },
            ],
        },
        legend: {
            enabled: false,
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
                        `<span style="color:${p.series.color
                        }">\u25CF Retención del: </span><small><strong>${parseFloat(
                            p.y * 100
                        ).toFixed(1)}%</strong></small><br/>
                        <span style="color:${p.series.color
                        }">\u25CF Indice: </span><small><strong>${p.y
                        }</strong></small><br/>`,
                    ""
                );
                let body2 = this.points.reduce(
                    (body2, p) => body2 + `<span >${p.x} </span><br/>`,
                    ""
                );
                return body2 + body;
            },
            shared: true,
            valueDecimals: 2,
            shadow: false,
            borderWidth: 1,
            borderColor: "#d05851",
        },
        xAxis: {
            categories: [],
            crosshair: {
                snap: false,
            },
        },
        series: [
            {
                name: "Tasa de Deserción",
                data: [],
            },
        ],
    };

    newData.xAxis.categories = prelineDesercionSga.categories
    newData.series = prelineDesercionSga.series

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={newData}
        />
    )

}