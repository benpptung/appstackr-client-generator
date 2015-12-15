'use strict';

/**
 * Module Dependencies
 */
var React = require('react');
var ReactDOM = require('react-dom');
var {component_name} = require('../..');
var mountnode = document.getElementById('mountnode');

ReactDOM.render(<{component_name} />, mountnode);