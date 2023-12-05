import React from 'react'
import './CustomerReview.css'
import Chart from 'react-apexcharts'
const CustomerReview = () => {

    const data = {
        series: [
            {
                name: "Review",
                data: [10, 50, 30, 90, 40, 120, 100],
            }
        ],
        options: {
            chart: {
                type: 'area',
                height: "auto",
            },
            // dropShadow: {
            //     enabled: false,
            //     enabledSeries: undefined,
            //     top: 0,
            //     left: 0,
            //     blur: 3,
            //     color: "#000",
            //     opacity: 0.35,
            // },
            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                colors: ["#ff929f"],
                curve: "smooth",
            },
            tooltip: {
                x: {
                    format: "dd/MM/yyyy HH:mm",
                },
            },
            grid: {
                show: true,
            },
            xaxis: {
                type: "datetime",
                categories: [
                    "2023-11-19T00:00:00.000Z",
                    "2023-11-19T01:30:00.000Z",
                    "2023-11-19T02:30:00.000Z",
                    "2023-11-19T03:30:00.000Z",
                    "2023-11-19T04:30:00.000Z",
                    "2023-11-19T05:30:00.000Z",
                    "2023-11-19T06:30:00.000Z",
                ],
            },
            yaxis:{
                show : false
            },
            toolbar:{
                show:false
            }
        },
    };

    return (
        <div className="CustomerReview">
            <Chart series={data.series} options={data.options} type='area' />
        </div>
    )
}

export default CustomerReview