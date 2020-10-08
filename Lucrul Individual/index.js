var app = angular.module("app", []);
app.controller("appCtrl", function($scope) {
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
    $scope.activePage = page;
  };
  

  $scope.addUser = function(user) {
    $scope.registeredUser.push({
      "userId": nrOfUsers++,
      "email": user.email,
      "password": user.password
    })
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