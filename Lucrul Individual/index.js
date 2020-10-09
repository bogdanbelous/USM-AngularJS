var app = angular.module("app", []);
app.controller("appCtrl", function($scope) {
  $scope.movies = [
    {name: "Tenet", year: 2020, month: 07, genre: "Actiune", image: "./img/Tenet.jpg"},
    {name: "Soul", year: 2020,  month: 11, genre: "Desen animat", image: "./img/Soul.jpg"},
    {name: "Bad Boys For Life", year: 2020,  month: 01, genre: "Actiune", image: "./img/Bad_Boys_For_Life.jpg"},
    {name: "Palm Springs", year: 2020, month: 07, genre: "Comedie", image: "./img/Palm_Springs.jpg"},
    {name: "Greyhound", year: 2020, month: 07, genre: "Drama", image: "./img/Greyhound.jpg"},
    {name: "Sonic the Hedgehog", year: 2020, month: 02, genre: "Comedie", image: "./img/Sonic_the_Hedgehog.jpg"},
    {name: "Black Widow", year: 2020, month: 10, genre: "Actiune", image: "./img/Black_Widow.jpg"},
    {name: "Onward", year: 2020, month: 02, genre: "Desen animat", image: "./img/Onward.jpg"},
    // {name: "Wonder Woman 1984", year: "2020.06", genre: "Actiune", image: "./img/Wonder_Woman_1984.jpg"},
    // {name: "", year: "", genre: "", image: "./img/.jpg"},
  ];

  $scope.isLoggedIn = false;
  $scope.userInput = {};
  $scope.registeredUser = [
  {
    "userId": 0,
    "email": "2@2.com",
    "password": "2@22@2"
  }];
  nrOfUsers = $scope.registeredUser.length;

  $scope.toPage = function(page) {
    $scope.userInput = {};
    $scope.userIsAdded = false;
    $scope.activePage = page;
  };
  
  $scope.addUser = function(user) {
    $scope.registeredUser.push({
      "userId": nrOfUsers++,
      "email": user.email,
      "password": user.password
    });
    $scope.userInput = {};
    $scope.userIsAdded = true;
  };

  $scope.verifyExistingUser = function(user) {
    for (i = 0; i < nrOfUsers; i++) {
      if (user.email == $scope.registeredUser[i].email && user.password == $scope.registeredUser[i].password) {
        $scope.isLoggedIn = true;
        $scope.loginError = false;
        $scope.userInput = {};
        $scope.activePage= "home.html";
        break;
      } else {
        $scope.loginError = true;
      }
    }
  };

  $scope.logout = function() {
    $scope.isLoggedIn = false;
  }
  
});