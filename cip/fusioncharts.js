<script type="text/javascript">
var FusionCharts = require("fusioncharts");
require("fusioncharts/fusioncharts.charts")(FusionCharts);
FusionCharts.ready(function () {
  var myChart = new FusionCharts({
    "type": "column2d",
    "renderAt": "chartContainer",
    "width": "500",
    "height": "300",
    "dataFormat": "xml",
    "dataSource": "<chart caption='Harry\'s SuperMart' subcaption='Monthly revenue for last year' xaxisname='Month' yaxisname='Amount' numberprefix='$' palettecolors='#008ee4' bgalpha='0' borderalpha='20' canvasborderalpha='0' useplotgradientcolor='0' plotborderalpha='10' placevaluesinside='1' rotatevalues='1' valuefontcolor='#ffffff' captionpadding='20' showaxislines='1' axislinealpha='25' divlinealpha='10'><set label='Jan' value='420000' /><set label='Feb' value='810000' /><set label='Mar' value='720000' /><set label='Apr' value='550000' /><set label='May' value='910000' /><set label='Jun' value='510000' /><set label='Jul' value='680000' /><set label='Aug' value='620000' /><set label='Sep' value='610000' /><set label='Oct' value='490000' /><set label='Nov' value='900000' /><set label='Dec' value='730000' /></chart>"  });

  myChart.render();
});
</script>
