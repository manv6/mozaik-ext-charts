import React, {Component, PropTypes} from 'react';
import ReactHighcharts from 'react-highcharts';


var config = {
    chart: {
        type: 'pie'
    },
    title: 'Browser Market sahre',
    yAxis: {
        title: {
            text: 'Total percent market share'
        }
    },
    plotOptions: {
        pie: {
            shadow: false
        }
    }
}

class HighchartsResults extends Component {

    constructor(props) {
        super(props);
        this.chart = undefined;
    }

    componentDidMount() {
        this.chart = this.refs.chart.getChart();

        this.chart.config = {
            chart: {
                type: 'pie'
            }
            ,
            title: 'Browser Market sahre',
            yAxis: {
                title: {
                    text: 'Total percent market share'
                }
            }
            ,
            plotOptions: {
                pie: {
                    shadow: false
                }
            }
            ,
            tooltip: {
                formatter: function () {
                    return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
                }
            }
            ,
            series: [{
                name: 'Browsers',
                data: this.props.data,
                size: '100%',
                innerSize: '85%',
                showInLegend: true,
                dataLabels: {
                    enabled: true
                }
            }]


        }
    }

    componentWillReceiveProps(props) {
        this.chart.series[0].setData(props.data);
    }

    render() {
        return <ReactHighcharts config={config} ref="chart"></ReactHighcharts>;
    }
}

export default  HighchartsResults

