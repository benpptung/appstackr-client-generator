module.exports = [
  {
    name: 'react',
    nature: 'js',
    files: 'node_modules/react/dist/react-with-addons.js',
    browserify: {
      exposes: 'react-with-addons.js:react'
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
    files: 'inject-css, react-style-prefix',
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
      externals: 'react, inject-css, react-style-prefix'
    }
  }
];