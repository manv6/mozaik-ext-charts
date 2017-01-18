import React, {Component, PropTypes} from 'react';
import classSet from 'react-classset';
import c3 from 'c3';
import _ from 'lodash';
import moment from 'moment';
import Mozaik from 'mozaik/browser';

class TimeseriesChart {

    constructor(bindTo, opts) {
        opts = opts || {};
        this.chart = c3.generate({
            bindto: bindTo,
            transition: {
                // Skipping transition for now
                duration: null
            },
            data: {
                labels: true,
                x: 'x',
                xFormat: '%Y-%m-%d',
                columns: []
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: (x) => {
                            return moment(x).format('ddd D');
                        },
                        count: opts.tickCount
                    }
                },
                y: {
                    min: opts.min,
                    max: opts.max
                }
            }
        });
    }

    load(data) {
        return this.chart.load(data);
    }

    loadEntries(entries) {
        console.log('loadarw')
        var xData = [];
        var totalData = [];
        var lastData = [];
        var weekDayRegions = [];

        if (!entries || entries.length === 0) {
            console.warn('No data provided');
            return;
        }
        console.log(entries);

        entries.forEach((entry) => {
            //
            var entryObj = _.zipObject(['date', 'total', 'last'], entry);
            var date = moment(entry.date, 'YYYYMMDD');

            // Mark Sat and Sun with region
            if (_.contains([6, 7], date.isoWeekday())) {
                var weekDayRegion = {
                    start: date.format('YYYY-MM-DD'),
                    end: date.format('YYYY-MM-DD')
                };
                weekDayRegions.push(weekDayRegion);
            }

            xData.push(date.format('YYYY-MM-DD'));
            totalData.push(parseInt(entry.total, 10));
            lastData.push(parseInt(entry.last, 10));
        });

        return this.load({
            columns: [
                ['x'].concat(xData),
                ['Total'].concat(totalData),
                ['Last execution'].concat(lastData)
            ],
            regions: weekDayRegions
        });
    }
}


class LineChartWidget extends Component {

    constructor(props) {
        super(props);

        this.chartClassName = 'chart';
        this.chart = null;
    }

    componentDidMount() {
        const chartElement = this._chart.getDOMNode();

        this.chart = new TimeseriesChart(chartElement, {
            min: this.props.min,
            max: this.props.max,
            tickCount: this.props.tickCount
            // dateFormat: this.props.dateFormat
        });
        this.chart.loadEntries(this.props.results);
    }


    componentWillUnmount() {
        if (this.chart) {
            this.chart.destroy();
        }
    }

    render() {
        console.log('rendarw');
        const total = this.props.total;
        console.log(total);

        // const avg = Math.floor(total / data.totalResults, -1);
        console.log(this.props.results);


        var title = this.props.title;
        console.log(title);
        // var avg = this.state.avg || '-';
        // var total = this.state.total || '-';
        var setChartRef = (c) => this._chart = c;

        var widget = (
            <div>
                <div className="widget__header">
                    {title}
                    <span className="widget__header__count">
            <span className="label">Total Candidates</span>
            <span className="value">{total}</span>
          </span>
                    <i className="fa fa-line-chart"/>
                </div>
                <div className="widget__body">
                    <div className={this.chartClassName} ref={setChartRef}></div>
                </div>
            </div>
        );

        return widget;
    }

}

LineChartWidget.propTypes = {
    title: React.PropTypes.string,
    min: React.PropTypes.integer,
    max: React.PropTypes.integer,
    tickCount: React.PropTypes.integer,
    id: React.PropTypes.string.isRequired
};

LineChartWidget.defaultProps = {
    title: 'Line chart',
    dateFormat: 'YYYY-MM-DD',
    min: null,
    max: null,
    tickCount: null
};


export default LineChartWidget;