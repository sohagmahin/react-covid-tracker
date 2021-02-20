import React, { useState, useEffect } from "react";
import Spreadsheet from "react-spreadsheet";
import Axios from 'axios';

const colmnLabels = [
    "Country", "Cases", "active",
    "tests", "critical", "death",
    "recovered", "today case", "today deaths",
    "today recovered"
];

const Sheets = () => {

    const [dataCell, setdataCell] = useState("");

    // const data = [
    //     [{ value: "Flavors" }, { value: "heool" }, { value: "Hsfafs" }],
    //     [{ value: "Flavors" }, { value: "heool" }, { value: "Hsfafs" }],
    //     [{ value: "Flavors" }, { value: "heool" }, { value: "Hsfafs" }],
    // ];

    useEffect(() => {
        Axios.get("https://corona.lmao.ninja/v2/countries").then(response => {
            var coutries = [];
            for (let i = 0; i < response.data.length; i++) {
                const data = response.data[i];
                let tempList = [
                    { "value": data.country },
                    { "value": data.cases },
                    { "value": data.active },
                    { "value": data.tests },
                    { "value": data.critical },
                    { "value": data.deaths },
                    { "value": data.recovered },
                    { "value": data.todayCases },
                    { "value": data.todayDeaths },
                    { "value": data.todayRecovered },
                ];
                coutries[i] = tempList;
                console.log(data);
            }
            setdataCell(coutries);
            // console.log(coutries);
            // console.log(response.data);
        });
    }, [0]);

    return (
        <Spreadsheet data={dataCell} columnLabels={colmnLabels} />
    );
}

export default Sheets;