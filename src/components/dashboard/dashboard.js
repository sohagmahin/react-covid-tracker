import React from 'react';
import './dashboard.css';
import DoughnutChart from './doughnut_chart/doughnut_chart';
import Sheets from './sheets/sheets';

class DashBoard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <div className="dashboard__charts">
                    <div className="charts__doughnut">
                        <DoughnutChart />
                    </div>
                    <div className="charts__line">
                        Line chart
                </div>

                </div>
                <div className="dashboard__dataSheet">
                    <Sheets />
                </div>
            </div>
        );
    }
}
export default DashBoard;