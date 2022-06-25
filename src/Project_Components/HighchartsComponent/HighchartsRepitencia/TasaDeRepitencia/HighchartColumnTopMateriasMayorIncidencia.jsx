/* import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HcMore from "highcharts/highcharts-more";
import { useSelector } from 'react-redux';
import { selectTopMateriasSeries_0, selectTopMateriasSeries_1, selectId } from "../../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaColumnTopMaterias"
import { useState } from 'react';
import { useEffect } from 'react';

//HcMore(HighchartsReact.Highcharts);

const TopMateriasMayorIncidencia = () => {
    const [columMaterias, setColumMaterias] = useState(
        {
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
    )

    let data = columMaterias
    let columnSerie_0 = useSelector(selectTopMateriasSeries_0);
    let columnSerie_1 = useSelector(selectTopMateriasSeries_1);

    data.series[0].data = []
    data.series[1].data = []

    data.series[0].data = columnSerie_0
    data.series[1].data = columnSerie_1

    if (columMaterias.series[0].data.length != 0) {

        return (
            <div>
                <button onClick={() => setColumMaterias(data)}>
                    click
                </button>
                <HighchartsReact
                    highcharts={Highcharts}
                    options={columMaterias}
                    oneToOne={true}
                    allowChartUpdate={true}
                />
            </div>
        )
    }
} 

export default TopMateriasMayorIncidencia*/
import React from 'react'
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HcMore from "highcharts/highcharts-more";
import { useSelector } from 'react-redux';
import { selectTopMateriasSeries } from "../../../../store/HighchartStore/DashboardRepitencia/TasaDeRepitencia/HighchartStoreRepitenciaColumnTopMaterias"
import { useState } from 'react';
import { useEffect } from 'react';

//HcMore(Highcharts);


export default function LineVariableDependiente() {
    let preData = useSelector(selectTopMateriasSeries);

    let newData = {
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
        series: [],
    }
    newData.series = []
    newData.series = preData

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={newData}
        />
    )

}