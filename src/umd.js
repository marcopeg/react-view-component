/**
 * Build a standalone UMD module
 */

require('../scss/animations.scss');
var lib = require('./index');

// export utility methods within the View object
lib.View.nestedView = lib.nestedView;
lib.View.noScroll = lib.noScroll;
lib.View.getViewportSize = lib.getViewportSize;

module.exports = lib.View;
