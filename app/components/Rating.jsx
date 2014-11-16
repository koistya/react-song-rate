(function(React) {
  var RatingStar = require('./RatingStar.jsx');
  module.exports = React.createClass({
    getInitialState: function() {
      return {
        song: this.props.data,
        max: 5,
        hoverIndex: -1
      };
    },
    hoverStar: function(index) {
      this.setState(_.extend(this.state, {
        hoverIndex: index
      }));
    },
    leaveStar: function(index) {
      this.setState(_.extend(this.state, {
        hoverIndex: -1
      }));
    },
    render: function() {
      var stars = [];
      for (var idx = 1; idx <= this.state.max; idx++) {
        var fill = idx <= this.props.data.score;
        var hover = idx <= this.state.hoverIndex;
        stars.push(<RatingStar fill={fill} index={idx} data={this.props.data} hoverFill={hover} hover={this.hoverStar} leave={this.leaveStar} />);
      }
      return (
        <div className="rating pull-left">
          {stars}
        </div>
      );
    }
  })
}(React));