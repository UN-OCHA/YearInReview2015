// Bar
var barChartData = {
    labels: ["2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
    datasets: [
        {
            label: "Unfunded in Billion US$",
            fillColor: "rgba(220,220,220,0.9)",
            strokeColor: "rgba(220,220,220,0.9)",
            highlightFill: "rgba(220,220,220,0.9)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [1.2, 2.0, 1.7, 1.4, 1.9, 2.8, 4.1, 3.3, 3.5, 4.5, 7.2, 10.9, 20.1]
			},
        {
            label: "Funded in Billion US$",
            fillColor: "rgba(151,187,205,0.5)",
            strokeColor: "rgba(151,187,205,0.8)",
            highlightFill: "rgba(151,187,205,0.75)",
            highlightStroke: "rgba(151,187,205,1)",
            data: [2.2, 4.0, 3.5, 3.7, 5.2, 7.0, 7.2, 5.6, 5.7, 8.3, 10.8, 9.0, 0]
			}
		]

}

//Line

var lineChartData = {
    labels: ["2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
    datasets: [

        {
            label: "Funding needs",
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(2,108,182,1)",
            pointColor: "rgba(2,108,182,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,187,205,1)",
            data: [26, 31, 27, 25, 30, 30, 50, 62, 73, 76, 82.5, 87.6]
				}
			]

}

//Load charts Bar and Line
var func1 = function () {
        var ctx = document.getElementById("barChart1").getContext("2d");
        window.myBar = new Chart(ctx).StackedBar(barChartData, {
            responsive: true,
            scaleOverride: true,//from here to botom is a customization to change Y axis values
            scaleSteps: 5,//steps
            scaleStepWidth: 5,//10 to 10... 20 to 20...
            scaleStartValue: 0// begining in 0
        });
    },
    func2 = function () {
        var ctx = document.getElementById("lineChart1").getContext("2d");
        window.myLine = new Chart(ctx).Line(lineChartData, {
            responsive: true,
            scaleOverride: true,
            scaleSteps: 5,
            scaleStepWidth: 20,
            scaleStartValue: 0
        });
    };

window.onload = function () {
    func1();
    func2();
};

//Legends
//var myLineChart = new Chart(document.getElementById("lineChart1").getContext("2d")).Line(lineChartData);
//document.getElementById("legendLine").innerHTML = myLineChart.generateLegend();

//var myBarChart = new Chart(document.getElementById("barChart1").getContext("2d")).Line(barChartData);
//document.getElementById("legendBar").innerHTML = myBarChart.generateLegend();