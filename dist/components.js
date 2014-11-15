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

(function(App, React, undefined) {
  if (App === undefined) {
   App = window.App = {}; 
  }
  App.Song = React.createClass({
    render: function() {
      return (
        <tr>
          <td>
            <div className="pull-left">
              <strong>{this.props.data.artist}</strong><br />
              <small>{this.props.data.title}</small>
            </div>
            <div className="pull-right">
              <button type="button" className="btn btn-danger pull-right">
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
          </td>
        </tr> 
      );
    },
    getInitialState: function() {
      console.log(this.props);
      return {
        title: "",
        artist: "",
        score: 0
      };
    }
  });
}(window.App, React));

(function(App, React, undefined) {
  if (App === undefined) {
   App = window.App = {}; 
  }
  App.Songs = React.createClass({
    render: function() {
      return (
        <table className="table table-striped table-condensed">
          <thead>
            <tr>
              <th>Song</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(function(song) {
              return <App.Song key={song.id} data={song}/>;
            })}
          </tbody>
        </table>
      );
    }
  });
}(window.App, React));