import React, {Component, PropTypes} from 'react';
import Mozaik                          from 'mozaik/browser';
const {BarChart}                     = Mozaik.Component;


class BarChartWidget extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let builds = this.props.data;
        var title = this.props.title;
        let barChartOptions = {
            mode: 'stacked',
            xLegend: 'Candidate Fields',
            xLegendPosition: 'right',
            yLegend: 'Performance %',
            yLegendPosition: 'top',
            xPadding: 0.3,
            barClass: function (d) {
                return `result--${ builds }`;
            }
        };

        return (
            <div>
                <div className="widget__header">
                    {title}
                    <span className="widget__header__subject">{title}</span> build histogram
                    <i className="fa fa-bar-chart"/>
                </div>
                <div className="widget__body">
                    <BarChart data={[{data: builds}]} options={barChartOptions}/>
                </div>
            </div>
        );
    }
}


BarChartWidget.propTypes = {
    title: React.PropTypes.string,
    dateFormat: React.PropTypes.string,
    min: React.PropTypes.integer,
    max: React.PropTypes.integer,
    tickCount: React.PropTypes.integer,
    data: React.PropTypes.string.isRequired
};
BarChartWidget.defaultProps = {
    title: 'Bar Chart widget',
    dateFormat: 'YYYY-MM-DD',
    min: null,
    max: null,
    tickCount: null
};

export default  BarChartWidget;