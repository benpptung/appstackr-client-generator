module.exports = [
  {
    name: 'react',
    nature: 'js',
    files: [
      'node_modules/react/dist/react-with-addons.js',
      'react-dom'
    ],
    browserify: {
      // Cannot use `*` here, because `*` automatically expose npm module name.
      // In this stack, we expose react/dist/react-with-addons.js as react
      exposes: 'react-with-addons.js:react, react-dom'
    }
  },
  {
    name: 'bundle',
    nature: 'css',
    files: [
      'examples/src/example.scss'
    ]
  },
  {
    name: 'bundle',
    nature: 'js',
    files: [
      'inject-css',
      'react-style-prefix',

      // remove the following Add-Ons, if this component doesn't need them

      'react-addons-css-transition-group',
      'react-addons-update',
      'react-addons-transition-group',
      'react-addons-shallow-compare',
      'react-addons-pure-render-mixin',
      'react-addons-linked-state-mixin',
      'react-addons-clone-with-props',
      'react-addons-create-fragment'
    ],
    browserify: {
      exposes: '*' , externals: 'react'
    }
  },
  {
    name: '{component_name_lowercase}',
    nature: 'js',
    files: 'examples/src/{component_name_lowercase}.jsx',
    watch: 'index.js, lib/**/*.*',
    browserify: {
      // add React Add-Ons, if this component needs them
      externals: 'react, inject-css, react-style-prefix'
    }
  }
];