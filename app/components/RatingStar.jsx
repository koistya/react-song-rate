(function(React) {
  module.exports = React.createClass({
    setScore: function(event) {
      this.props.data.score = this.props.index;
      this.props.data.save();
      
      event.preventDefault();
    },
    getClasses: function() {
      var classes = ['fa'];
      if (this.props.fill || this.props.hoverFill) {
        classes.push('fa-star');
      } else {
        classes.push('fa-star-o');
      }
      if (this.props.hoverFill) {
        classes.push('rating-highlight')
      } else {
        classes.push('rating-normal');
      }
      return classes;
    },
    hoverStar: function() {
      this.props.hover(this.props.index);
    },
    leaveStar: function() {
      this.props.leave(this.props.index);
    },
    render: function() {
      var starClasses = this.getClasses().join(' ');
      return (
        <a onClick={this.setScore} onMouseOver={this.hoverStar} onMouseLeave={this.leaveStar} href="#">
          <i className={starClasses}></i>
        </a>
      );
    }
  });
}(React));