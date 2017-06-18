'use strict';

/**
 * Module Dependencies
 */
const React = require('react');
const inherits = require('inherits');
const is = require('prop-types');
const _proto = require('./prototype');
const inject = require('inject-css');
const files = require('./css/images.files');


/**
 * inherits and expose module
 */
inject(require('./css/index.scss'), {prepend: true});
inherits({component_name}, React.Component);
module.exports = {component_name};
var prototype = Object.assign({component_name}.prototype, _proto);

{component_name}.defaultProps = {

};

{component_name}.propTypes = {

};

/**
 * @constructor
 */
function {component_name}(props) {
  React.Component.call(this, props);
  this.state = {};

  this.prepareStyles();
  this.subscribe();
}

/**
 * @public
 * @return {ReactElement}
 */
prototype.render = function() {

  return (

    /*jshint ignore:start*/
    <div className="{component_name_lowercase}">
      <h1>React Starter kit</h1>
      <p>
        Powerful frontend React Component Starter Kit.<br />
        Support jsx, js, css, scss, styl, and automatically move image files in other appstackr projects.<br />
        <a href="https://www.npmjs.com/package/react-tap-event-plugin">react-tap-event-plugin</a> ready.
      </p>
      <div><img src="/img/clipart/img.png" width="150" height="205" /></div>
      <p className="footer">Powered by <a href="https://github.com/benpptung/appstackr">appstackr</a></p>
    </div>
    /*jshint ignore:end*/
  );
};

if (process.env.NODE_ENV !== 'production') {
  {component_name}.displayName = '{component_name}';
}