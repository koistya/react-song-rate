(function(_) {
  var LSService = require('../services/LSService.js'),
      data = LSService.read();
  
  var statics = {
    subscribers: [],
    counter: LSService.read() && LSService.read().length > 0 ? LSService.read().slice(-1).pop().id + 1 : 1,
    query: function() {
      return _.map(data, function(song) {
        return new SongModel(song);
      });
    },
    publish: function(data) {
      _.each(this.subscribers, function(callback) {
        callback(data);
      });
      LSService.store(data);
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
      this.publish(data);
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