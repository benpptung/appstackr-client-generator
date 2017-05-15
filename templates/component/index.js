'use strict';

/**
 * Module Dependencies
 */
const React = require('react');
const inherits = require('inherits');
const _proto = require('./prototype');
const delcss = require('inject-css')(require('./style/style.scss'));
const styles = require('./style/styles');
const files = require('./style/images.files');


/**
 * inherits and expose module
 */
inherits({component_name}, React.Component);
module.exports = {component_name};
var prototype = Object.assign({component_name}.prototype, _proto);

/**
 * @constructor
 */
function {component_name}(props) {
  React.Component.call(this, props);
  this.state = {};
}

/**
 * @public
 * @return {ReactElement}
 */
prototype.render = function() {

  var containerStyl = styles.container();
  var containerClass = '{component_name_lowercase}';

  return (

    /*jshint ignore:start*/
    <div className={containerClass}>
      <h1>React Starter kit</h1>
      <p>
        Powerful frontend React Component Starter Kit.<br />
        Support jsx, js, css, scss, styl, and automatically move image files in other appstackr projects.<br />
        <a href="http://material-ui.com">material-ui</a> and <a href="https://www.npmjs.com/package/react-tap-event-plugin">react-tap-event-plugin</a> ready.
      </p>
      <div><img src="/img/clipart/img.png" width="150" height="205" /></div>
      <p className="footer">Powered by <a href="https://github.com/benpptung/appstackr">appstackr</a></p>
    </div>
    /*jshint ignore:end*/
  );
};