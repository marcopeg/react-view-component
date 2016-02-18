
import React from 'react';
import { getSize, noScroll } from './viewport';

const BORDERS_VERTICAL = [
    'borderTop',
    'borderBottom',
];

const BORDERS_HORIZONTAL = [
    'borderRight',
    'borderLeft',
];

const BORDERS = [
    ...BORDERS_VERTICAL,
    ...BORDERS_HORIZONTAL,
];

const MARGINS_VERTICAL = [
    'marginTop',
    'marginBottom',
];

const MARGINS_HORIZONTAL = [
    'marginLeft',
    'marginRight',
];

const MARGINS = [
    ...MARGINS_VERTICAL,
    ...MARGINS_HORIZONTAL,
];

const PADDINGS_VERTICAL = [
    'paddingTop',
    'paddingBottom',
];

const PADDINGS_HORIZONTAL = [
    'paddingLeft',
    'paddingRight',
];

const PADDINGS = [
    ...PADDINGS_VERTICAL,
    ...PADDINGS_HORIZONTAL,
];

export class View extends React.Component {

    static displayName = 'View';

    // Utility methods
    static noScroll = noScroll;
    static getViewportSize = getSize;

    static propTypes = {
        color: React.PropTypes.string,
        contentColor: React.PropTypes.string,
        shadow: React.PropTypes.string,
        width: React.PropTypes.number,
        height: React.PropTypes.number,
        margin: React.PropTypes.number,
        marginTop: React.PropTypes.number,
        marginRight: React.PropTypes.number,
        marginBottom: React.PropTypes.number,
        marginLeft: React.PropTypes.number,
        padding: React.PropTypes.number,
        paddingTop: React.PropTypes.number,
        paddingRight: React.PropTypes.number,
        paddingBottom: React.PropTypes.number,
        paddingLeft: React.PropTypes.number,
        border: React.PropTypes.string,
        borderTop: React.PropTypes.string,
        borderRight: React.PropTypes.string,
        borderBottom: React.PropTypes.string,
        borderLeft: React.PropTypes.string,
        borderRadius: React.PropTypes.number,
        mode: React.PropTypes.oneOf(['viewport', 'view']),
        direction: React.PropTypes.oneOf(['vertical', 'horizontal']),
        flex: React.PropTypes.number,
        align: React.PropTypes.oneOf([
            'center',
            'topLeft', 'topCenter', 'topRight',
            'middleLeft', 'middleCenter', 'middleRight',
            'bottomLeft', 'bottomCenter', 'bottomRight',
        ]),
        center: React.PropTypes.bool,
        mask: React.PropTypes.bool,
        viewport: React.PropTypes.bool,
        horizontal: React.PropTypes.bool,
        isVisible: React.PropTypes.bool,
        scroll: React.PropTypes.oneOf([
            'noscroll',
            'auto',
            'mobile',
        ]),
        float: React.PropTypes.oneOf(['left', 'right']),
        children: React.PropTypes.oneOfType([
            React.PropTypes.object,
            React.PropTypes.array,
            React.PropTypes.string,
        ]),
        childrenWidth: React.PropTypes.number,
        childrenHeight: React.PropTypes.number,
        childrenColor: React.PropTypes.string,
        style: React.PropTypes.object,
        contentStyle: React.PropTypes.object,
    };

    static defaultProps = {
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
    };

    state = {
        width: null,
        height: null,
    };

    componentWillMount() {
        if (this.props.mode === 'viewport' || this.props.viewport) {
            this.setState({ ...getSize() });
            window.addEventListener('resize', this.onWindowResize);
        }
    };

    componentWillUnmount() {
        if (this.props.mode === 'viewport' || this.props.viewport) {
            window.removeEventListener('resize', this.onWindowResize);
        }
    };

    onWindowResize = () => {
        this.setState({ ...getSize() });
    };

    render() {
        var {
            mode,
            width,
            height,
            margin,
            border,
            borderTop,
            borderRight,
            borderBottom,
            borderLeft,
            borderRadius,
            color,
            contentColor,
            shadow,
            direction,
            flex,
            align,
            center,
            mask,
            viewport,
            horizontal,
            isVisible,
            scroll,
            float,
            children,
            childrenWidth,
            childrenHeight,
            childrenColor,
            style,
            contentStyle,
            ...props } = this.props;

        if (horizontal) {
            direction = 'horizontal';
        }

        var styles = {};
        styles.view = viewStyle(this.props, this.state);
        styles.outer = outerStyle(this.props, styles);
        styles.inner = innerStyle(this.props, styles);
        styles.align = alignStyle(this.props, styles);

        if (styles.inner.width && styles.inner.height) {
            children = flexChildren(
                children,
                direction,
                styles.inner.width,
                styles.inner.height,
            );
        }

        if (align || center) {
            styles.inner.position = 'relative';
            children = (
                <div style={styles.align}>
                    {children}
                </div>
            );
        }

        if (!isVisible) {
            return null;
        }

        return (
            <div {...this.props} style={styles.view}>
                <div style={styles.outer}>
                    <div style={styles.inner}>
                        {children}
                    </div>
                </div>
            </div>
        );
    };
}

