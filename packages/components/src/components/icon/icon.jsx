import classNames from 'classnames';
import PropTypes  from 'prop-types';
import React      from 'react';

const getUrlBase = (path = '') => {
    const l = window.location;

    if (!/^\/br_|bot/.test(l.pathname)) return path;

    return `/${l.pathname.split('/')[1]}${/^\//.test(path) ? path : `/${path}`}`;
};

const getKebabCase = (str) => {
    return str.split(/(?=[A-Z])/).join('-').toLowerCase();
};

/* eslint-disable react/display-name */
const Icon = ({ className, height, icon, disabled, onClick, width }) => {
    return (
        <svg
            className={classNames('dc-icon', className, {
                'dc-icon--disabled': disabled,
            })}
            height={height || 16}
            width={width || 16}
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
