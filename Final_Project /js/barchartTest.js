function barChartlast() {
    var pAge = Number(document.getElementById('iiAge').innerHTML);
    var pCareer = Number(document.getElementById('iiCareer').innerHTML);
    var pScience = Number(document.getElementById('iiScience').innerHTML);
    var ppAge = Number(document.getElementById('iiaAge').innerHTML);
    var ppCareer = Number(document.getElementById('iiaCareer').innerHTML);
    var ppScience = Number(document.getElementById('iiaScience').innerHTML);
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "theme2",
        backgroundColor: "transparent",
        animationEnabled: true,
        title: {
            text: "How much have you improved?",
            fontSize: 28
        },
        toolTip: {
            shared: false
        },
        axisY: {
            title: "Correct Answer"
        },
        data: [{
                type: "column",
                name: "Pretest Result",
                legendText: "Pretest Result",
                showInLegend: true,
                dataPoints: [{
                        label: "Age",
                        y: pAge
                    }, {
                        label: "Career-Gender",
                        y: pCareer
                    }, {
                        label: "Science-Gender",
                        y: pScience
                    },


                ]
            }, {
                type: "column",
                name: "Posttest Result",
                legendText: "Posttest Result",
                // axisYType: "secondary",
                //second axis, different way no need
                showInLegend: true,
                //note on the bottom
                dataPoints: [{
                    label: "Age",
                    y: ppAge
                }, {
                    label: "Career-Gender",
                    y: ppCareer
                }, {
                    label: "Science-Gender",
                    y: ppScience
                }, ]
            }

        ],
        legend: {
            cursor: "pointer",
            itemclick: function(e) {
                if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                    e.dataSeries.visible = false;
                } else {
                    e.dataSeries.visible = true;
                }
                chart.render();
            }
            //click legend to see or hide your score..omg it's incredible...
        },
    });
    chart.render();
}
var runButton = document.getElementById("run");
runButton.addEventListener("click", barChartlast);
