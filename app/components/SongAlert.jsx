(function(React, module, undefined) {
  module.exports = React.createClass({
    render: function() {
      return (
        <div className="alert alert-info">
          <strong>First!</strong> You're the first one using this app. Make sure to add some songs to the list!
        </div>
      );
    }
  });
}(React, module));