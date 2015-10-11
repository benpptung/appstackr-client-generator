'use strict';

/**
 * Module Dependencies
 */
var React = require('react');
var {component_name} = require('../..');
var mountnode = document.getElementById('mountnode');

React.render(<{component_name} />, mountnode);