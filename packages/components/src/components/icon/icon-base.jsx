import React from 'react';

function getChildrenWithProps(Svg, key) {
    const { children, ...props } = Svg.props;

    if (!children) {
        if (props.fill === '#5C5C5C') {
            return React.cloneElement(Svg, { key, className: 'color1-fill' });
        } else if (props.stroke === '#5C5C5C') {
            return React.cloneElement(Svg, { key, className: 'color1-stroke' });
        }
        return React.cloneElement(Svg, { key });
    }

    const childrenWithProps = [];
    React.Children.map(children, (child, idx) => {
        childrenWithProps.push(getChildrenWithProps(child, idx));
    });

    return React.cloneElement(Svg, { key, children: childrenWithProps });
}

const IconBase = Svg => {
    if (!Svg || !Svg.props) return <div />;

    const { children, className, height, width } = Svg.props;

    const childrenWithProps = getChildrenWithProps(children);

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
