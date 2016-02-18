
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
        viewport: React.PropTypes.bool,
        horizontal: React.PropTypes.bool,
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
    };

    static defaultProps = {
        color: null,
        contentColor: null,
        width: null,
        height: null,
        margin: 0,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        padding: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
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
        viewport: null,
        horizontal: null,
        scroll: 'noscroll',
        float: null,
        childrenWidth: null,
        childrenHeight: null,
        childrenColor: null,
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
            direction,
            flex,
            align,
            center,
            viewport,
            horizontal,
            scroll,
            float,
            children,
            childrenWidth,
            childrenHeight,
            childrenColor,
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
    var _ = {};

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
        _.overflow = 'hidden';

        if (props.float !== null) {
            _.float = props.float;
        }
    }

    return _;
};

var outerStyle = (props, styles) => {
    var _ = {};

    if (styles.view.width) {
        _.width = styles.view.width;
    }

    if (styles.view.height) {
        _.height = styles.view.height;
    }

    if (Object.keys(_).length) {
        _.display = 'block';
        _.overflow = 'hidden';
    }

    if (props.margin) {
        MARGINS.forEach(margin => _[margin] = props.margin);
    }

    MARGINS
    .filter(margin => props[margin])
    .forEach(margin => _[margin] = props[margin]);

    if (_.width) {
        MARGINS_HORIZONTAL
        .filter(margin => _[margin])
        .forEach(margin => _.width -= _[margin]);
    }

    if (_.height) {
        MARGINS_VERTICAL
        .filter(margin => _[margin])
        .forEach(margin => _.height -= _[margin]);
    }

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

    return _;
};

var innerStyle = (props, styles) => {
    var _ = {};

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
            default:
                _.overflow = 'hidden';
                break;
        }
    }

    if (props.padding) {
        MARGINS.forEach(margin => _[margin] = props.padding);
    }

    PADDINGS
    .map((padding, i) => [padding, MARGINS[i]])
    .filter(i => props[i[0]])
    .forEach(i => _[i[1]] = props[i[0]]);

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

                // there is a problem with a white space below each block
                // in the demo. I have no idea what the hell is that and why it is caused
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
                childProps[dimensionPropName] = Math.floor(remainingSize / dynamicRegionsCount);
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
