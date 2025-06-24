import * as React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Legend, Selection, Tooltip, Highlight } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import { loadChartTheme } from './theme-color';

const columnData = [
    { country: 'Chile', walnuts: 175000, almonds: 11300 },
    { country: 'European Union', walnuts: 140000, almonds: 135000 },
    { country: 'Turkey', walnuts: 67000, almonds: 24000 },
    { country: 'India', walnuts: 33000, almonds: 4200 },
    { country: 'Australia', walnuts: 12000, almonds: 154000 }
];

const BieuDoCot = () => {
    const loaded = (args) => {
        document.getElementById('charts')?.setAttribute('title', '');
    };

    const load = (args) => {
        loadChartTheme(args);
    };

    const axisLabelRender = (args) => {
        const value = parseInt(args.text.replace(/,/g, ''), 10);
        if (value >= 1000) {
            args.text = value / 1000 + 'K';
        }
    };

    const tooltipRender = (args) => {
        if (args.text && args.point?.y) {
            const value = args.point.y.toLocaleString('en-US');
            args.text = `${args.series.name}: <b>${value}</b>`;
        }
    };

    return (
        <div className='control-pane'>
            <div className='control-section'>
                <ChartComponent
                    id='charts'
                    style={{ textAlign: "center" }}
                    selectionMode="Point"
                    primaryXAxis={{
                        valueType: 'Category',
                        interval: 1,
                        labelIntersectAction: Browser.isDevice ? 'None' : 'Trim',
                        labelRotation: Browser.isDevice ? -45 : 0,
                        majorGridLines: { width: 0 },
                        majorTickLines: { width: 0 }
                    }}
                    primaryYAxis={{
                        title: 'Metric Tons',
                        interval: 40000,
                        majorTickLines: { width: 0 },
                        lineStyle: { width: 0 }
                    }}
                    legendSettings={{
                        visible: true,
                        enableHighlight: true,
                        shapeWidth: 9,
                        shapeHeight: 9
                    }}
                    chartArea={{ border: { width: 0 }, margin: { bottom: 12 } }}
                    tooltip={{
                        enable: true,
                        header: '<b>${point.x}</b>',
                        format: '${series.name}: <b>${point.y}</b>',
                        enableHighlight: true
                    }}
                    width={Browser.isDevice ? '100%' : '75%'}
                    title='Walnuts and Almonds Estimated Production for 2023'
                    subTitle='Source: fas.usda.gov'
                    loaded={loaded}
                    load={load}
                    axisLabelRender={axisLabelRender}
                    tooltipRender={tooltipRender}
                >
                    <Inject services={[ColumnSeries, Category, Legend, Tooltip, Highlight, Selection]} />
                    <SeriesCollectionDirective>
                        <SeriesDirective
                            dataSource={columnData}
                            xName='country'
                            yName='walnuts'
                            name='Walnuts'
                            type='Column'
                            cornerRadius={{ topLeft: 4, topRight: 4 }}
                            columnSpacing={0.4}
                            legendShape='Rectangle'
                            highlightSettings={{ enable: true, mode: 'Point', pattern: 'DiagonalForward' }}
                        />
                        <SeriesDirective
                            dataSource={columnData}
                            xName='country'
                            yName='almonds'
                            name='Almonds'
                            type='Column'
                            cornerRadius={{ topLeft: 4, topRight: 4 }}
                            columnSpacing={0.4}
                            legendShape='Rectangle'
                            highlightSettings={{ enable: true, mode: 'Point', pattern: 'DiagonalForward' }}
                        />
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
};

export default BieuDoCot;
