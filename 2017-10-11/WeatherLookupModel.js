const fs = require('fs');

const dataFile = 'WeatherLookupModel.json'

function WeatherLookupModel(name, location) {
	this.name = name;
	this.location = location;
	this.lastLookup;
};

WeatherLookupModel.prototype.updateLookup = function() {
	this.lastLookup = new Date.getMilliseconds(); // built in js
};

WeatherLookupModel.prototype.getWeatherInfo = function() {
	//After we get the weather info, 

	// call this.updateLooup()
};

WeatherLookupModel.prototype.save = function() {
	// get weather info
	this.getWeatherInfo;

	// save this record to the file
	WeatherLookupModel.getAllRecords(function(error, records) {
		if (!error) {
			records[] = this;
			var self = this;
			fs.writeFile(safeFile, JSON.stringify(records), function(error, data) {
				cb(error, self);	
			});		
		}
		else {
			cb(error, this);
		}
	});
};

WeatherLookupModel.prototype.getAllRecords = function(cb) {
	// get all records from file
	fs.readFile(saveFile, "utf8", function(error, data) {
		let AllRecordData = (data.length > 0)
		? JSON.parse(data)
		: [];
		cb(error, AllRecordData);
	})
};

module.exports = WeatherLookupModel;