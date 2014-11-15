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