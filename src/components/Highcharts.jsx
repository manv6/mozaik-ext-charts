import React, {Component, PropTypes} from 'react';
import HighchartsResults from './HighchartsResults.jsx';

class Highcharts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pieData: [{name: "Firefox", y: 6}, {name: "MSIE", y: 4}, {name: "Safari", y: 4}, {name: "Opera", y: 1}, {name: "Chrome", y: 7}]
        }
    }

    render() {
        return <HighchartsResults data={this.state.pieData}/>
    }
}

export default Highcharts ;