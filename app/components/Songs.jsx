(function(React, module, undefined) {
  var Song = require('./Song.jsx');
  
  module.exports = React.createClass({
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
              return <Song key={song.id} data={song}/>;
            })}
          </tbody>
        </table>
      );
    }
  });
}(React, module));