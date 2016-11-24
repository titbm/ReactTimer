var React = require('react');
var PropTypes = React.PropTypes;

var CountdownForm = React.createClass({

  onSubmit: function(event) {
    event.preventDefault();
    var strSeconds = this.refs.seconds.value;

    console.log('input length', $('input').length);

    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10));
    }
  },

  render: function() {
    return (
      <div>
        <form onSubmit={ this.onSubmit } ref="form" className="Countdown-form" >
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }

});

module.exports = CountdownForm;
