import * as React from 'react';
import { useEffect } from 'react';
import { Browser } from '@syncfusion/ej2-base';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { loadAccumulationChartTheme } from './theme-color';
import { AccumulationHighlight } from '@syncfusion/ej2-react-charts';

export let data1 =
    [
        { 'x': 'Chrome', y: 59.28, text: 'Chrome: 59.28%' },
        { 'x': 'UC Browser', y: 4.37, text: 'UC Browser: 4.37%' },
        { 'x': 'Opera', y: 3.12, text: 'Opera: 3.12%' },
        { 'x': 'Sogou Explorer', y: 1.73, text: 'Sogou Explorer: 1.73%' },
        { 'x': 'QQ', y: 3.96, text: 'QQ: 3.96%' },
        { 'x': 'Safari', y: 4.73, text: 'Safari: 4.73%' },
        { 'x': 'Internet Explorer', y: 6.12, text: 'Internet Explorer: 6.12%' },
        { 'x': 'Edge', y: 7.48, text: 'Edge: 7.48%' },
        { 'x': 'Others', y: 9.57, text: 'Others: 9.57%' }
    ];
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }
    .pie-chart {
        align :center
    }`;
const BieuDoTron = () => {
    const onChartLoad = (args) => {
        document.getElementById('pie-chart').setAttribute('title', '');
    };
    const load = (args) => {
        loadAccumulationChartTheme(args);
    };
    return (<div className='control-pane'>
        <style>{SAMPLE_CSS}</style>
        <div className='control-section row'>
            <AccumulationChartComponent id='pie-chart' title='Browser Market Share' load={load.bind(this)} legendSettings={{ visible: false }} enableSmartLabels={true} enableAnimation={true} center={{ x: '50%', y: '50%' }} enableBorderOnMouseMove={false} tooltip={{ enable: true, format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>', header: "", enableHighlight: true }} loaded={onChartLoad.bind(this)}>
                <Inject
                    services={[
                        AccumulationLegend,
                        PieSeries,
                        AccumulationTooltip,
                        AccumulationDataLabel,
                        AccumulationHighlight // thêm dòng này
                    ]}
                />
                <AccumulationSeriesCollectionDirective>
                    <AccumulationSeriesDirective dataSource={data1} name='Browser' xName='x' yName='y' explode={true} explodeOffset='10%' explodeIndex={0} startAngle={Browser.isDevice ? 55 : 35} dataLabel={{ visible: true, position: 'Outside', name: 'text', font: { fontWeight: '600' }, connectorStyle: { length: '20px', type: 'Curve' } }} radius={Browser.isDevice ? '40%' : '70%'} />
                </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
        </div>
    </div>);
};
export default BieuDoTron;