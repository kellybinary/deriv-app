import classNames       from 'classnames';
import PropTypes        from 'prop-types';
import React            from 'react';
import { getKebabCase } from '../../../utils/string';

const getUrlBase = (path = '') => {
    const l = window.location;

    if (!/^\/br_|bot/.test(l.pathname)) return path;

    return `/${l.pathname.split('/')[1]}${/^\//.test(path) ? path : `/${path}`}`;
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
    underlying,
}) => {
    const sizes = {
        small : 16,
        medium: 24,
        large : 32,
    };

    const size = large ? sizes.large : (medium ? sizes.medium : sizes.small);

    let spriteFileName = 'common';
    if (icon.includes('IconTradetype')) {
        spriteFileName = 'tradetypes';
    } else if (icon.includes('IconFlag-')) {
        spriteFileName = 'flags';
    } else if (icon.includes('IconCurrency-')) {
        spriteFileName = 'currencies';
    } else if (underlying) {
        spriteFileName = 'underlying';
    }

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
            <use xlinkHref={`${getUrlBase(`/${spriteFileName}.svg`)}#${underlying ? `ic-${icon}` : getKebabCase(icon)}`} />
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
