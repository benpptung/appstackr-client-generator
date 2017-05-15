'use strict';

const React = require('react');
const ReactDOM = require('react-dom');
const MuiThemeProvider = require('material-ui/styles/MuiThemeProvider').default;
const getMuiTheme = require('material-ui/styles/getMuiTheme').default;
const {component_name} = require('./lib/');

/*jshint ignore:start */
var mountnode = document.getElementById('mountnode');
if (mountnode) {
  ReactDOM.render(
    <MuiThemeProvider>
      <{component_name} />
    </MuiThemeProvider>,
    mountnode);
}