var viewStyle = (props, state) => {
    var _ = { ...props.style };

    if (props.width !== null) {
        _.width = props.width;
    }

    if (props.height !== null) {
        _.height = props.height;
    }

    if (props.mode === 'viewport' || props.viewport) {
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

var outerStyle = (props, styles) => {
    var _ = { ...props.contentStyle };
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
        MARGINS
        .filter(marginName => props[marginName] === null)
        .forEach(marginName => margins[marginName] = props.margin);
    }

    MARGINS
    .filter(marginName => props[marginName] !== null)
    .forEach(marginName => margins[marginName] = props[marginName]);

    MARGINS_HORIZONTAL
    .filter(marginName => margins[marginName] || margins[marginName] === 0)
    .forEach(marginName => {
        var marginValue = margins[marginName];
        if (_.width && marginValue > 0 && marginValue < 1) {
            marginValue = _.width * marginValue;
        }
        _[marginName] = marginValue;
    });

    MARGINS_VERTICAL
    .filter(marginName => margins[marginName] || margins[marginName] === 0)
    .forEach(marginName => {
        var marginValue = margins[marginName];
        if (_.height && marginValue > 0 && marginValue < 1) {
            marginValue = _.height * marginValue;
        }
        _[marginName] = marginValue;
    });

    if (_.width) {
        MARGINS_HORIZONTAL
        .filter(marginName => _[marginName])
        .forEach(marginName => _.width -= _[marginName]);
    }

    if (_.height) {
        MARGINS_VERTICAL
        .filter(marginName => _[marginName])
        .forEach(marginName => _.height -= _[marginName]);
    }

    // Apply borders

    if (props.border) {
        BORDERS.forEach(border => _[border] = props.border);
    }

    BORDERS.forEach(border => {
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

var innerStyle = (props, styles) => {
    var _ = {};
    var paddings = {};

    if (styles.outer.height) {
        _.height = styles.outer.height;
        BORDERS_VERTICAL.forEach(border => _.height -= borderSize(styles.outer[border]));
    }

    if (styles.outer.width) {
        _.width = styles.outer.width;
        BORDERS_HORIZONTAL.forEach(border => _.width -= borderSize(styles.outer[border]));
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
            default: break;
        }
    }

    if (props.mask) {
        _.overflow = 'hidden';
    }

    // Apply paddings

    if (props.padding) {
        PADDINGS
        .filter(paddingName => props[paddingName] === null)
        .forEach(paddingName => paddings[paddingName] = props.padding);
    }

    PADDINGS
    .filter(paddingName => props[paddingName] !== null)
    .forEach(paddingName => paddings[paddingName] = props[paddingName]);

    PADDINGS_HORIZONTAL
    .filter(paddingName => paddings[paddingName] || paddings[paddingName] === 0)
    .forEach(paddingName => {
        var paddingValue = paddings[paddingName];
        if (_.width && paddingValue > 0 && paddingValue < 1) {
            paddingValue = _.width * paddingValue;
        }
        _[paddingName.replace('padding', 'margin')] = paddingValue;
    });

    PADDINGS_VERTICAL
    .filter(paddingName => paddings[paddingName] || paddings[paddingName] === 0)
    .forEach(paddingName => {
        var paddingValue = paddings[paddingName];
        if (_.height && paddingValue > 0 && paddingValue < 1) {
            paddingValue = _.height * paddingValue;
        }
        _[paddingName.replace('padding', 'margin')] = paddingValue;
    });

    if (_.width) {
        MARGINS_HORIZONTAL
        .filter(margin => _[margin])
        .forEach(margin => _.width -= _[margin]);
    }

    if (_.height) {
        MARGINS_VERTICAL
        .filter(margin => _[margin])
        .filter(margin => _[margin]).forEach(margin => _.height -= _[margin]);
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

var borderSize = border => {
    return parseInt(border, 10) || 0;
};

var flexChildren = (_children, mode, width, height) => {

    var horizontal = (mode === 'horizontal');
    var totalSize = horizontal ? width : height;
    var remainingSize = totalSize;
    var dimensionPropName = horizontal ? 'width' : 'height';
    var dynamicRegionsCount = 0;

    // fixed sized elements
    var children = React.Children.map(_children, child => {
        var childProps = {};
        if (child.type && child.type.displayName === 'View') {
            var flex = child.props.flex;
            childProps = horizontal ? { height } : { width };

            // Flex child views

            if (flex === 1 || flex === '*' || child.props.fill) {
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
                return React.cloneElement(child, childProps);
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
                return React.cloneElement(child, childProps);
            }
        }
        return child;
    });

    children = React.Children.map(children, child => {
        if (child.type && child.type.displayName === 'View') {
            var flex = child.props.flex;
            var childProps = horizontal ? { height } : { width };

            if (flex === 1 || flex === '*' || child.props.fill) {
                if (horizontal) {
                    childProps[dimensionPropName] = Math.floor(remainingSize / dynamicRegionsCount);
                } else {
                    childProps[dimensionPropName] = Math.round(remainingSize / dynamicRegionsCount);
                }
                childProps.float = 'left';
                return React.cloneElement(child, childProps);

            }
        }
        return child;
    });

    return children;
};

var alignStyle = (props, styles) => {

    var {
        align,
        center,
        childrenWidth,
        childrenHeight,
        childrenColor,
    } = props;

    if (center) {
        align = 'center';
    }

    var _ = {
        position: 'absolute',
        display: 'block',
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
