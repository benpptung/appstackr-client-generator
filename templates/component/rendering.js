'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const {component_name} = require('./lib/');

/*jshint ignore:start */
var mountnode = document.getElementById('mountnode');
if (mountnode) {
  ReactDOM.render(
    <{component_name} />,
    mountnode);
}