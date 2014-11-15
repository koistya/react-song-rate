(function(App, _) {
  if (App === undefined) {
   App = window.App = {}; 
  }
  var data = [{
    id: 1,
    artist: "Nightwish",
    title: "Ghost Loves Score",
    score: 3
  }, {
    id: 2,
    artist: "Rammstein",
    title: "Mein Teil",
    score: 3
  }];
  var SongService = function() {
    var wrapSong = function(song) {
      return _.extend(_.clone(song), {
        delete: function() {
         App.SongService.deleteSong(song); 
        }
      });
    };
    
    this.deleteSong = function(mySong) {
      data = _.filter(data, function(song) {
        return song.id === mySong.id;
      });
    };
    this.getSongs = function() {
      return _.map(data, wrapSong);
    };
  };
  App.SongService = new SongService();
}(window.App, _));