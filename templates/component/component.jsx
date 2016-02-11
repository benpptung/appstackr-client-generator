'use strict';

/**
 * Module Dependencies
 */
var React = require('react');
var prop = React.PropTypes;

/**
 * Style related modules
 */

var delcss = require('inject-css')(require('./style/style.scss'));
var styles = require('./style/styles');
require('./style/images.files');

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
        <p>
          Powerful frontend React Component Starter Kit.<br />
          Support jsx, js, css, scss, styl, and automatically move image files in other appstackr projects.
        </p>
        <div><img src="/img/clipart/img.png" width="150" height="205" /></div>
        <p className="footer">Powered by <a href="https://github.com/benpptung/appstackr">appstackr</a></p>
      </div>
    );
  }
});