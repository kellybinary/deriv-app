import classNames from 'classnames';
import PropTypes  from 'prop-types';
import React      from 'react';

const getUrlBase = (path = '') => {
    const l = window.location;

    if (!/^\/br_|bot/.test(l.pathname)) return path;

    return `/${l.pathname.split('/')[1]}${/^\//.test(path) ? path : `/${path}`}`;
};

const getKebabCase = (str) => {
    if (!str) return str;
    return str
        .replace(/([a-z])([A-Z])/g, '$1-$2') // get all lowercase letters that are near to uppercase ones
        .replace(/[\s_]+/g, '-')             // replace all spaces and low dash
        .toLowerCase();
};

/* eslint-disable react/display-name */
const Icon = ({
    className,
    icon,
    onClick,
    disabled,
    active,
    height,
    width,
    medium,
    large,
    green,
    red,
    secondary,
    color,
}) => {
    const sizes = {
        small : 16,
        medium: 24,
        large : 32,
    };

    const size = large ? sizes.large : (medium ? sizes.medium : sizes.small);

    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            className={classNames('dc-icon', className, {
                'dc-icon--active'   : active,
                'dc-icon--disabled' : disabled,
                'dc-icon--green'    : green,
                'dc-icon--red'      : red,
                'dc-icon--secondary': secondary,
                'dc-icon--color'    : color,
            })}
            height={height || size}
            width={width || size}
            onClick={onClick}
        >
            <use xlinkHref={`${getUrlBase('/sprite.svg')}#${getKebabCase(icon)}`} />
        </svg>
    );
};
/* eslint-enable react/display-name */

Icon.propTypes = {
    className: PropTypes.string,
    disabled : PropTypes.bool,
    height   : PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    icon   : PropTypes.string,
    onClick: PropTypes.func,
    width  : PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

export default Icon;
