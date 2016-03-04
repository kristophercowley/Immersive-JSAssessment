/**
 * In this scenario you will be working with a single data set.
 * The Data set is an array of objects.
 * Each object is a film that has a name and year of release. 
 * 
 * Many of the questions will require you to finish the functions that are prewritten,
 * Add arguments when needed
 * You will not need to invoke any of the functions yourself
 * The Unit Tests should let you know when you got the function right
 * 
 * For Question 7 you will need to move everything over to VSCode and build your angular app there.
 * When you complete the app push it to your github and slack me with the url.
 * 
*/

//Question 1 - Finish the function called filmCount so it will return the total number of films in the array
function filmCount(){
  return films.length;
}

//Question 2 - Find film by Title 
function findTitle(title){
  for(var i = 0; i < films.length; i++){
    if(films[i].name === title){
      return films[i];
    }
  }
}

//Question 3 - Add each of the movies in the newFilms array to the films array
var newFilms = [{
  name: 'Tangled',
  year: 2010
},{
  name: 'Aladdin',
  year: 1992
},{
  name: 'Zootopia',
  year: 2016
},{
  name: 'The Little Mermaid',
  year: 1989
},{
  name: 'Beauty and the Beast',
  year: 1991
}]
for(var i = 0; i < newFilms.length; i++){
  films.push(newFilms[i])
}
//Question 4 - Remove any duplicate titles found in the films array by name
function removeDups(){
  var out = [];
  for(var i = 0; i < films.length; i++){
    if(out.indexOf(films[i].name) == -1){
      out.push(films[i].name)
    }else{
      films.splice(i,1);
    }
  }
  return films;
}

//Question 5 - Find All films within a starting year and ending year
function findReleasesWithin(start, end){
  var movies = []
  for(var i = 0; i < films.length; i++){
  if(films[i].year >= start && films[i].year <= end){
    movies.push(films[i])
  }
  }
  return movies;
}

films.sort(function (a, b) {
  if (a.year > b.year) {
    return 1;
  }
  if (a.year < b.year) {
    return -1;
  }
  return 0;
});