var express = require('express');
var app = express();
var fs = require('fs');
var port = process.env.PORT || 3030;
var http = require("http");
var path = require('path');

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/stations.html', 'utf8');
    res.end(html);
});


app.get('/tripInfo', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var html = fs.readFileSync(__dirname + '/trip.html', 'utf8');
    res.end(html);
});


app.get('/stations', function(req, res){
	var stations = [];
	var body = '';
	var req1 = http.get('http://api.bart.gov/api/stn.aspx?cmd=stns&key=MW9S-E7SL-26DU-VV8V&json=y', (res1) => {
		res1.setEncoding('utf8');
		res1.on('data', (chunk) => {
			body += chunk;
		});
		res1.on('end', () => {
			var stationList = JSON.parse(body).root.stations.station;
			for (var i = 0; i < stationList.length; i++) {
				var temp = {
					"name": stationList[i].name,
					"abbr": stationList[i].abbr,
					"gtfs_latitude": stationList[i].gtfs_latitude,
    				"gtfs_longitude": stationList[i].gtfs_longitude,
				};
				stations.push(temp);
			}
			res.writeHead(200, { 'Content-Type':  'text/plain' });
			res.end(JSON.stringify(stations));
		});
	});
});



app.get('/trip', function(req, res) {
	var trips = [];
	var body = '';
	var source = req.query.source;
	var dest = req.query.dest;
	
	var req1 = http.get('http://api.bart.gov/api/sched.aspx?cmd=depart&key=MW9S-E7SL-26DU-VV8V&orig='+source+
		'&dest='+dest+'&date=now&b=0&a=4&l=1&json=y', (res1) => {
		
		res1.setEncoding('utf8');
		res1.on('data', (chunk) => {
			body += chunk;
		});
		res1.on('end', () => {
			var tripList = JSON.parse(body).root.schedule.request.trip;
			for (var i = 0; i < tripList.length; i++) {
				var temp = {
					
					"destTime": tripList[i]['@destTimeMin'],
					"origTime": tripList[i]['@origTimeMin'],
					"tripTime": tripList[i]['@tripTime'],
					"origTimeDate": tripList[i]['@origTimeDate'],
					"fares": tripList[i].fares.fare
				};

				trips.push(temp);
			}

			/////
			res.writeHead(200, { 'Content-Type':  'text/plain' });
			res.end(JSON.stringify(trips));
		});
	});
});

app.get('/station', function(req, res) {
	
	var source = req.query.source;
	var query = http.get('http://api.bart.gov/api/stn.aspx?cmd=stninfo&key=MW9S-E7SL-26DU-VV8V&orig='+source+'&json=y', function(res1) {
		var body = '';
		res1.setEncoding('utf8');
		res1.on('data', function(chunk){
			body+=chunk;
		});
		
		res1.on('end', function(){

			var stationinfo = JSON.parse(body).root.stations.station;

			
				var thestation = {
					"name": stationinfo.name,
					"abbr": stationinfo.abbr,
					"address": stationinfo.address,
					"city":stationinfo.city,
    				"county":stationinfo.county,
    				"state":stationinfo.state,
    				"zipcode":stationinfo.zipcode,
    				"intro":stationinfo.intro['#cdata-section'],
    				"gtfs_latitude": stationinfo.gtfs_latitude,
    				"gtfs_longitude": stationinfo.gtfs_longitude,
    				"north_platforms": stationinfo.north_platforms,
    				"north_routes": stationinfo.north_routes,
    				"platform_info": stationinfo.platform_info,
    				"south_platforms": stationinfo.south_platforms,
    				"south_routes": stationinfo.south_routes,
    				"attraction": stationinfo.attraction,
    				"food": stationinfo.food,
    				"link": stationinfo.link["#cdata-section"],
    				"shopping": stationinfo.shopping
				};


			res.writeHead(200, {'Content-Type': 'text/plain'});
			res.end(JSON.stringify(thestation));
		});
	});
});

app.get(/js/, function(req, res) {
	res.writeHead(200, { 'Content-Type': 'application/javascript' });
    var html = fs.readFileSync(__dirname + '/js' + req.path, 'utf8');
    res.end(html);
});


app.listen(3030, '127.0.0.1');

