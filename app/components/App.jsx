(function(React, module, undefined) {
  var Songs = require('./Songs.jsx'),
      SongAlert = require('./SongAlert.jsx');
  
  module.exports = React.createClass({
    render: function() {
      var alert;
      if (!this.props.songs || this.props.songs.length === 0) {
        alert = <SongAlert />;
      }
      return (
        <div className="container">
          <div className="page-header">
            <h1>Rate the song <small>Like them all!</small></h1>
          </div>
          
          {alert}
          <Songs data={this.props.songs} />
        </div>
      );
    },
    
    getInitialState: function() {
      return { songs: [] };
    }
  });
}(React, module));