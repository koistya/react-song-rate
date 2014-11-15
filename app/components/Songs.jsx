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