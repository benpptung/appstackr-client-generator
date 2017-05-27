A personal `React` Component starter kit to develop client component with appstackr

Write React class in traditional prototype-based class, and powered by appstackr. Note, `appstackr` is working and tested on Node.js `4.4.3`, so it should have some problems in `Node.js > 4.4.3`.

### Usage

#####Install appstackr-client-generator globally

```
npm install -g appstackr-client-generator
```


#####Init a `React` component project, e.g. an `Example` component

```
appstackr example
```


#####Install dependencies:

```
cd example && npm install
```


#####Initial stacking:

```
npm run appstack
```


#####Start multiple screens syncing development

```
npm run bsync
```

Push this project to Github, or private repository server, or publish to npmjs

#####Install this module into another project

```
npm install example --save-dev
```

```
var Example = require('example');
```

In appstackr server project, this module can copy images to public image directory,
check `lib/style/images.files`    