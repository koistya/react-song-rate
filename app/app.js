(function(React, _) {
  var App = require('./components/App.jsx'),
      Song = require('./models/SongModel.js');
  
  _.mixin(_.string.exports());
  
  var render = function() {
    React.render(React.createElement({ songs: Song.query() }), document.body);
  };
  render();
  Song.subscribe(render);
}(React, _));
