var area = "area.json";
vegaEmbed("#area_chart", area).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var map = "map.json";
vegaEmbed("#map_chart", map).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var bar_chart = "bar_chart.json";
vegaEmbed("#bar_chart", bar_chart).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var bubble_plot = "bubble_plot.json";
vegaEmbed("#bubble_plot", bubble_plot).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var rect = "rect.json";
vegaEmbed("#rect", rect).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);