'use strict';

const prototype = exports.prototype = {};

prototype.prepareStyles = function() {

  var styles = Object.defineProperties({}, {

  });

  Object.defineProperties(this, {
    styles: { get: _=> styles }
  })

};