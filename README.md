# "Language Interpretation and Recognition Interface" (LIRI) Node App
                         JavaScript | Node | Request - npm | twitter - npm | node-spotify-api - npm

* The LIRI App is a Terminal/Bash based Node app that accepts several arguments when it is executed by `node liri.js`.
<br />
* Arguments & Examples:

    * `node liri.js my-tweets` - Uses the "twitter" npm package to pull the last twenty tweets from my twitter "https://twitter.com/PandaOfEvil"

    ![alt text](https://i.imgur.com/Zy2HNxz.png)

    * `node liri.js my-tweets billmaher` - The `my-tweets` command also accepts an twitter handles as arguments and will pull the last twenty tweets from the twitter account associated with the handle.

     ![alt text](https://i.imgur.com/s2g8g83.png)

    * `node liri.js movie-this` - Uses the "Request" npm package to search the OMDB API; the default search is for "Mr. Nobody."

    * `node liri.js movie-this "Soylent Green"` - The `movie-this` command also accepts movie names as arguments and will search the OMDB API for the movie entered.

    ![alt text](https://i.imgur.com/l4GqWNK.png)



    * `node liri.js spotify-this-song` - Uses the "node-spotify-api" npm package and "fs" to read from the random.txt file and search spotify for its contents,"The Sign - Ace of Base," and return information about the song. 

    * `node liri.js spotify-this-song "Crazy Train"` - The `spotify-this-song` command also accepts song names as arguments and will return information from spotify on the searched song.

    ![alt text](https://i.imgur.com/WHyr3B2.png)


