(function(App, React, undefined) {
  if (App === undefined) {
   App = window.App = {}; 
  }
  App.MyApp = React.createClass({
    render: function() {
      return (
        <div className="container">
          <div className="page-header">
            <h1>Rate the song <small>Like them all!</small></h1>
          </div>
          <App.Songs data={this.props.songs} />
        </div>
      );
    },
    
    getInitialState: function() {
      console.log(this.props);
      return { songs: [] };
    }
  });
}(window.App, React));