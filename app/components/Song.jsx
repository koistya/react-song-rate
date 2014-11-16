(function(React, module, undefined) {
  module.exports = React.createClass({
    render: function() {
      return (
        <tr>
          <td>
            <div className="pull-left">
              <strong>{this.props.data.artist}</strong><br />
              <small>{this.props.data.title}</small>
            </div>
            <div className="pull-right">
              <button type="button" className="btn btn-danger pull-right" onClick={this.deleteSong}>
                <i className="fa fa-trash-o"></i>
              </button>
            </div>
          </td>
        </tr> 
      );
    },
    deleteSong: function() {
      this.props.data.delete();
    },
    getInitialState: function() {
      return {
        title: "",
        artist: "",
        score: 0
      };
    }
  });
}(React, module));