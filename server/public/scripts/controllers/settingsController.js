colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");
  var self = this;
  self.colors = DataFactory.colors;
  self.newColor = "";

  self.pushColorMaDoooods = function() {
    self.colors.push(self.newColor);
    self.newColor = "";
    DataFactory.colors = self.colors;
    console.log(self.colors);
  }

}]);
