import React from 'react'
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import HcMore from "highcharts/highcharts-more";
import { useSelector } from 'react-redux';
import { selectTopMateriasSeries_0, selectTopMateriasSeries_1 } from "../../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaColumnTopMaterias"

HcMore(Highcharts);
let columMaterias = {
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
        /* + '<tr><td style="padding:0">Estudiantes:</td><td style="padding:0"><b></b></td></tr>' */
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
    series: [
        {
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
        },
    ],
}

const TopMateriasMayorIncidencia = () => {
    const columnSerie_0 = useSelector(selectTopMateriasSeries_0);
    const columnSerie_1 = useSelector(selectTopMateriasSeries_1);

    columMaterias.series[0].data = []
    columMaterias.series[1].data = []

    columMaterias.series[0].data = columnSerie_0
    columMaterias.series[1].data = columnSerie_1

    if (columMaterias.series[0].data.length != 0) {
        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={columMaterias}
            />
        )
    }
}

export default TopMateriasMayorIncidencia