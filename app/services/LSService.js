(function(JSON) {
  var STORAGE_ID = "myApp.songs";
  var LSService = function() {
    this.store = function(data) {
      localStorage.setItem(STORAGE_ID, JSON.stringify(data));
    };
    
    this.read = function() {
      return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
    };
  };
  module.exports = new LSService();
}(JSON));