var app = angular.module("app", []);

// directiva proprie
app.directive("nrOwnTickets", function() {
  return {
    template : "<h5>Numarul de bilete procurate = {{registeredUsers[loggedUserId].tickets.length}}</h5>"
  }
});

// serviciu propriu
app.service('sum', function() {
  this.nrMyTickets = function (x) {
    return x.length;
  }
});

app.controller("appCtrl", function($scope, $interval, sum) {
  $scope.movies = [
    {
      name: "Tenet",
      year: 2020,
      month: 07,
      genre: "Actiune",
      image: "./img/Tenet.jpg",
      show:["17/10/2020 15:00", "21/10/2020 17:00"],
    },
    {
      name: "Soul",
      year: 2020,
      month: 11,
      genre: "Desen animat",
      image: "./img/Soul.jpg",
      show:["28/11/2020 16:00", "29/11/2020 18:00"],
    },
    {
      name: "Bad Boys For Life",
      year: 2020,
      month: 01,
      genre: "Actiune",
      image: "./img/Bad_Boys_For_Life.jpg",
      show:["16/10/2020 12:00", "18/10/2020 18:00"],
    },
    {
      name: "Palm Springs",
      year: 2020,
      month: 07,
      genre: "Comedie",
      image: "./img/Palm_Springs.jpg",
      show:["19/10/2020 11:00", "25/10/2020 14:00"],
    },
    {
      name: "Greyhound",
      year: 2020,
      month: 07,
      genre: "Drama",
      image: "./img/Greyhound.jpg",
      show:["18/10/2020 14:00", "15/10/2020 19:00"],
    },
    {
      name: "Sonic the Hedgehog",
      year: 2020,
      month: 02,
      genre: "Comedie",
      image: "./img/Sonic_the_Hedgehog.jpg",
      show:["24/10/2020 18:00", "28/10/2020 20:00"],
    },
    {
      name: "Black Widow",
      year: 2020,
      month: 10,
      genre: "Actiune",
      image: "./img/Black_Widow.jpg",
      show:["17/10/2020 16:00", "17/10/2020 19:00"],
    },
    {
      name: "Onward",
      year: 2020,
      month: 02,
      genre: "Desen animat",
      image: "./img/Onward.jpg",
      show:["22/10/2020 10:00", "23/10/2020 14:00"],
    },
  ];

  $scope.isLoggedIn = false;
  $scope.userInput = {};
  $scope.registeredUsers = [
  {
    "userId": 0,
    "email": "2@2",
    "password": "2@22@2",
    "tickets": ["Tenet", "Soul"],
  }];
  nrOfUsers = $scope.registeredUsers.length;

  $scope.toPage = function(page) {
    $scope.userInput = {};
    $scope.userIsAdded = false;
    $scope.activePage = page;
  };
  
  $scope.addUser = function(user) {
    $scope.registeredUsers.push({
      "userId": nrOfUsers++,
      "email": user.email,
      "password": user.password,
      "tickets": [],
    });
    $scope.userInput = {};
    $scope.userIsAdded = true;
  };

  $scope.verifyExistingUser = function(user) {
    for (i = 0; i < nrOfUsers; i++) {
      if (user.email == $scope.registeredUsers[i].email && user.password == $scope.registeredUsers[i].password) {
        $scope.isLoggedIn = true;
        $scope.loginError = false;
        $scope.userInput = {};
        $scope.loggedUserId = $scope.registeredUsers[i].userId;
        $scope.activePage= "home.html";
        break;
      } else {
        $scope.loginError = true;
      }
    }
  };

  $scope.logout = function() {
    $scope.isLoggedIn = false;
    $scope.activePage= "home.html";
  }
  
  $scope.addTicket = function(ticket) {
    $scope.registeredUsers[$scope.loggedUserId].tickets.push(ticket);
    $scope.activePage= "myTickets.html";
  }

  currentTime = new Date().toLocaleTimeString('uk-UK');
  $interval(function () {
    $scope.currentTime = new Date().toLocaleTimeString('uk-UK');
  }, 1000);
});