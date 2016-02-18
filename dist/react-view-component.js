(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactViewComponent"] = factory(require("React"));
	else
		root["ReactViewComponent"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * ReactViewComponent Library
	 */

	__webpack_require__(6);

	module.exports = __webpack_require__(1).View;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp2;

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.View = undefined;

	var _react = __webpack_require__(7);

	var _react2 = _interopRequireDefault(_react);

	var _viewport = __webpack_require__(2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BORDERS_VERTICAL = ['borderTop', 'borderBottom'];

	var BORDERS_HORIZONTAL = ['borderRight', 'borderLeft'];

	var BORDERS = [].concat(BORDERS_VERTICAL, BORDERS_HORIZONTAL);

	var MARGINS_VERTICAL = ['marginTop', 'marginBottom'];

	var MARGINS_HORIZONTAL = ['marginLeft', 'marginRight'];

	var MARGINS = [].concat(MARGINS_VERTICAL, MARGINS_HORIZONTAL);

	var PADDINGS_VERTICAL = ['paddingTop', 'paddingBottom'];

	var PADDINGS_HORIZONTAL = ['paddingLeft', 'paddingRight'];

	var PADDINGS = [].concat(PADDINGS_VERTICAL, PADDINGS_HORIZONTAL);

	var View = exports.View = (_temp2 = _class = function (_React$Component) {
	    _inherits(View, _React$Component);

	    function View() {
	        var _Object$getPrototypeO;

	        var _temp, _this, _ret;

	        _classCallCheck(this, View);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(View)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	            width: null,
	            height: null,
	            isVisible: _this.props.isVisible
	        }, _this.onWindowResize = function () {
	            _this.setState(_extends({}, (0, _viewport.getSize)()));
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    // Utility methods

	    _createClass(View, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            if (this.props.mode === 'viewport' || this.props.viewport) {
	                this.setState(_extends({}, (0, _viewport.getSize)()));
	                window.addEventListener('resize', this.onWindowResize);
	            }
	        }
	    }, {
	        key: 'componentWillUnmount',
	        value: function componentWillUnmount() {
	            if (this.props.mode === 'viewport' || this.props.viewport) {
	                window.removeEventListener('resize', this.onWindowResize);
	            }
	        }
	    }, {
	        key: 'willShow',
	        value: function willShow() {}
	    }, {
	        key: 'willHide',
	        value: function willHide() {}
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props;
	            var mode = _props.mode;
	            var width = _props.width;
	            var height = _props.height;
	            var margin = _props.margin;
	            var border = _props.border;
	            var borderTop = _props.borderTop;
	            var borderRight = _props.borderRight;
	            var borderBottom = _props.borderBottom;
	            var borderLeft = _props.borderLeft;
	            var borderRadius = _props.borderRadius;
	            var color = _props.color;
	            var contentColor = _props.contentColor;
	            var shadow = _props.shadow;
	            var direction = _props.direction;
	            var flex = _props.flex;
	            var align = _props.align;
	            var center = _props.center;
	            var mask = _props.mask;
	            var viewport = _props.viewport;
	            var horizontal = _props.horizontal;
	            var isVisible = _props.isVisible;
	            var scroll = _props.scroll;
	            var float = _props.float;
	            var children = _props.children;
	            var childrenWidth = _props.childrenWidth;
	            var childrenHeight = _props.childrenHeight;
	            var childrenColor = _props.childrenColor;
	            var style = _props.style;
	            var contentStyle = _props.contentStyle;
	            var entryAnimation = _props.entryAnimation;
	            var exitAnimation = _props.exitAnimation;

	            var props = _objectWithoutProperties(_props, ['mode', 'width', 'height', 'margin', 'border', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft', 'borderRadius', 'color', 'contentColor', 'shadow', 'direction', 'flex', 'align', 'center', 'mask', 'viewport', 'horizontal', 'isVisible', 'scroll', 'float', 'children', 'childrenWidth', 'childrenHeight', 'childrenColor', 'style', 'contentStyle', 'entryAnimation', 'exitAnimation']);

	            if (horizontal) {
	                direction = 'horizontal';
	            }

	            var styles = {};
	            styles.view = viewStyle(this.props, this.state);
	            styles.outer = outerStyle(this.props, styles);
	            styles.inner = innerStyle(this.props, styles);
	            styles.align = alignStyle(this.props, styles);

	            if (styles.inner.width && styles.inner.height) {
	                children = flexChildren(children, direction, styles.inner.width, styles.inner.height);
	            }

	            if (align || center) {
	                styles.inner.position = 'relative';
	                children = _react2.default.createElement(
	                    'div',
	                    { style: styles.align },
	                    children
	                );
	            }

	            var className = ['animated'];

	            if (!isVisible) {
	                className.push('animated__hidden');
	            }

	            return _react2.default.createElement(
	                'div',
	                _extends({}, this.props, { style: styles.view, className: className.join(' ') }),
	                _react2.default.createElement(
	                    'div',
	                    { style: styles.outer },
	                    _react2.default.createElement(
	                        'div',
	                        { style: styles.inner },
	                        children
	                    )
	                )
	            );
	        }
	    }]);

	    return View;
	}(_react2.default.Component), _class.displayName = 'View', _class.noScroll = _viewport.noScroll, _class.getViewportSize = _viewport.getSize, _class.propTypes = {
	    color: _react2.default.PropTypes.string,
	    contentColor: _react2.default.PropTypes.string,
	    shadow: _react2.default.PropTypes.string,
	    width: _react2.default.PropTypes.number,
	    height: _react2.default.PropTypes.number,
	    margin: _react2.default.PropTypes.number,
	    marginTop: _react2.default.PropTypes.number,
	    marginRight: _react2.default.PropTypes.number,
	    marginBottom: _react2.default.PropTypes.number,
	    marginLeft: _react2.default.PropTypes.number,
	    padding: _react2.default.PropTypes.number,
	    paddingTop: _react2.default.PropTypes.number,
	    paddingRight: _react2.default.PropTypes.number,
	    paddingBottom: _react2.default.PropTypes.number,
	    paddingLeft: _react2.default.PropTypes.number,
	    border: _react2.default.PropTypes.string,
	    borderTop: _react2.default.PropTypes.string,
	    borderRight: _react2.default.PropTypes.string,
	    borderBottom: _react2.default.PropTypes.string,
	    borderLeft: _react2.default.PropTypes.string,
	    borderRadius: _react2.default.PropTypes.number,
	    mode: _react2.default.PropTypes.oneOf(['viewport', 'view']),
	    direction: _react2.default.PropTypes.oneOf(['vertical', 'horizontal']),
	    flex: _react2.default.PropTypes.number,
	    align: _react2.default.PropTypes.oneOf(['center', 'topLeft', 'topCenter', 'topRight', 'middleLeft', 'middleCenter', 'middleRight', 'bottomLeft', 'bottomCenter', 'bottomRight']),
	    center: _react2.default.PropTypes.bool,
	    mask: _react2.default.PropTypes.bool,
	    viewport: _react2.default.PropTypes.bool,
	    horizontal: _react2.default.PropTypes.bool,
	    isVisible: _react2.default.PropTypes.bool,
	    scroll: _react2.default.PropTypes.oneOf(['noscroll', 'auto', 'mobile']),
	    float: _react2.default.PropTypes.oneOf(['left', 'right']),
	    children: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.array, _react2.default.PropTypes.string]),
	    childrenWidth: _react2.default.PropTypes.number,
	    childrenHeight: _react2.default.PropTypes.number,
	    childrenColor: _react2.default.PropTypes.string,
	    style: _react2.default.PropTypes.object,
	    contentStyle: _react2.default.PropTypes.object,
	    entryAnimation: _react2.default.PropTypes.oneOf(['slideDown', 'slideUp', 'slideRight', 'slideLeft']),
	    exitAnimation: _react2.default.PropTypes.oneOf(['slideDown', 'slideUp', 'slideRight', 'slideLeft'])
	}, _class.defaultProps = {
	    color: null,
	    contentColor: null,
	    shadow: null,
	    width: null,
	    height: null,
	    margin: 0,
	    marginTop: null,
	    marginRight: null,
	    marginBottom: null,
	    marginLeft: null,
	    padding: 0,
	    paddingTop: null,
	    paddingRight: null,
	    paddingBottom: null,
	    paddingLeft: null,
	    border: null,
	    borderTop: null,
	    borderRight: null,
	    borderBottom: null,
	    borderLeft: null,
	    borderRadius: null,
	    mode: 'view',
	    direction: 'vertical',
	    flex: null,
	    align: null,
	    center: null,
	    mask: false,
	    viewport: null,
	    horizontal: null,
	    isVisible: true,
	    scroll: 'noscroll',
	    float: null,
	    childrenWidth: null,
	    childrenHeight: null,
	    childrenColor: null,
	    style: {},
	    contentStyle: {},
	    entryAnimation: null,
	    exitAnimation: null
	}, _temp2);

	var viewStyle = function viewStyle(props, state) {
	    var _ = _extends({}, props.style);

	    if (props.width !== null) {
	        _.width = props.width;
	    }

	    if (props.height !== null) {
	        _.height = props.height;
	    }

	    if (props.mode === 'viewport' || props.viewport) {
	        _.width = state.width;
	        _.height = state.height;
	        _.position = 'fixed';
	        _.top = 0;
	        _.left = 0;
	    }

	    if (Object.keys(_).length) {
	        _.display = 'block';
	        _.overflow = 'auto';

	        if (props.float !== null) {
	            _.float = props.float;
	        }
	    }

	    return _;
	};

	var outerStyle = function outerStyle(props, styles) {
	    var _ = _extends({}, props.contentStyle);
	    var margins = {};

	    if (styles.view.width) {
	        _.width = styles.view.width;
	    }

	    if (styles.view.height) {
	        _.height = styles.view.height;
	    }

	    if (Object.keys(_).length) {
	        _.display = 'block';
	        _.overflow = 'auto';
	    }

	    // Apply margins

	    if (props.margin) {
	        MARGINS.filter(function (marginName) {
	            return props[marginName] === null;
	        }).forEach(function (marginName) {
	            return margins[marginName] = props.margin;
	        });
	    }

	    MARGINS.filter(function (marginName) {
	        return props[marginName] !== null;
	    }).forEach(function (marginName) {
	        return margins[marginName] = props[marginName];
	    });

	    MARGINS_HORIZONTAL.filter(function (marginName) {
	        return margins[marginName] || margins[marginName] === 0;
	    }).forEach(function (marginName) {
	        var marginValue = margins[marginName];
	        if (_.width && marginValue > 0 && marginValue < 1) {
	            marginValue = _.width * marginValue;
	        }
	        _[marginName] = marginValue;
	    });

	    MARGINS_VERTICAL.filter(function (marginName) {
	        return margins[marginName] || margins[marginName] === 0;
	    }).forEach(function (marginName) {
	        var marginValue = margins[marginName];
	        if (_.height && marginValue > 0 && marginValue < 1) {
	            marginValue = _.height * marginValue;
	        }
	        _[marginName] = marginValue;
	    });

	    if (_.width) {
	        MARGINS_HORIZONTAL.filter(function (marginName) {
	            return _[marginName];
	        }).forEach(function (marginName) {
	            return _.width -= _[marginName];
	        });
	    }

	    if (_.height) {
	        MARGINS_VERTICAL.filter(function (marginName) {
	            return _[marginName];
	        }).forEach(function (marginName) {
	            return _.height -= _[marginName];
	        });
	    }

	    // Apply borders

	    if (props.border) {
	        BORDERS.forEach(function (border) {
	            return _[border] = props.border;
	        });
	    }

	    BORDERS.forEach(function (border) {
	        if (props[border]) {
	            _[border] = props[border];
	        }
	    });

	    if (props.borderRadius !== null) {
	        _.borderRadius = props.borderRadius;
	    }

	    if (props.color !== null) {
	        _.background = props.color;
	    }

	    if (props.shadow !== null) {
	        _.boxShadow = props.shadow;
	    }

	    return _;
	};

	var innerStyle = function innerStyle(props, styles) {
	    var _ = {};
	    var paddings = {};

	    if (styles.outer.height) {
	        _.height = styles.outer.height;
	        BORDERS_VERTICAL.forEach(function (border) {
	            return _.height -= borderSize(styles.outer[border]);
	        });
	    }

	    if (styles.outer.width) {
	        _.width = styles.outer.width;
	        BORDERS_HORIZONTAL.forEach(function (border) {
	            return _.width -= borderSize(styles.outer[border]);
	        });
	    }

	    if (Object.keys(_).length) {
	        _.display = 'block';

	        switch (props.scroll) {
	            case 'auto':
	                _.overflow = 'auto';
	                break;
	            case 'mobile':
	                _.overflow = 'scroll';
	                _.WebkitOverflowScrolling = 'touch';
	                break;
	            case 'noscroll':
	            default:
	                break;
	        }
	    }

	    if (props.mask) {
	        _.overflow = 'hidden';
	    }

	    // Apply paddings

	    if (props.padding) {
	        PADDINGS.filter(function (paddingName) {
	            return props[paddingName] === null;
	        }).forEach(function (paddingName) {
	            return paddings[paddingName] = props.padding;
	        });
	    }

	    PADDINGS.filter(function (paddingName) {
	        return props[paddingName] !== null;
	    }).forEach(function (paddingName) {
	        return paddings[paddingName] = props[paddingName];
	    });

	    PADDINGS_HORIZONTAL.filter(function (paddingName) {
	        return paddings[paddingName] || paddings[paddingName] === 0;
	    }).forEach(function (paddingName) {
	        var paddingValue = paddings[paddingName];
	        if (_.width && paddingValue > 0 && paddingValue < 1) {
	            paddingValue = _.width * paddingValue;
	        }
	        _[paddingName.replace('padding', 'margin')] = paddingValue;
	    });

	    PADDINGS_VERTICAL.filter(function (paddingName) {
	        return paddings[paddingName] || paddings[paddingName] === 0;
	    }).forEach(function (paddingName) {
	        var paddingValue = paddings[paddingName];
	        if (_.height && paddingValue > 0 && paddingValue < 1) {
	            paddingValue = _.height * paddingValue;
	        }
	        _[paddingName.replace('padding', 'margin')] = paddingValue;
	    });

	    if (_.width) {
	        MARGINS_HORIZONTAL.filter(function (margin) {
	            return _[margin];
	        }).forEach(function (margin) {
	            return _.width -= _[margin];
	        });
	    }

	    if (_.height) {
	        MARGINS_VERTICAL.filter(function (margin) {
	            return _[margin];
	        }).filter(function (margin) {
	            return _[margin];
	        }).forEach(function (margin) {
	            return _.height -= _[margin];
	        });
	    }

	    // Apply border properties

	    if (props.borderRadius !== null) {
	        _.borderRadius = props.borderRadius;
	    }

	    if (props.contentColor !== null) {
	        _.background = props.contentColor;
	    }

	    return _;
	};

	var borderSize = function borderSize(border) {
	    return parseInt(border, 10) || 0;
	};

	var flexChildren = function flexChildren(_children, mode, width, height) {

	    var horizontal = mode === 'horizontal';
	    var totalSize = horizontal ? width : height;
	    var remainingSize = totalSize;
	    var dimensionPropName = horizontal ? 'width' : 'height';
	    var dynamicRegionsCount = 0;

	    // fixed sized elements
	    var children = _react2.default.Children.map(_children, function (child) {
	        var childProps = {};
	        if (child.type && child.type.displayName === 'View') {
	            var flex = child.props.flex;
	            childProps = horizontal ? { height: height } : { width: width };

	            // Flex child views

	            if (flex === 1 || flex === '*' || child.props.fill) {
	                dynamicRegionsCount += 1;
	                return child;
	            }

	            if (typeof flex === 'number') {
	                if (flex <= 1) {
	                    flex = totalSize * flex;
	                }

	                childProps.float = 'left';
	                childProps[dimensionPropName] = flex;
	                remainingSize -= flex;
	                return _react2.default.cloneElement(child, childProps);
	            }

	            // Percentage size child view

	            var childWidth = child.props.width;
	            var childHeight = child.props.height;

	            if (childWidth !== null && childWidth <= 1) {
	                childProps.width = childWidth * width;
	            }

	            if (childHeight !== null && childHeight <= 1) {
	                childProps.height = childHeight * height;
	            }

	            if (Object.keys(childProps).length > 0) {
	                return _react2.default.cloneElement(child, childProps);
	            }
	        }
	        return child;
	    });

	    children = _react2.default.Children.map(children, function (child) {
	        if (child.type && child.type.displayName === 'View') {
	            var flex = child.props.flex;
	            var childProps = horizontal ? { height: height } : { width: width };

	            if (flex === 1 || flex === '*' || child.props.fill) {
	                if (horizontal) {
	                    childProps[dimensionPropName] = Math.floor(remainingSize / dynamicRegionsCount);
	                } else {
	                    childProps[dimensionPropName] = Math.round(remainingSize / dynamicRegionsCount);
	                }
	                childProps.float = 'left';
	                return _react2.default.cloneElement(child, childProps);
	            }
	        }
	        return child;
	    });

	    return children;
	};

	var alignStyle = function alignStyle(props, styles) {
	    var align = props.align;
	    var center = props.center;
	    var childrenWidth = props.childrenWidth;
	    var childrenHeight = props.childrenHeight;
	    var childrenColor = props.childrenColor;

	    if (center) {
	        align = 'center';
	    }

	    var _ = {
	        position: 'absolute',
	        display: 'block'
	    };

	    if (childrenWidth > 0 && childrenWidth <= 1) {
	        _.width = styles.inner.width * childrenWidth;
	    } else if (childrenWidth > 1) {
	        _.width = childrenWidth;
	    }

	    if (childrenHeight > 0 && childrenHeight <= 1) {
	        _.height = styles.inner.height * childrenHeight;
	    } else if (childrenHeight > 1) {
	        _.height = childrenHeight;
	    }

	    if (childrenColor) {
	        _.background = childrenColor;
	    }

	    switch (align) {
	        case 'center':
	        case 'center center':
	        case 'middleCenter':
	            _.top = '50%';
	            _.left = '50%';
	            _.transform = 'translate(-50%, -50%)';
	            break;
	        case 'topCenter':
	            _.top = 0;
	            _.left = '50%';
	            _.transform = 'translate(-50%, 0)';
	            break;
	        case 'topRight':
	            _.top = 0;
	            _.right = 0;
	            break;

	        case 'middleLeft':
	            _.top = '50%';
	            _.left = 0;
	            _.transform = 'translate(0, -50%)';
	            break;
	        case 'middleRight':
	            _.top = '50%';
	            _.right = 0;
	            _.transform = 'translate(0, -50%)';
	            break;
	        case 'bottomLeft':
	            _.bottom = 0;
	            _.left = 0;
	            break;
	        case 'bottomCenter':
	            _.bottom = 0;
	            _.left = '50%';
	            _.transform = 'translate(-50%, 0)';
	            break;
	        case 'bottomRight':
	            _.bottom = 0;
	            _.right = 0;
	            break;

	        case 'topLeft':
	        default:
	            _.top = 0;
	            _.left = 0;
	            break;
	    }
	    return _;
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.getSize = getSize;
	exports.noScroll = noScroll;
	function getSize() {

	    var w = window,
	        d = document,
	        e = d.documentElement,
	        g = d.getElementsByTagName('body')[0],
	        x = w.innerWidth || e.clientWidth || g.clientWidth,
	        y = w.innerHeight || e.clientHeight || g.clientHeight;

	    return {
	        width: x,
	        height: y
	    };
	}

	// prevents body scroll on iOS Home Screen App
	function noScroll() {
	    document.ontouchstart = function (e) {
	        var preventScroll = true;
	        var target = e.target;
	        var limit = 100;

	        while (target.tagName != 'BODY' && limit > 0) {
	            target = target.parentNode;
	            if (target.style.overflow === 'scroll') {
	                preventScroll = false;
	            }
	            limit--;
	        }

	        if (preventScroll) {
	            e.preventDefault();
	            return false;
	        }
	    };
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, ".animated {\n  transition: transform 0.3s ease-in-out; }\n  .animated.animated__hidden {\n    transform: translateY(-100%); }\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./animations.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./animations.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }
/******/ ])
});
;