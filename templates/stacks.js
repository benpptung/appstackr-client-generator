module.exports = [
  {
    name: 'react',
    nature: 'js',
    files: [
      'prop-types',
      'site/react.js',
      'site/react-dom.js'
    ],
    browserify: {
      // Cannot use `*` here, because `*` automatically expose npm module name.
      // In this stack, we have to do some tricks to build react
      exposes: 'prop-types, react.js:react, react-dom.js:react-dom'
    }
  },
  {
    name: 'bundle',
    nature: 'js',
    files: [
      'component-emitter',
      'inject-css',
      'react-style-prefix',
      'inherits'
    ],
    browserify: {
      exposes: '*'
    }
  },
  {
    name: '{component_name_lowercase}',
    nature: 'js',
    files: 'rendering.js',
    watch: 'rendering.js, lib/**/*.*',
    browserify: {
      // add React Add-Ons, if this component needs them
      externals: [
        'prop-types', 'react', 'react-dom', 'inject-css', 'react-style-prefix',
        'inherits', 'component-emitter'
      ]
    }
  }
];