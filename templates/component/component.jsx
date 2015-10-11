'use strict';

/**
 * Module Dependencies
 */
var React = require('react');
var prop = React.PropTypes;
var delcss = require('inject-css')(require('./style/style.scss'));
var styles = require('./style/styles');

/**
 * Variables
 */


/**
 * Component {component_name}
 */

var {component_name} = module.exports = React.createClass({

  displayName: '{component_name}',

  render: function () {

    var containerStyl = styles.container();
    var containerClass = '{component_name_lowercase}';

    return (
      <div className={containerClass} style={containerStyl} >
        <h1>React Starter kit</h1>
      </div>
    );
  }
});