import classNames            from 'classnames';
import PropTypes             from 'prop-types';
import React                 from 'react';
import Icon                  from 'deriv-components/lib/icon';
import { IconTradeTypesMap } from '../../../Helpers/trade-types';

const IconTradeCategory = ({ className, trade_types }) => {
    const [type1, type2] = Object.values(trade_types).map(type => type.toLowerCase());

    return (
        <div className={classNames('categories-container', className)}>
            {type1 &&
                <div className='category-wrapper'>
                    <Icon
                        className='category-type'
                        icon={IconTradeTypesMap[type1]}
                    />
                </div>
            }
            {type2 &&
                <div className='category-wrapper'>
                    <Icon
                        className='category-type'
                        icon={IconTradeTypesMap[type2]}
                    />
                </div>
            }
        </div>
    );
};

IconTradeCategory.propTypes = {
    category : PropTypes.string,
    className: PropTypes.string,
};

export default IconTradeCategory;
