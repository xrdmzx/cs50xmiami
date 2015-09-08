/*
The Movie Database

It's like IMDB, but much much smaller!

- Create an object to store the following information about your favorite movie:
  title (a string), duration (a number), and stars (an array of strings).

- Create a function to print out the movie information like so:
  "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

// write your solution here...
var favoriteMovies = [
  {title: "The Godfather: Part II", duration: 200, stars: ["Al Pacino","Robert De Niro", "Robert Duvall"]},
  {title: "Mulholland Drive", duration: 147, stars: ["Naomi Watts","Laura Harring"]},
  {title: "The Matrix", duration: 136, stars: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]},
  {title: "Super Bad", duration: 113, stars: ["Michael Cera", "Jonah Hill", "Seth Rogan"]}
];
var len = favoriteMovies.length
for(var i = 0; i < len; i++) {
  var movie = favoriteMovies[i];
    console.log(movie.title + " lasts for " + movie.duration + " minutes. Stars: " + movie.stars + ".");
}
