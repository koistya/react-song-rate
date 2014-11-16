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
  
  var statics = {
    subscribers: [],
    counter: 10,
    query: function() {
      return _.map(data, function(song) {
        return new SongModel(song);
      });
    },
    publish: function(song) {
      _.each(this.subscribers, function(callback) {
        callback(song);
      });
    },
    subscribe: function(callback) {
      this.subscribers.push(callback);
    },
    delete: function(mySong) {
      data = _.filter(data, function(song) {
        return song.id !== mySong.id;
      });
      this.publish(data);
    },
    save: function(mySong) {
      var song = _.find(data, function(song) {
        return song.id === mySong.id;
      });
      if (song !== undefined) {
        _.extend(song, mySong);
      } else {
        data.push(mySong);
      }
      this.publish(mySong);
    }
  };
  
  var SongModel = function(song) {
    this.id = song.id || statics.counter++;
    this.title = song.title || "";
    this.artist = song.artist || "";
    this.score = song.score || 0;
    
    this.delete = function() {
      statics.delete(this);
    };

    this.save = function() {
      statics.save(this);
    };
  };
  
  _.extend(SongModel, statics);
  module.exports = SongModel;
}(_));