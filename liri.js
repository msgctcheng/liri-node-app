//Moduralization
//"http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=40e9cece"

//Input
var inputString = process.argv;
var operation = inputString[2];
var searchQ = inputString.slice(3).join("+");
//Keys
var apiKeys = require("./keys.js");
var twitkey = apiKeys.twitterKeys;
var spotkey = apiKeys.spotifyKeys;
//OMDB
var request = require("request");
//Spotify
var fs = require("fs");
var Spotify = require ("node-spotify-api");
var spotify = new Spotify(spotkey);

//Twitter
var Twitter = require("twitter");
var client = new Twitter(twitkey);

function searchSpot() {
    spotify.search({ type: "track", query: '"'+ searchQ +'"'}).then( function(response) { 
        console.log("Track:         " + response.tracks.items[0].name);
        console.log(" ");
        console.log("Artist(s):     " + response.tracks.items[0].album.artists[0].name);
        console.log(" ");
        console.log("Preview URL:   " + response.tracks.items[0].preview_url);
        console.log(" ");
        console.log("Album:         " + response.tracks.items[0].album.name);
        console.log(" ");
        }).catch( function(err) {
            console.log(err);
        });
    }
 

if (operation === "my-tweets") {
    if (searchQ == "") {
        searchQ = "PandaOfEvil";
    }
   client.get('statuses/user_timeline', {screen_name: searchQ}, function(error, tweet, response) {
        if (!error) {
           for (var i = 0; i < 20; i++) {
                console.log("Tweet " + (i + 1) + ":  " + "'" + tweet[i].text + "' - " + tweet[i].created_at);
                console.log(" ");
            }  
        } else {
            console.log(error);
        }
    });
} 
else if (operation === "spotify-this-song") {
    if (searchQ == "") {
            searchQ = "The Sign";
    }
   
    searchSpot();
    
}
else if (operation === "movie-this") {
    if (searchQ == "") {
        searchQ = "Mr. Nobody";
    }
    request("http://www.omdbapi.com/?t="+ searchQ + "&y=&plot=short&apikey=40e9cece", function (error, response, body) {
        if (error) {
            console.log(error);
        }

        console.log("Title:        " + JSON.parse(body).Title);
        console.log(" ");
        console.log("Year:         " + JSON.parse(body).Year);
        console.log(" ");
        console.log("IMDB Rating:  " + JSON.parse(body).imdbRating);
        console.log(" ");
        console.log("RT Rating:    " + JSON.parse(body).Ratings[1].Value);
        console.log(" ");
        console.log("Country:      " + JSON.parse(body).Country);
        console.log(" ");
        console.log("Language:     " + JSON.parse(body).Language);
        console.log(" ");
        console.log("Plot:         " + JSON.parse(body).Plot);
        console.log(" ");
        console.log("Actors:       " + JSON.parse(body).Actors);
        console.log(" ");
    }); 
}
else if (operation === "do-what-it-says") {
   
        fs.readFile("random.txt", "utf8", function (error, data) {
           searchQ = data.split(",").slice(1).join("+");
           
           operation = '"'+ data.split(",").slice(0, 1).join(" ")+'"';
           
           searchSpot()

         
            
        });
}
else {
    console.log("Not a valid operation! Please enter a valid operation.");
}

  
