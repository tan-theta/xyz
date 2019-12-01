var selectedDate = '14';

var mapDimensions_spain = document.querySelector ('#map_spain').getBoundingClientRect();
//var mapWidth = mapDimensions.width;
var mapWidth_spain = document.documentElement.clientWidth/2;
console.log(mapWidth_spain);
var map_spain = d3.choropleth()
    .geofile('assets/topojson/countries/ESP.json')
    .projection(d3.geoAlbers)
    .column(selectedDate)
//    .attr("filter", "url(#glow)")
    .unitId('fips')
    .scale(mapWidth_spain*3.2) 
//    .domain([0,100,200,500,700,1000,1500,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000,13000,14000,15000])
    .domain([0,100,200,300,400,500,600,700,800,900,1000,1500,2000,2500,3000,4000,5000,6000,8000,10000,12000])
//    .colors(["#FDF1F0","#FBE3E1","#FAD6D2","#F8C8C3","#F6BBB4","#F5ADA5","#F3A096","#F19287","#F08578","#EE7769","#ED6A5A","#D86152","#C2574A","#AD4E42","#97443A","#823A32","#6C3129","#572721","#411D19","#2C1411"])
    .colors(["#E7F8FD","#D0F2FC","#B9ECFA","#A2E5F9","#8BDFF7","#74D9F6","#5DD3F4","#46CCF3","#2FC6F1","#18C0F0","#01BAEF","#01AABA","#0199C4","#0188AE","#017799","#016683","#01556D","#014457","#013342","#01222C"])
//    .colors(["#E8EFF1","#D2DFE4","#BCCFD6","#A6BFC9","#90AFBC","#799FAE","#638FA1","#4D7F94","#376F86","#215F79","#0B4F6C","#0A4863","#0A4159","#093A4F","#083345","#062C3B","#052432","#041D28","#03161E","#01080A"])
    .legend(true)
    .format(d3.format(',.0f'))
    .duration(2500)
    .valueScale(d3.scaleLinear)
;


console.log(d3.select(".units"));
console.log(d3.select("rect").selectAll("g"));

d3.csv('data/SPAIN/data_spain.csv').then(data => {
    map_spain.draw(d3.select("#map_spain").datum(data));
});

var redraw = function(selectedDate){
    d3.select("#map_spain").selectAll("*").remove();
    var mapDimensions_spain = document.querySelector ('#map_spain').getBoundingClientRect();
    var mapWidth_spain = mapDimensions_spain.width;
    var map_spain = d3.choropleth()
    .geofile('assets/topojson/countries/ESP.json')
    .projection(d3.geoAlbers)
    .column(selectedDate)
    .unitId('fips')
    .scale(mapWidth_spain*3.2)
    .duration(2500)
//    .domain([0,100,200,500,700,1000,1500,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000,13000,14000,15000])
    .domain([0,100,200,300,400,500,600,700,800,900,1000,1500,2000,2500,3000,4000,5000,6000,8000,10000,12000])
//    .colors(["#FDF1F0","#FBE3E1","#FAD6D2","#F8C8C3","#F6BBB4","#F5ADA5","#F3A096","#F19287","#F08578","#EE7769","#ED6A5A","#D86152","#C2574A","#AD4E42","#97443A","#823A32","#6C3129","#572721","#411D19","#2C1411"])
    .colors(["#E7F8FD","#D0F2FC","#B9ECFA","#A2E5F9","#8BDFF7","#74D9F6","#5DD3F4","#46CCF3","#2FC6F1","#18C0F0","#01BAEF","#01AABA","#0199C4","#0188AE","#017799","#016683","#01556D","#014457","#013342","#01222C"])
    
    .legend(true)
    .format(d3.format(',.0f'))
    .valueScale(d3.scaleLinear);

    
    
d3.csv('data/SPAIN/data_spain.csv').then(data => {
    map_spain.draw(d3.select("#map_spain").datum(data));
});
};
  ;






