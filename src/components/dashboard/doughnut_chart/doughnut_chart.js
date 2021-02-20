import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import Axios from 'axios';

const DoughnutChart = () => {

    const [casesData, setcasesData] = useState();
    const [continents, setContinents] = useState("");
    const data = {
        labels: continents,
        datasets: [
            {
                label: '# of Votes',
                // data: [12, 19, 3, 5, 2, 3],
                data: casesData,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    }

    useEffect(() => {
        Axios.get("https://corona.lmao.ninja/v2/continents").then(response => {
            var i;
            var dataList = [];
            var continent_temp = [];
            for (i = 0; i < response.data.length; i++) {
                dataList[i] = response.data[i].cases;
                continent_temp[i] = response.data[i].continent;
                // console.log(response.data[i].continent);
            }
            setcasesData(dataList);
            setContinents(continent_temp);
        });
    }, [0]);


    return (<Doughnut data={data} />);
}

export default DoughnutChart;