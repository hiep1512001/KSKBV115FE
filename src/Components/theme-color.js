export const themeColor = {
    primary: '#007bff',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    dark: '#343a40',
    secondary: '#6c757d',
    light: '#f8f9fa',
    teal: '#20c997',
    indigo: '#6610f2',
    purple: '#6f42c1',
    pink: '#e83e8c',
    orange: '#fd7e14',
    cyan: '#17a2b8',
    chartPalette: [
        '#007bff', // blue
        '#28a745', // green
        '#ffc107', // yellow
        '#dc3545', // red
        '#17a2b8', // cyan
        '#6610f2', // indigo
        '#6f42c1', // purple
        '#e83e8c', // pink
        '#20c997', // teal
        '#fd7e14', // orange
        '#343a40', // dark gray
        '#6c757d', // gray
        '#f8f9fa', // light
    ],
};

export const loadAccumulationChartTheme = (args) => {
    let selectedTheme = window.location.hash.split('/')[1];
    selectedTheme = selectedTheme ? selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1) : 'Material';
    args.accumulation.theme = selectedTheme;
};
export const loadChartTheme = (args) => {
    let selectedTheme = window.location.hash.split('/')[1];
    selectedTheme = selectedTheme
        ? selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
        : 'Material';
    args.chart.theme = selectedTheme;
};

