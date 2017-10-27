let express = require('express');
let fs = require('fs');
let request = require('request');
let cheerio = require('cheerio');
let app     = express();
app.get('/scrape', function(req, res){
		url = "PUT URL TO SCRAPE HERE CURRENTLY RETURNS ONE AS A JSON FILE";
		request(url, function(error,response,html){
				if(!error){
						let $ = cheerio.load(html);
						let agentname, agencyname , email, number;
//all these json variables should be renamed / deleted based on your needs (ie the information you want)
						let json = {
								relevent_info1: "",
								relevent_info2:"",

						};
						// use the selector by ID to get the element for the agent name.
						// extract the inner HTML of the element using html cheerio function
						json.relevent_info1 = $('Dom class , id or other identifier').html();
						// ^ should perform some REGEX on this name, to parse out first, middle, last names and unnecessary attributes.
						// use the selector by CLASS to get the element for the agent name.
						json.relevent_info2 = $('Domclass, id or other identifier').html();


												fs.writeFile('agencyinfo.json', JSON.stringify(json), function(err)  {

														console.log ("file written please check the directory (agentinfo.json) for output")
												 });
				}
		})
})


app.listen('8081')
console.log('(1) Go to http://localhost:8081/scrape and make sure you are loading the page \n (2) check your terminal if you can see your data \n (3) Open agencyinfo.json for your data');
exports = module.exports = app;
// contactinfo=document.querySelector('.oneSheetContactInfo') (This pulls the whole table)
// agencyname= document..querySelector('.AgencyName')
