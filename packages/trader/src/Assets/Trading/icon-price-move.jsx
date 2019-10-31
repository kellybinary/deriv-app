import classNames from 'classnames';
import PropTypes  from 'prop-types';
import React      from 'react';
import { Icon }   from 'deriv-components';

const IconPriceMove = ({ type }) => {
    let IconType;
    if (type) {
        switch (type) {
            case 'profit':
                IconType = <Icon icon='IconProfit' />;
                break;
            case 'loss':
                IconType = <Icon icon='IconLoss' />;
                break;
            default:
                IconType = <Icon icon='IconUnknown' />;
                break;
        }
    }
    return (
        type ? IconType : null
    );
};

IconPriceMove.propTypes = {
    className: PropTypes.string,
    type     : PropTypes.string,
};

export default IconPriceMove;
