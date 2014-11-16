(function(React) {
  var App = require('./components/App.jsx'),
      SongService = require('./services/SongService.js');
  
  var render = function() {
    React.render(React.createFactory(App)({ songs: SongService.getSongs() }), document.body);
  };
  render();
  SongService.subscribe(render);
}(React));