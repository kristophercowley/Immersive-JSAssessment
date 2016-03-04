app.controller('MainController', function($scope){
    $scope.test = "Testing 1,2,3,4";
    
    $scope.addNew = function(){
        $scope.films.push({name: $scope.newFilm.name, year: $scope.newFilm.year});
        $scope.newFilm = {};
    }
    
    $scope.remove = function(i){
        $scope.films.splice(i,1);
    }
    
    
    $scope.films = [{
  name: 'Cinderella',
  year: 1950
}, {
  name: 'Snow White and the Seven Dwarfs',
  year: 1937
}, {
  name: 'Fantasia',
  year: 1940
}, {
  name: 'The Jungle Book',
  year: 1967
}, {
  name: 'Sleeping Beauty',
  year: 1959
}, {
  name: 'Pinocchio',
  year: 1940
}, {
  name: 'One Hundred and One Dalmations',
  year: 1961
}, {
  name: 'Bambi',
  year: 1942
}, {
  name: 'Alice in Wonderland',
  year: 1951
}, {
  name: 'Peter Pan',
  year: 1953
}, {
  name: 'The Sword in the Stone',
  year: 1963
}, {
  name: 'Lady and the Tramp',
  year: 1955
}, {
  name: 'Song of the South',
  year: 1946
}, {
  name: 'Steamboat Willie',
  year: 1928
}, {
  name: 'Snow White and the Seven Dwarfs',
  year: 1937
}]
})