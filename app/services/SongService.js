(function(_) {
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
    this.subscribers = [];
    var wrapSong = function(song, deleteCallback, updateCallback) {
      return _.extend(_.clone(song), {
        delete: function() {
         deleteCallback(song);
        },
        update: function() {
         updateCallback(song);
        }
      });
    };
    
    this.publish = function(data) {
      _.each(this.subscribers, function(callback) {
        callback(data);
      });
    };
    
    this.deleteSong = function(mySong) {
      data = _.filter(data, function(song) {
        return song.id !== mySong.id;
      });
      this.publish(data);
    };
    
    this.updateSong = function(mySong) {
      this.publish(data);
    };
    
    this.subscribe = function(callback) {
      this.subscribers.push(callback);
    };
    
    this.getSongs = function() {
      return _.map(data, _.bind(function(song) {
        return wrapSong(song, _.bind(this.deleteSong, this), _.bind(this.updateSong, this));
      }, this));
    };
  };
  module.exports = new SongService();
}(_));