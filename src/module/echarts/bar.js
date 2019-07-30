var echarts = require("echarts/lib/echarts");
    require("echarts/lib/chart/bar");
    require("echarts/lib/chart/radar");
    require("echarts/lib/component/tooltip");
    require("echarts/lib/component/title");
let test = function(data,id){
    let option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
        }]
    };
    let xAxis = [];
    let series = [];
    for(let i=0;i<data.length;i++){
        xAxis[i] = data[i].name;
        series[i] = data[i].avg;
    }
    option.xAxis.data = xAxis;
    option.series[0].data = series;
    let mychart = echarts.init(document.getElementById(id));
    mychart.setOption(option);
}
export default {
    test
}

