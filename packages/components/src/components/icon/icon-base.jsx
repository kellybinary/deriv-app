import React from 'react';

function getThemifiedProps(Svg, theme, key) {
    const { children, ...props } = Svg.props;

    if (!children) {
       const themifiedChildren = Object.keys(theme).map(rule => {
            const [attribute, value] = rule.split('=');
            if (props[attribute] === value) {
                return React.cloneElement(Svg, { key, className: theme[rule] });
            }
        }).filter(c => c !== undefined)[0];

        if (themifiedChildren) {
            return themifiedChildren;
        };
        return React.cloneElement(Svg, { key });
    }

    const childrenWithProps = [];
    React.Children.map(children, (child, idx) => {
        childrenWithProps.push(getThemifiedProps(child, theme, idx));
    });

    return React.cloneElement(Svg, { key, children: childrenWithProps });
}

const IconBase = Svg => {
    if (!Svg || !Svg.props) return <div />;

    const {
        children,
        className,
        customThemeColors,
        disableTheme,
        height,
        width,
    } = Svg.props;

    let childrenWithProps;
    if (disableTheme) {
        childrenWithProps = children;
    } else if (customThemeColors) {
        childrenWithProps = getThemifiedProps(children, customThemeColors);
    } else {
        const defaultThemeColors = {
            'fill=#a9a9a9'  : 'color1-fill',
            'stroke=#a9a9a9': 'color1-stroke',
        };
        childrenWithProps = getThemifiedProps(children, defaultThemeColors);
    }

    return (
        <svg
            className={className}
            height={height}
            width={width}
            viewBox={`0 0 ${width} ${height}`}
            xmlns='http://www.w3.org/2000/svg'
        >
            {childrenWithProps}
        </svg>
    );
};

export default IconBase;
